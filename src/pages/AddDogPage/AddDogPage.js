import React from "react";
import axios from "axios";
import AddDogForm from "./AddDogForm";

const AddDogPage = () => {
  const handleSubmit = async (dogData) => {
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Dogs",
        dogData
      );
      console.log("Dog added successfully:", response.data);
      // Optionally, you could redirect the user to a different page after successful addition
    } catch (error) {
      console.error("Error in adding dog:", error);
      // Handle error appropriately, maybe display an error message to the user
    }
  };

  return (
    <div>
      <h1>Add New Dog</h1>
      <AddDogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddDogPage;

import React from "react";
import axios from "axios";
import AddDogForm from "./AddDogForm";
import ImageForm from "../../components/Image/ImageForm";
import GetDogPage from "./GetDogPage";
import EditDogForm from "./EditDogForm";
import DeleteDogForm from "./DeleteDogForm";

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
      <h3>Add a new dog </h3>
      <AddDogForm onSubmit={handleSubmit} />
      <h3>Add Picture of Dog</h3>
      <ImageForm></ImageForm>
      <h3>Edit Dog Profile</h3>
      <EditDogForm onSubmit={handleSubmit} />
      <h3>DeleteDogForm</h3>
      <DeleteDogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddDogPage;

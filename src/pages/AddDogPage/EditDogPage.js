import React, { useState } from "react";
import axios from "axios";
import EditDogForm from "./EditDogForm";

const EditDogPage = () => {
  const [dogId, setDogId] = useState(""); // Create and manage dogId state here

  const handleSubmit = async (dogData) => {
    try {
      const response = await axios.put(
        console.log("dogData before sending:", dogData)
        `https://localhost:5001/api/dogs/${dogId}`, //  should be dogId from the state
        dogData
      );
      console.log("Dog added successfully:", response.data);
    } catch (error) {
      console.error("Error in adding dog:", error);
    }
  };

  return (
    <div>
      <h1> Edit Dog profile</h1>
      <EditDogForm
        onSubmit={handleSubmit}
        dogId={dogId}
        setDogId={setDogId}
      />{" "}
      {/* Pass dogId and setDogId as props */}
    </div>
  );
};

export default EditDogPage;

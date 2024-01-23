import React, { useState } from "react";
import axios from "axios";
import EditDogForm from "./EditDogForm";

const EditDogPage = () => {
  const [dogId, setDogId] = useState(""); // Manage dogId state

  const handleEditDogSubmit = async (dogId,dogData) => {
    try {
        if(!dogId){
            console.error("dog iD is required for updating")
            return;
        }
      console.log("dogData before sending:", dogData); 
      const response = await axios.put(
        `https://localhost:5001/api/Dogs/${dogId}`, 
        dogData
      );
      console.log("Dog updated successfully:", response.data);
    } catch (error) {
      console.error("Error in updating dog:", error);
    }
  };

  return (
    <div>
      <h1>Edit Dog Profile</h1>
      <EditDogForm 
        onSubmit={handleEditDogSubmit}
        dogId={dogId}
        setDogId={setDogId}
      />
      
    </div>
  );
};

export default EditDogPage;

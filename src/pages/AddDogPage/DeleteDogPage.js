import React, { useState } from "react";
import axios from "axios";
import DeleteDogForm from "./DeleteDogForm";

const DeleteDogPage = () => {
  const [dogId, setDogId] = useState("");

  const handleDelete = async () => {
    try {
      console.log("Deleting dog with ID:", dogId);
      const response = await axios.delete(
        `https://localhost:5001/api/Dogs/${dogId}` //with dogId
      );
      console.log("Dog deleted successfully:", response.data);
    } catch (error) {
      console.error("Error in deleting dog:", error);
    }
  };

  return (
    <div>
      <h1> Delete Dog</h1>
      <DeleteDogForm
        onDelete={handleDelete}
        dogId={dogId}
        setDogId={setDogId}/>
      
    </div>
  );
};

export default DeleteDogPage;

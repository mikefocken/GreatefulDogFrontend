import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DogDetailsPage = () => {
  const { dogId } = useParams();
  const [dogDetails, setDogDetails] = useState(null);

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/dogs/${dogId}`
        );
        setDogDetails(response.data);
      } catch (error) {
        console.error("Error fetching dog details:", error);
        // Handle error appropriately
      }
    };

    fetchDogDetails();
  }, [dogId]);

  if (!dogDetails) {
    return <div>Loading...</div>; // or any other loading state representation
  }

  return (
    <div>
      <h2>{dogDetails.name}</h2>
      <p>Age: {dogDetails.age}</p>
      <p>Breed: {dogDetails.breed}</p>
      <p>Gender: {dogDetails.gender}</p>
      <p>Size: {dogDetails.size}</p>
      <p>Weight: {dogDetails.weight}</p>
      <p>Energy Level: {dogDetails.energyLevel}</p>
      <p>Color: {dogDetails.color}</p>
      <p>Adopted: {dogDetails.isAdopted ? "Yes" : "No"}</p>
      {dogDetails.image && <img src={dogDetails.image} alt={dogDetails.name} />}
    </div>
  );
};

export default DogDetailsPage;

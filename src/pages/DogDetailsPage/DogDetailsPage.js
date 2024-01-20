import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DogDetailsPage = () => {
  const { dogId } = useParams();
  const [dogDetails, setDogDetails] = useState(null);
  const [dogImages, setDogImages] = useState(null);

  useEffect(() => {
    fetchDogDetails();
    fetchDogImages();
  }, [dogId]);

  const fetchDogDetails = async () => {
    try {
      console.log("Fetching details for dog ID:", dogId);
      const detailsResponse = await axios.get(
        `https://localhost:5001/api/dogs/${dogId}`
      );
      setDogDetails(detailsResponse.data);
    } catch (error) {
      console.error("Error fetching dog details:", error);
    }
  };

  const fetchDogImages = async () => {
    try {
      console.log("Fetching images for dog ID:", dogId);
      const imageResponse = await axios.get(
        `https://localhost:5001/api/image/ByDog/${dogId}`
      );
      setDogImages(imageResponse.data);
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };

  if (!dogDetails || !dogImages) {
    return <div>Loading...</div>;
  }

  return (
    <div class="flex-conatiner-card">
      <div>
        {dogImages &&
          dogImages.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image.imageSrc}
              alt={image.title}
              width="250"
            />
          ))}
      </div>
      <div>
        {console.log(dogDetails)}
        <h1>{dogDetails.name}</h1>
        <p>Age: {dogDetails.age}</p>
        <p>Breed: {dogDetails.breed}</p>
        <p>Gender: {dogDetails.gender}</p>
        <p>Size: {dogDetails.size}</p>
        <p>Weight: {dogDetails.weight}</p>
        <p>Energy Level: {dogDetails.energyLevel}</p>
        <p>Color: {dogDetails.color}</p>
        <p>Adopted: {dogDetails.isAdopted ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default DogDetailsPage;

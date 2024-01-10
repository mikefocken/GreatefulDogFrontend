import React, { useState } from "react";
import axios from "axios";
import MatchMakerForm from "./MatchMakerForm";

const MatchMakerPage = () => {
  const [matches, setMatches] = useState([]);

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Sending data to backend:", formData);
      const response = await axios.post(
        "https://localhost:5001/api/dogs/MatchMaker",
        formData
      );
      console.log("Response received from backend:", response.data);
      setMatches(response.data);
    } catch (error) {
      console.error("Error fetching matches", error);
      console.log("Error details:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Match Maker Page</h1>
      <MatchMakerForm onSubmit={handleFormSubmit} />
      {matches.length > 0 && (
        <div>
          <h2>Matched Dogs</h2>
          <ul>
            {matches.map((dog, index) => (
              <li key={index}>
                <div>Name: {dog.name}</div>
                <div>Age: {dog.age} years</div>
                <div>Gender: {dog.gender}</div>
                <div>Size: {dog.size}</div>
                <div>Weight: {dog.weight}</div>
                <div>EnergyLevel: {dog.energyLevel}</div>
                <div>Color: {dog.color}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MatchMakerPage;

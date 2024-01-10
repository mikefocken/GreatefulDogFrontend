import React, { useState } from "react";
import axios from "axios";
import MatchMakerForm from "./MatchMakerForm";

const MatchMakerPage = () => {
  const [matches, setMatches] = useState([]);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://localhost:5001/api/matchDogs",
        formData
      );
      setMatches(response.data); // Assuming the response contains the matched dogs
    } catch (error) {
      console.error("Error fetching matches", error);
    }
  };

  return (
    <div>
      <h1>Match Maker Page</h1>
      <MatchMakerForm onSubmit={handleFormSubmit} />
      {/* Optionally render the matches here */}
      {matches.length > 0 && (
        <div>
          <h2>Matched Dogs</h2>
          {/* Render the list of matches */}
        </div>
      )}
    </div>
  );
};

export default MatchMakerPage;

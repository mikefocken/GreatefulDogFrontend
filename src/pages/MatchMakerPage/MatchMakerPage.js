import React, { useState } from "react";
import axios from "axios";
import MatchMakerForm from "./MatchMakerForm";
import { useNavigate } from "react-router-dom"; // Import useNavigate here

const MatchMakerPage = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Sending data to backend:", formData);
      const response = await axios.post(
        "https://localhost:5001/api/dogs/MatchMaker",
        formData
      );
      console.log("Response received from backend:", response.data);
      setMatches(response.data); // Save the matches in state
      navigate("/match-page", { state: { matches: response.data } }); // Navigate to MatchPage with match data
    } catch (error) {
      console.error("Error fetching matches", error);
      console.log("Error details:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Match Maker Page</h1>
      <MatchMakerForm onSubmit={handleFormSubmit} />
      {/* Removed the list of matches since we navigate to MatchPage */}
    </div>
  );
};

export default MatchMakerPage;

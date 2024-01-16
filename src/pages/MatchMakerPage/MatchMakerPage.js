import React, { useState } from "react";
import axios from "axios";
import MatchMakerForm from "./MatchMakerForm";
import { useNavigate } from "react-router-dom";

const MatchMakerPage = () => {
  const [matches, setMatches] = useState([]);
  const [dogImages, setDogImages] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Sending data to backend:", formData);
      const response = await axios.post(
        "https://localhost:5001/api/dogs/MatchMaker",
        formData
      );
      console.log("Response received from backend:", response.data);
      setMatches(response.data); // Save the matches state
      navigate("/match-page", { state: { matches: response.data } }); // Navigate to MatchPage with match data
    } catch (error) {
      console.error("Error fetching matches", error);
      console.log("Error details:", error.response?.data || error.message);
    }
  };

  const fetchDogImages = async (dogId) => { // Added dogId parameter
    try {
      console.log("Fetching images for dog id:", dogId);
      const imageResponse = await axios.get(`https://localhost:5001/api/image/ByDog/${dogId}`);
      setDogImages(imageResponse.data);
    } catch (error) {
      console.error("Error fetching dog images", error);
    }
  };

  return (
    <div>
      <h1>Match Maker Page</h1>
      <MatchMakerForm onSubmit={handleFormSubmit} />
      {/* Other components or logic can be added here if needed */}
    </div>
  );
};

export default MatchMakerPage;


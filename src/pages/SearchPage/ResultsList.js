import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const ResultsList = ({ results }) => {
  const navigate = useNavigate(); // use useNavigate hook

  const goToDogDetails = (dogId) => {
    navigate(`/dog-details/${dogId}`); // use navigate function for navigation
  };

  return (
    <div>
      <h1>ResultsList</h1>
      {results.map((dog) => (
        <div key={dog.id} onClick={() => goToDogDetails(dog.id)}>
          {dog.name}
          {/* Later, you can add an image here */}
        </div>
      ))}
    </div>
  );
};

export default ResultsList;


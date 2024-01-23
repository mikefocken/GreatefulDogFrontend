import React, { useState } from "react";
import AuthContext from "../../context/AuthContext";

const AdoptionApplicationForm = ({ onSearch }) => {
  const [applicationDate, setApplicationDate] = useState(""); // Initialize with an empty string
  const [dogId, setDogId] = useState(""); // Initialize with an empty string

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      status: "Pending", // Hardcoded to "Pending"
      applicationDate: applicationDate,
      dogId: dogId,
    };

    onSearch(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      
      <label>
        Dog ID:
        <input
          type="text"
          value={dogId}
          onChange={(e) => setDogId(e.target.value)}
        />
      </label>
      <button type="submit">Submit Dog of the week Photo</button>
    </form>
  );
};

export default AdoptionApplicationForm;

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
        Application Date:
        <input
          type="date"
          value={applicationDate}
          onChange={(e) => setApplicationDate(e.target.value)}
        />
      </label>
      <label>
        Dog ID:
        <input
          type="text"
          value={dogId}
          onChange={(e) => setDogId(e.target.value)}
        />
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default AdoptionApplicationForm;

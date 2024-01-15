import React, { useState } from "react";

const AdoptionApplicationForm = ({ onSearch }) => {
  const [applicationStatus, setApplicationStatus] = useState("Pending");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      status: applicationStatus,
      // Include additional fields like dogId and userId here later
    };

    onSearch(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Application Status:
        <select
          value={applicationStatus}
          onChange={(e) => setApplicationStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Denied">Denied</option>
          <option value="Approved">Approved</option>
        </select>
      </label>
      <button type="submit">Update Status</button>
    </form>
  );
};

export default AdoptionApplicationForm;

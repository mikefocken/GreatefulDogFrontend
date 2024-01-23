import React, { useState } from "react";

const EditAdoptionForm = ({ onSubmit }) => {
  // Add onSubmit as a prop
  const [dogId, setDogId] = useState("");
  const [status, setStatus] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [adoptionApplicationId, setAdoptionApplicationId] = useState(""); // Corrected the state variable name

  const handleEditAdoptionApplicationFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    var adoptionApplicationData = {
      applicationDate,
      status,
      dogId,
    };
    console.log("Data being sent:", adoptionApplicationData);
    onSubmit(adoptionApplicationId, adoptionApplicationData); // Make sure onSubmit is provided by the parent component
  };

  return (
    <div>
      <form onSubmit={handleEditAdoptionApplicationFormSubmit}>
        <div className="form-container">
          <label>
            Adoption Application ID:
            <input
              type="text"
              value={adoptionApplicationId}
              onChange={(e) => setAdoptionApplicationId(e.target.value)} // Corrected the function name
              placeholder="Enter Adoption Application ID"
            />
          </label>

          <label>
            Dog ID:
            <input
              type="text"
              value={dogId}
              onChange={(e) => setDogId(parseInt(e.target.value, 10))}
              placeholder="Enter Dog ID"
            />
          </label>

          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Select Status</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
              <option value="Pending">Pending</option>
            </select>
          </label>

          <label>
            applicationDate:
            <input
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
              placeholder="YYYY-MM-DD" // Placeholder indicating format
            />
          </label>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAdoptionForm;

import React, { useState } from "react";

const DeleteDogForm = ({ onDelete }) => {
  const [dogId, setDogId] = useState(""); // Add Dog ID state

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(dogId); // Pass dogId to the onDelete function
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-container">
        <label>
          Dog ID to Delete:
          <input
            type="text"
            value={dogId}
            onChange={(e) => setDogId(parseInt(e.target.value, 10))}
            placeholder="Enter Dog ID"
          />
        </label>
        <button type="submit">Delete Dog</button>
      </div>
    </form>
  );
};

export default DeleteDogForm;

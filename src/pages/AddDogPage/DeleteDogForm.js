import React, { useState } from "react";

const DeleteDogForm = ({ onDeleteSubmit }) => {
  const [dogId, setDogId] = useState("");

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    onDeleteSubmit(dogId); // Call the callback function with the dog ID for deletion
  };

  return (
    <div>
      <h1>Delete Dog Profile</h1>
      <form onSubmit={handleDeleteSubmit}>
        <input
          type="text"
          value={dogId}
          onChange={(e) => setDogId(e.target.value)}
          placeholder="Enter Dog ID"
        />
        <button type="submit">Delete Dog</button>
      </form>
    </div>
  );
};

export default DeleteDogForm;

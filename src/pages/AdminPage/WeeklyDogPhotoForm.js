import React, { useState } from "react";

const WeeklyDogPhotoForm = ({ onDogIdSubmit }) => {
  const [inputDogId, setInputDogId] = useState("");
  const [lastSubmittedId, setLastSubmittedId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLastSubmittedId(inputDogId);
    onDogIdSubmit(inputDogId); // Call the callback function with the dog ID
  };

  const handleChange = (e) => {
    setInputDogId(e.target.value);
    if (lastSubmittedId !== "") {
      setLastSubmittedId(""); // Reset the last submitted ID if input changes
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputDogId} onChange={handleChange} />
      <button type="submit">Submit</button>
      {lastSubmittedId !== "" && <p>Last submitted ID: {lastSubmittedId}</p>}
    </form>
  );
};

export default WeeklyDogPhotoForm;

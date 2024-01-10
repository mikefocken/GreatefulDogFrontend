import React, { useState } from "react";



const MatchMakerForm = ({ onSubmit }) => {
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [energylevel, setEnergyLevel] = useState("");
  const [color, setColor] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    onSubmit({ age, breed, gender, size, weight, energylevel, color });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-container">
        <label>
          Age:
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">Select Age Range</option>
            <option value="1-2">1-2 years</option>
            <option value="3-4">3-4 years</option>
            <option value="5-7">5-7 years</option>
            <option value="8-10">8-10 years</option>
            <option value="11-15">11-15 years</option>
          </select>
        </label>

        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Enter dog breed"
          />
        </label>

        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="1">Female</option>
            <option value="2">Male</option>
          </select>
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="1">Large</option>
            <option value="2">Medium</option>
            <option value="3">Small</option>
          </select>
        </label>

        <label>
          Weight:
          <select value={weight} onChange={(e) => setWeight(e.target.value)}>
            <option value="">Select Weight Range</option>
            <option value="10-20">10-20 Lbs</option>
            <option value="21-30">21-30 Lbs</option>
            <option value="31-50">31-50 Lbs</option>
            <option value="51-70">51-70 Lbs</option>
            <option value="71-90">71-90 Lbs</option>
            <option value="91-110"> 91-110 Lbs</option>
          </select>
        </label>
        <label>
          EnergyLevel:
          <select
            value={energylevel}
            onChange={(e) => setEnergyLevel(e.target.value)}
          >
            <option value="">Select EnergyLevel</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select Color </option>
            <option value="Brown">Brown</option>
            <option value="Tan">Tan</option>
            <option value="Yellow">Yellow</option>
            <option value="Golden">Golden</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
            <option value="Red">Red</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MatchMakerForm;

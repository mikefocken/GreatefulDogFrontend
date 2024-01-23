import React, { useState } from "react";

const EditDogForm = ({ onSubmit }) => {
  const [dogId, setDogId] = useState(""); // Add Dog ID state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [energyLevel, setEnergyLevel] = useState("");
  const [color, setColor] = useState("");
  const [adoptionDate, setAdoptionDate] = useState("");
  const [isAdopted, setIsAdopted] = useState("");

  const handleEditDogSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    var dogData = {
      name,
      age,
      breed,
      gender,
      size,
      weight,
      energyLevel,
      color,
      adoptionDate,
      isAdopted: Boolean(isAdopted),
    };
    console.log("Data being sent:", dogData); // Add this line to log the data
    onSubmit(dogId, dogData); // Pass dogId separately to the onSubmit function
  };

  return (
    <form onSubmit={handleEditDogSubmit}>
      <div className="form-container">
        <label>
          Dog ID:
          <input
            type="text"
            value={dogId}
            onChange={(e) => setDogId(e.target.value)} // Keep dogId as a string
            placeholder="Enter Dog ID"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter dog's name"
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
            placeholder="Enter dog's Age"
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Enter dog's breed"
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
        <label>
          Weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value, 10))}
            placeholder="Enter dog's weight"
          />
        </label>
        <label>
          EnergyLevel:
          <select
            value={energyLevel}
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
        <label>
          Adoption Date:
          <input
            type="date"
            value={adoptionDate}
            onChange={(e) => setAdoptionDate(e.target.value)}
            placeholder="YYYY-MM-DD" // Placeholder indicating format
          />
        </label>
        <label>
          IsAdopted:
          <select
            value={isAdopted}
            onChange={(e) => setIsAdopted(e.target.value)}
          >
            <option value="">Select IsAdopted</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EditDogForm;
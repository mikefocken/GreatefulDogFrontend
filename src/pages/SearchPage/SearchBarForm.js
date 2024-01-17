import React, { useState } from "react";

const SearchBarForm = ({ onSearch }) => {
  const [selectedCriterion, setSelectedCriterion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const criterionKeyMap = {
    age: "Age",
    breed: "Breed",
    gender: "Gender",
    size: "Size",
    energyLevel: "EnergyLevel",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedCriterion || !searchTerm) {
      alert("Please select a criterion and enter a search term.");
      return;
    }

    const formData = {
      Age: "",
      Breed: "",
      Gender: "",
      Size: "",
      EnergyLevel: "",
    };

    // Use the mapped key to update formData
    const formKey = criterionKeyMap[selectedCriterion];
    formData[formKey] = searchTerm;

    onSearch(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <select
          value={selectedCriterion}
          onChange={(e) => setSelectedCriterion(e.target.value)}
        >
          <option value="">Select Criterion</option>
          <option value="age">Age</option>
          <option value="breed">Breed</option>
          <option value="gender">Gender</option>
          <option value="size">Size</option>
          <option value="energyLevel">Energy Level</option>
          
        </select>
      </div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
      </div>
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBarForm;

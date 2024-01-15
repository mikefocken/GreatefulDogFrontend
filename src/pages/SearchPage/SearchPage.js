import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBarForm from "./SearchBarForm";

const SearchPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  

  const handleFormSubmit = async (formData) => {
    const requestData = {
      Age: "",
      Breed: "",
      Gender: "",
      Size: "",
      EnergyLevel: "",
    };

    // Populate requestData with formData
    for (const key in formData) {
      if (formData[key]) {
        requestData[key] = formData[key];
      }
    }

    try {
      console.log("Sending data to backend:", requestData);
      const response = await axios.post(
        `https://localhost:5001/api/dogs/SearchBar`,
        requestData
      );

      // Fetch images for each dog
      const dogsWithImages = await Promise.all(
        response.data.map(async (dog) => {
          const imageResponse = await axios.get(
            `https://localhost:5001/api/image/ByDog/${dog.id}`
          );
          return { ...dog, images: imageResponse.data };
        })
      );

      setResults(dogsWithImages);
      navigate("/match-page", { state: { matches: dogsWithImages } });
    } catch (error) {
      console.error("Error fetching data", error);
      console.log("Error details:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>SearchPage</h1>
      <SearchBarForm onSearch={handleFormSubmit} />
    </div>
  );
};

export default SearchPage;

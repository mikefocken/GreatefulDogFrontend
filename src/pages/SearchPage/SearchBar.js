import axios from "axios";
import { useState } from "react";

const SearchBar = ({ setResults }) => {
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");

  const fetchDogs = async (params) => {
    try {
      const response = await axios.get(`https://localhost:5001/api/dogs`, {
        params,
      });
      const dogs = response.data.items.map((item) => ({
        id: item.id,
        name: item.name,
      }));
      setResults(dogs);
    } catch (error) {
      console.error("Error fetching data from DB", error);
    }
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchQuery}`);
    fetchDogs({ query: searchQuery.trim() });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchDogs({ breed, size });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
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
            Size:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Select Size</option>
              <option value="Large">Large</option>
              <option value="Medium">Medium</option>
              <option value="Small">Small</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

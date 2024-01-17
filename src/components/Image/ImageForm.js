import axios from "axios";
import React, { useState } from "react";

export default function ImageForm() {
  // State variables for the form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dogId, setDogId] = useState(""); // Added state for dogId
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append form data to the FormData object
    formData.append("dogid", dogId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageFile", image);

    try {
      console.log("Form Data:", formData); // Log form data before sending
      // Send a POST request with the form data to the server
      const response = await axios.post(
        "https://localhost:5001/api/image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Log the response data
      console.log("Response Data:", response.data);
    } catch (er) {
      // Log any error response data
      console.log("Error Response Data:", er.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Description:</label>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>DogId:</label>
      <input
        value={dogId}
        onChange={(event) => setDogId(event.target.value)} // Set dogId state
      />

      {/* Image file input */}
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Submit Photo!</button>
    </form>
  );
}

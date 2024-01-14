import axios from "axios";
import React, { useState } from "react";

export default function ImageForm({ dogId }) {
  // State variables for the form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append form data to the FormData object
    formData.append("id");
    formData.append("title");
    formData.append("description");
    formData.append("imageFile");
    formData.append("dogId");

    try {
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
      console.log(response.data);
    } catch (er) {
      // Log any error response data
      console.log(er.response.data);
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

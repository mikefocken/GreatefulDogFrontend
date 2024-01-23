import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const GetAdoptionApplicationsPage = () => {
  const [user, token] = useAuth();
  const [adoptionApplications, setAdoptionApplications] = useState([]);
  const [error, setError] = useState(null);

  const fetchAdoptionApplications = async () => {
    console.log("Sending request to fetch adoption applications");
    try {
      let response = await axios.get(
        "https://localhost:5001/api/AdoptionApplication",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Response received:", response.data);
      setAdoptionApplications(response.data);
    } catch (err) {
      console.log("Error occurred:", err.response?.data || err.message);
      setError(err.response?.data || "An error occurred");
    }
  };

  return (
    <div>
      <h3>All Adoption Applications</h3>
      <button onClick={fetchAdoptionApplications}>
        Load Adoption Applications
      </button>
      {error && <p>Error: {error}</p>}
      <ul>
        {adoptionApplications.map((application, index) => (
          <li key={index}>
            <p> ID: {application.id}</p>
            <p>Date: {application.applicationDate}</p>
            <p>Status: {application.status}</p>
            <p>Dog ID: {application.dogId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAdoptionApplicationsPage;

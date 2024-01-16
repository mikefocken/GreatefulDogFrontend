import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth"; // Replace with the correct path

const ApplicationProcess = () => {
  const { user, token } = useAuth();
  const [applicationStatus, setApplicationStatus] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplicationStatus();
  }, [token]);
  
  const fetchApplicationStatus = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/AdoptionApplication/myApplicationStatus",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setApplicationStatus(response.data);
    } catch (error) {
      setError(error.response?.data || "An error occurred");
      console.log(error.response.data);
    }
  };
  
  return (
    <div>
      <h3>Check Your Application Status</h3>
      <button onClick={fetchApplicationStatus}>Check Status</button>
  
      <div>
        <p><strong>Status:</strong> {applicationStatus.status}</p>
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ApplicationProcess;


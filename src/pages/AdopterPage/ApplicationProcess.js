import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AdoptionApplicationForm from "./AdoptionApplicationForm";

const ApplicationProcess = () => {
  const [user, token] = useAuth();
  const [applicationStatus, setApplicationStatus] = useState([]);
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
            Authorization: "Bearer " + token,
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
      <h3> Your Adoption Application Status</h3>
      <div>
        <p>{applicationStatus.status}</p>
      </div>

      {applicationStatus &&
        applicationStatus.map((applicationStatus) => (
          <p key={applicationStatus.id}>{applicationStatus.status}</p>
        ))}

      {error && <p>Error: {error}</p>}
      <div>
        <p>If you have any questions please give us a call.</p>
      </div>
    </div>
  );
};

export default ApplicationProcess;

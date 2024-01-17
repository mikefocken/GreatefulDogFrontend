import React, { useEffect, useState } from "react";
import axios from "axios";
import AdoptionApplicationForm from "./AdoptionApplicationForm";
import useAuth from "../../hooks/useAuth";

const SubmitApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [user, token] = useAuth();

  useEffect(() => {
    handleSubmit();
  }, [token]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      formData.dogId = parseInt(formData.dogId);
      console.log("FormData before sending:", formData);
      const response = await axios.post(
        "https://localhost:5001/api/AdoptionApplication",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("Application was added successfully:", response.data);
      setMessage("Application was added successfully!");
    } catch (error) {
      console.error("Error with submission:", error);
      setMessage("Error with submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Submit Adoption Application</h3>
      <AdoptionApplicationForm onSearch={handleSubmit} />
      {isSubmitting && <p>Submitting...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubmitApplication;

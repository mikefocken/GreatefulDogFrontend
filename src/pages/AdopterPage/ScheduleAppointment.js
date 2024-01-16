import React, { useState } from "react";
import axios from "axios";
import AppointmentForm from "./AppointmentForm";

const ScheduleAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (appointmentData) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://localhost:5001/api/Schedules",
        appointmentData
      );
      console.log("Appointment scheduled successfully:", response.data);
      setMessage("Appointment scheduled successfully!");
    } catch (error) {
      console.error("Error in scheduling appointment:", error);
      setMessage("Error in scheduling appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Schedule Appointment to visit your new best friend</h3>
      <AppointmentForm onSearch={handleSubmit} />
      {isSubmitting && <p>Submitting...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ScheduleAppointment;

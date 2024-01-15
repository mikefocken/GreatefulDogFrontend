import React, { useState } from "react";

const AppointmentForm = ({ onSearch }) => {
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: appointmentDate,
      // Include dogId and userId here later
    };

    onSearch(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Schedule Date:
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </label>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;

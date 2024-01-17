import React, { useState } from "react";

const AppointmentForm = ({ onSearch }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [dogId, setDogId] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: appointmentDate,
      dogId: dogId,
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
      <label>
        Dog ID:
        <input
          type="number" // Use type "number" for an integer input
          value={dogId}
          onChange={(e) => setDogId(parseInt(e.target.value, 10))}
        />
      </label>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;

import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AdopterPage = () => {
  return (
    <div>
      <h3>Adopter Page</h3>
      <Link to="/ApplicationProcess">
        <button>Adoption Status</button>
      </Link>
      <Link to="/ScheduleAppointment">
        <button>ScheduleAppointment</button>
      </Link>
      <Link to="/SubmitApplication">
        <button>SubmitApplication</button>
      </Link>
      <Link to="/EmailRescuePage">
        <button>Email Us</button>
      </Link>
    </div>
  );
};

export default AdopterPage;

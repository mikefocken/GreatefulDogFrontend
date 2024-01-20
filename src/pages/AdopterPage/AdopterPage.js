import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AdopterPage = () => {
  return (
    <div>
      <h3>Adopter Page</h3>
      
      <li>
        <a href="ScheduleAppointment">Schedule a meet and greet with a dog</a>
      </li>
      <li>
        <a href="EmailRescuePage">Emails us with any questions</a>
      </li>

      
      <li>
        <a href="SubmitApplication ">Fill out and Application</a>
      </li>

      
      <li>
        <a href="ApplicationProcess">Adoption Status</a>
      </li>
    </div>
  );
};

export default AdopterPage;

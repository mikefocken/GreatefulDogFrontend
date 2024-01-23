import React from "react";
import { Link } from "react-router-dom";
import WeeklyDogPhotoForm from "./WeeklyDogPhotoForm";

const AdminPage = () => {
  return (
    <div>
      <h2>Administrative Page</h2>
      <Link to="/AddDog">
        <button>Add Dog</button>
      </Link>
      <h2>Change Dog of the Week Photo</h2>
      <WeeklyDogPhotoForm />
      
      <h2>Edit Dog Page</h2>
      <Link to="/EditDogPage">
        <button>Edit Dog</button>
      </Link>
      
      <Link to="/EditAdoptionsPage">
        <button>Edit Adoption Status</button>
      </Link>
      <Link to="/GetAdoptionApplicationsPage ">
        <button>Get All Adoption Apps</button>
      </Link>

      
      
    </div>
  );
};

export default AdminPage;


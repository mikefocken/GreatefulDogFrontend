import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <h2>AdministrativePage</h2>
        <Link to="/AddDog">
          <button>AddDog</button>
        </Link>
      
    </div>
  );
};

export default AdminPage;

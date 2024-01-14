// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MatchMakerPage from "./pages/MatchMakerPage/MatchMakerPage";
import SearchPage from "./pages/SearchPage/SearchPage.js";
import AddDogPage from "./pages/AddDogPage/AddDogPage";
import DogDetailsPage from "./pages/DogDetailsPage/DogDetailsPage.js";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Image from "./components/Image/Image";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/MatchMaker" element={<MatchMakerPage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/Image" element={<Image />} />
        <Route path="/AddDog" element={<AddDogPage />} />
        <Route path="/dog/:dogId" element={<DogDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

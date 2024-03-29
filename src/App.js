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
import AdopterPage from "./pages/AdopterPage/AdopterPage.js";
import AdminPage from "./pages/AdminPage/AdminPage.js";
import GetAdoptionApplicationsPage from "./pages/AdoptionApplicationsPage/GetAdoptionApplicationsPage.js"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Image from "./components/Image/Image";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import MatchPage from "./pages/MatchMakerPage/MatchPage";
import ResultsList from "./pages/SearchPage/ResultsList.js";
import ScheduleAppointment from "./pages/AdopterPage/ScheduleAppointment.js";
import ApplicationProcess from "./pages/AdopterPage/ApplicationProcess.js";
import SubmitApplication from "./pages/AdopterPage/SubmitApplication.js";
import EditDogPage from "./pages/AdminPage/EditDogPage.js";
import EditAdoptionsPage from "./pages/AdoptionApplicationsPage/EditAdoptionsPage.js";


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
        <Route path="/matchmaker" element={<MatchMakerPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/adddog" element={<AddDogPage />} />
        <Route path="/dog/:dogId" element={<DogDetailsPage />} />
        <Route path="/match-page" element={<MatchPage />} />
        <Route path="/searchmatch-page" element={<ResultsList />} />
        <Route path="/AdopterPage" element={<AdopterPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/ApplicationProcess" element={<ApplicationProcess />} />
        <Route path="/SubmitApplication" element={<SubmitApplication />} />
        <Route path="/ScheduleAppointment" element={<SubmitApplication />} />
        <Route path="/EditDogPage" element={<EditDogPage />} />
        <Route path="/EditAdoptionsPage" element={<EditAdoptionsPage />} />
        <Route path="/GetAdoptionApplicationsPage" element={<GetAdoptionApplicationsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

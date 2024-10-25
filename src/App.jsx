import { useEffect, useState } from "react";
import Context from "./ContextCrm/ContextCrm";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import Pipeline from "./Pages/Pipeline";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeadsDetails from "./Pages/LeadsDetails";
import ComplatePopaps from "./Components/ComplatePopaps";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Register from "./Pages/Register";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const noNavbarRoutes = ["/", "/Login", "/Register", "/Forget-Password", "/Change-Password"]
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Context>
        {hideNavbar ? null : < ToastContainer />}
        {hideNavbar ? null : <ComplatePopaps />}
        {hideNavbar ? null : <Navbar />}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={< Register />} />
          <Route path="/Forget-Password" element={<ForgetPassword />} />
          <Route path="/Change-Password" element={<ChangePassword />} />

          <Route path="/Pipeline" element={<Pipeline />} />
          <Route path="/Leads/:id" element={<LeadsDetails />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;

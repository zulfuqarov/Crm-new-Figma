import { useState } from "react";
import Context from "./ContextCrm/ContextCrm";
import { Route, Routes } from "react-router-dom";
import Pipeline from "./Pages/Pipeline";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeadsDetails from "./Pages/LeadsDetails";
import ComplatePopaps from "./Components/ComplatePopaps";

function App() {
  return (
    <>
      <Context>
        <ToastContainer />
        <ComplatePopaps />
        <Navbar />
        <Routes>
          <Route path="/Pipeline" element={<Pipeline />} />
          <Route path="/Leads/:id" element={<LeadsDetails />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;

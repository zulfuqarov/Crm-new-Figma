import { useState } from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Pipeline from "./Pages/Pipeline";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeadsDetails from "./Components/LeadsDetails";
import List from "./Components/List";

function App() {
  return (
    <>
      <Context>
        <ToastContainer />
        <Navbar />
        <List />
        <Routes>
          <Route path="/Pipeline" element={<Pipeline />} />
          <Route path="/Leads/:id" element={<LeadsDetails />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;

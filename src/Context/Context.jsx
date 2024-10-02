import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const ContextCrm = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

const Context = ({ children }) => {
  // const stage = ["New", "Qualified", "Proposition", "Won"];
  // const leads = [
  //   {
  //     stage: "New",
  //     name: "John Doe",
  //   },
  //   {
  //     stage: "New",
  //     name: "Nebi Zul",
  //   },
  //   {
  //     stage: "Qualified",
  //     name: "Zul Nebi",
  //   },
  //   {
  //     stage: "Proposition",
  //     name: "Adiran Jon",
  //   },
  //   {
  //     stage: "Proposition",
  //     name: "Mohammed Ali",
  //   },
  //   {
  //     stage: "Proposition",
  //     name: "Mahmoud Zaki",
  //   },
  //   {
  //     stage: "Won",
  //     name: "Abdelrahman El-Zahra",
  //   },
  //   {
  //     stage: "Won",
  //     name: "Mohammed Abdul-Aziz",
  //   },
  // ];

  // Stage start
  const [stage, setstage] = useState([]);
  const getStage = async () => {
    try {
      const response = await axios(`${apiUrl}/api/Stages`);
      setstage(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [addStage, setaddStage] = useState();
  const handleAddStage = async (stage) => {
    try {
      const response = await axios.post(`${apiUrl}/api/Stages`, stage);
      setaddStage(response.data);
      toast.success("Stage added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add stage!");
    }
  };
  const [editStage, seteditStage] = useState();
  const handleEditStage = async (stage) => {
    try {
      const response = await axios.put(`${apiUrl}/api/Stages/${stage.id}`, {
        name: stage.name,
        user: stage.user,
      });
      seteditStage(stage);
      toast.success("Stage updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update stage!");
    }
  };
  const [deleteStage, setdeleteStage] = useState();
  const handleDeleteStage = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/Stages/${id}`);
      setdeleteStage(response.data);
      toast.success("Stage deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete stage!");
    }
  };

  // Leads start
  const [leads, setleads] = useState([]);
  const getLeads = async () => {
    try {
      const response = await axios(`${apiUrl}/api/Leads`);
      setleads(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [newLeads, setnewLeads] = useState();
  const handleAddLeads = async (lead, stageId, userId) => {
    try {
      const response = await axios.post(`${apiUrl}/api/Leads`, {
        ...lead,
        stageId: stageId,
        userId: userId,
      });
      setnewLeads(response.data);
      toast.success("Lead added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStage();
  }, [addStage, editStage, deleteStage]);

  useEffect(() => {
    getLeads();
  }, [newLeads]);

  return (
    <ContextCrm.Provider
      value={{
        stage,
        setstage,
        handleAddStage,
        handleEditStage,
        handleDeleteStage,
        leads,
        handleAddLeads
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;

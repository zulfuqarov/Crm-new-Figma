import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const ContextCrm = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

const Context = ({ children }) => {
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
        userId: stage.userId,
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
      setdeleteStage(id);
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
  const [idLeads, setidLeads] = useState();
  const handleGetIdLeads = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/api/Leads/${id}`);
      setidLeads(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [changeLeadsStage, setchangeLeadsStage] = useState();
  const handleChangeLeadsStage = async (leadId, newStageId) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/Leads/${leadId}?stageId=${newStageId}`
      );
      setchangeLeadsStage(response);
      toast.success("Lead status updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update lead status!");
    }
  };
  const [searchLeadsContact, setsearchLeadsContact] = useState([]);
  const handleSearchLeadsContact = async (contact) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/Leads/SearchCustomers/${contact}`
      );
      setsearchLeadsContact(response.data);
    } catch (error) {
      console.log(error);
      setsearchLeadsContact([]);
    }
  };
  const [searchLeadsProduct, setsearchLeadsProduct] = useState([]);
  const handleSearchLeadsProduct = async (Product) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/Leads/SearchProducts/${Product}`
      );
      setsearchLeadsProduct(response.data);
    } catch (error) {
      console.log(error);
      setsearchLeadsProduct([]);
    }
  };
  const [swapStage, setswapStage] = useState()
  const handleswapStage = async (draggedStageId, targetStageId) => {
    try {
      const response = await axios.post(`${apiUrl}/api/Stages/swap-stages/`, {
        draggedStageId: draggedStageId,
        targetStageId: targetStageId
      });
      setswapStage(targetStageId)
      console.log(response.data)
      toast.success("Stage swapped successfully!")
    } catch (error) {
      console.log(error)
      toast.error("Failed to swap stage!")
    }
  }
  const [nameFilter, setnameFilter] = useState([])
  const handleFilterName = (e) => {
    const nameFilteringLeads = leads.filter((oneFilter) => {
      const fullName = `${oneFilter.customer.name} ${oneFilter.customer.surname}`;
      return fullName.toLowerCase().trim().includes(e.target.value.toLowerCase().trim());
    });
    setnameFilter(nameFilteringLeads)
  }


  useEffect(() => {
    getStage();
  }, [addStage, editStage, deleteStage, changeLeadsStage, newLeads]);

  useEffect(() => {
    getLeads();
  }, [newLeads, changeLeadsStage]);

  return (
    <ContextCrm.Provider
      value={{
        stage,
        setstage,
        handleAddStage,
        handleEditStage,
        handleDeleteStage,
        leads,
        setleads,
        handleAddLeads,
        handleChangeLeadsStage,
        searchLeadsContact,
        handleSearchLeadsContact,
        searchLeadsProduct,
        handleSearchLeadsProduct,
        idLeads,
        handleGetIdLeads,
        handleswapStage,
        handleFilterName,
        nameFilter
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;

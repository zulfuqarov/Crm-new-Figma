import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const ContextCrm = createContext();

const apiUrl = import.meta.env.VITE_API_URL;

const Context = ({ children }) => {

  const [succesPopaps, setsuccesPopaps] = useState(false)

  // Stage start
  const [stage, setstage] = useState([]);
  const getStage = async () => {
    try {
      const response = await axios(`${apiUrl}/api/Stages`);
      setstage(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [addStage, setaddStage] = useState();
  const handleAddStage = async (stage) => {
    try {
      const response = await axios.post(`${apiUrl}/api/Stages`, stage);
      setaddStage(response.data);
      setsuccesPopaps(true)
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
      setsuccesPopaps(true)
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
      setsuccesPopaps(true)
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
      setsuccesPopaps(true)
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
      setsuccesPopaps(true)
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
      setsuccesPopaps(true)
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
  }, [addStage, editStage, deleteStage, changeLeadsStage, newLeads, swapStage]);

  useEffect(() => {
    getLeads();
  }, [newLeads, changeLeadsStage, swapStage]);





  const [leadColor, setLeadColor] = useState({});
  const buttonColors = [
    "bg-[#FFA61A]",
    "bg-[#AF59F7]",
    "bg-[#F76A8B]",
    "bg-[#2B8547]",
    "bg-[#6A8BF7]",
    "bg-[#FF5733]",
    "bg-[#33C3FF]",
  ];

  useEffect(() => {
    const savedLeadColors = localStorage.getItem("leadColors");

    if (savedLeadColors) {
      setLeadColor(JSON.parse(savedLeadColors));
    } else if (leads.length > 0) {
      const leadsProductNameColor = {};

      leads.forEach((lead) => {
        const productName = lead.product.name;

        if (!leadsProductNameColor[productName]) {
          const usedColors = Object.values(leadsProductNameColor);
          const availableColors = buttonColors.filter(
            (color) => !usedColors.includes(color)
          );

          if (availableColors.length > 0) {
            leadsProductNameColor[productName] = availableColors[
              Math.floor(Math.random() * availableColors.length)
            ];
          }
        }
      });

      setLeadColor(leadsProductNameColor);

      localStorage.setItem("leadColors", JSON.stringify(leadsProductNameColor));
    }
  }, []);

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
        nameFilter,
        setnameFilter,
        succesPopaps,
        setsuccesPopaps,
        leadColor
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;

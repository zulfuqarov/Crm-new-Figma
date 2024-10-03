import React, { useContext, useState } from "react";
import { ContextCrm } from "../context/Context";
import { toast } from "react-toastify";

const AddLeads = ({ StageId }) => {
  const { handleAddLeads } = useContext(ContextCrm);
  const [newLeads, setnewLeads] = useState({});

  const onChangeNewLeads = (e) => {
    setnewLeads({ ...newLeads, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full   items-start gap-8 p-6 bg-white rounded border border-gray-300 shadow-sm top-[99px] right-0 absolute">
      <div className="flex flex-col w-full items-start gap-6">
        <div className="flex flex-col w-[100%] items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Contact
          </p>
          <input
            className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
            type="text"
            placeholder="Enter contact"
            name="fullName"
            onChange={onChangeNewLeads}
            value={newLeads.fullName || ""}
          />
        </div>
        <div className="flex flex-col w-[100%] items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Product
          </p>
          <input
            className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
            type="text"
            placeholder="e.g. Product"
            name="product"
            onChange={onChangeNewLeads}
            value={newLeads.product || ""}
          />
        </div>
        <div className="flex flex-col w-[100%] items-start gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Expected Revenue
          </p>
          <div className="flex items-center w-full">
            <input
              className="w-full h-[36px] border-none rounded p-2 text-sm focus:outline-none focus:ring-0 transition"
              type="number"
              placeholder="$0.00"
              name="expectedRevenue"
              onChange={onChangeNewLeads}
              value={newLeads.expectedRevenue || ""}
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%] items-start justify-center gap-3">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Probability
          </p>
          <div className="flex w-full justify-center items-center">
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer accent-blue-500"
              name="probability"
              onChange={onChangeNewLeads}
              value={newLeads.probability || ""}
            />
            <div className=" w-[52px] h-[25px] flex justify-center items-center rounded-[4px] border-[1px] border-blue-500">
              <span className="">
                {newLeads.probability ? newLeads.probability : "0%"}
              </span>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <p className="w-full text-[16px]  font-medium text-main-text-color">
            Expected Closing Date
          </p>
          <input
            className="w-full h-[36px] border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            type="date" // Tarih seçici
            placeholder="e.g. (mm/dd/yyyy)"
            name="expectedClosingDate"
            onChange={onChangeNewLeads}
            value={newLeads.expectedClosingDate || ""}
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="flex h-[44px] items-center justify-center gap-3 px-3 bg-gray-200 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition">
          <p className="font-normal text-main-text-color text-sm">Discard</p>
        </button>
        <button
          onClick={() => {
            if (
              newLeads.fullName.trim() &&
              newLeads.product.trim() &&
              newLeads.expectedClosingDate.trim() &&
              newLeads.probability.trim() &&
              newLeads.expectedRevenue.trim()
            ) {
              handleAddLeads(newLeads, StageId, 1);
              setnewLeads({});
            } else {
              toast.error("Please fill all the fields!");
              return;
            }
          }}
          className="flex h-[44px] items-center justify-center gap-3 px-3 bg-blue-500 border border-blue-500 rounded cursor-pointer hover:bg-blue-600 transition"
        >
          <p className="font-normal text-white text-sm">Add</p>
        </button>
      </div>
    </div>
  );
};

export default AddLeads;

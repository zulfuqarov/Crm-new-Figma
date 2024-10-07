import React, { useState, useEffect } from "react";

const LeadsCard = ({ Leads }) => {
  const [leadColor, setLeadColor] = useState("");

  const buttonColors = [
    "bg-[#FFA61A]",
    "bg-[#AF59F7]",
    "bg-[#F76A8B]",
    "bg-[#2B8547]",
    "bg-[#6A8BF7]",
  ];

  const getRandomColor = () => {
    return buttonColors[Math.floor(Math.random() * buttonColors.length)];
  };

  useEffect(() => {
    if (!leadColor) {
      const newColor = getRandomColor();
      setLeadColor(newColor);
    }
  }, [leadColor]);

  return (
    <div className="flex flex-col gap-3 p-4 bg-white border border-gray-300 rounded-md">
      <div className="flex w-86 gap-20">
        <div className="flex flex-col gap-2 w-48">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-main-text-color text-base">
              {Leads.customer.name} {Leads.customer.surname}
            </div>
            <div className="font-normal text-blue-700 text-base">
              Green Vision Studios
            </div>
          </div>
          <div className="font-normal text-gray-500 text-base">
            $ {Leads.lead.expectedRevenue}
          </div>
          <button
            className={`flex items-center justify-center gap-2 ${leadColor} rounded-full py-0.5 px-2 w-[150px]`}
          >
            <p className="text-white text-sm">{Leads.product.name}</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-86 items-end">
        <div className="flex gap-2">
          <div className="text-gray-500 text-base">Closing date:</div>
          <div className="text-gray-500 text-base">
            {Leads.lead_Stag_History.expectedClosingDate.split("T")[0]}
          </div>
        </div>
        <div className="w-7 h-7 flex justify-center items-center bg-[#77919D] rounded-md overflow-hidden">
          <div className=" top-1 left-2 font-medium text-white text-base">
            {Leads.user.name[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsCard;

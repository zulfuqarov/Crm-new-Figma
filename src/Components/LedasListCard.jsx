import React, { useState, useEffect } from "react";
import NoteLogo from "../Assets/Img/NoteLogo.svg";
import { Link } from "react-router-dom";

const LedasListCard = ({ index, OneMap }) => {
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
    <div
      key={index}
      className="flex items-center relative  border border-gray-300  "
    >
      <div className="flex w-[307px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <Link
          to={`/Leads/${OneMap.id}`}
          className="flex items-center gap-2 relative flex-shrink-0"
        >
          <img className="relative w-6 h-6" src={NoteLogo} />
        </Link>
        <div className="flex items-center gap-4 relative flex-shrink-0">
          <p className="relative w-fit mt-[-1px] font-normal text-gray-900 text-sm">
            {OneMap.product}
          </p>
        </div>
      </div>

      <div className="flex w-[307px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <div className="flex items-center gap-4 relative flex-shrink-0">
          <p className="relative w-fit mt-[-1px] font-normal text-gray-900 text-sm">
            Ocean Blue Designs
          </p>
        </div>
      </div>

      <div className="flex w-[307px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <div className="flex items-center">
          <button
            className={`flex items-center justify-center gap-2 ${leadColor} rounded-full py-0.5 px-2 w-[150px]`}
          >
            <p className="text-white text-sm">Product 12</p>
          </button>
        </div>
      </div>

      <div className="flex w-[307px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <div className="flex items-center gap-4 relative flex-shrink-0">
          <p className="relative w-fit mt-[-1px] font-normal text-gray-900 text-sm">
            $ {OneMap.expectedRevenue}
          </p>
        </div>
      </div>

      <div className="flex w-[306px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <div className="flex items-center gap-4 relative flex-shrink-0">
          <p className="relative w-fit mt-[-1px] font-normal text-gray-900 text-sm">
            10/02/2024
          </p>
        </div>
      </div>

      <div className="flex w-[307px] h-[52px] items-center gap-3 p-2 pl-5 ">
        <div className="relative w-[28px] h-[28px] bg-[#77919d] rounded-full flex items-center justify-center">
          <p className="relative w-fit text-white text-sm">J</p>
        </div>
        <div className="flex items-center gap-4 relative flex-shrink-0">
          <p className="relative w-fit mt-[-1px] font-normal text-gray-900 text-sm">
            {OneMap.customerId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LedasListCard;

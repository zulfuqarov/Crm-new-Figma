import React from "react";
import LeftLogo from "../Assets/Img/LeftLogo.svg";
import PersonLogo from "../Assets/Img/PersonLogo.svg";
import { Link } from "react-router-dom";
const LeadsDetailsNav = () => {
  return (
    <div className="flex items-center justify-between relative ">
      <div className="flex items-center gap-1">
        <div className="flex items-center border-r border-gray-800 pr-3">
          <Link to="/Pipeline" className="flex items-center gap-2">
            <img className="w-6 h-6" src={LeftLogo} alt="arrow-left" />
            <p className="text-gray-500 text-xl font-medium">Pipeline</p>
          </Link>
        </div>
        <div className="flex items-center gap-2 px-2">
          <p className="text-main-text-color text-xl font-medium">
            Lead Card Details
          </p>
        </div>
      </div>
      <button className="flex items-center gap-3">
        <div className="flex items-center h-11 bg-blue-600 rounded px-3">
          <img className="w-6 h-6" src={PersonLogo} alt="user-add" />
          <p className="text-white text-base font-normal whitespace-nowrap pl-[10px]">
            New Lead
          </p>
        </div>
      </button>
    </div>
  );
};

export default LeadsDetailsNav;

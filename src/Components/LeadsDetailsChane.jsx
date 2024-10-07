import React from "react";

const LeadsDetailsChane = () => {

  

  return (
    <div className="flex items-center justify-between relative py-[20px]">
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center h-11 bg-blue-600 rounded px-3">
          <p className="text-white text-base font-normal whitespace-nowrap">
            New
          </p>
        </button>
        <button className="flex items-center justify-center h-11 bg-[#F3F4F6] border border-gray-300 rounded px-3">
          <p className="text-main-text-color text-base font-normal whitespace-nowrap">
            Qualified
          </p>
        </button>
        <button className="flex items-center justify-center h-11 bg-[#F3F4F6] border border-gray-300 rounded px-3">
          <p className="text-main-text-color text-base font-normal whitespace-nowrap">
            Proposition
          </p>
        </button>
        <button className="flex items-center justify-center h-11 bg-[#F3F4F6] border border-gray-300 rounded px-3">
          <p className="text-main-text-color text-base font-normal whitespace-nowrap">
            Won
          </p>
        </button>
        <button className="flex items-center justify-center h-11 bg-[#F3F4F6]  border border-gray-300 rounded px-3">
          <p className="text-main-text-color text-base font-normal whitespace-nowrap">
            Lost
          </p>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-gray-600 text-lg font-normal whitespace-nowrap">
          1 / 12
        </p>
        <div className="flex items-center gap-2">
          <button className="flex justify-center items-center w-11 h-11 bg-[#F3F4F6] border border-gray-300 rounded p-2">
            <i className="fa-solid fa-arrow-left-long text-[#7C838B]"></i>
          </button>
          <button className="flex justify-center items-center w-11 h-11 bg-[#F3F4F6] border border-gray-300 rounded p-2">
            <i className="fa-solid fa-arrow-right-long text-[#7C838B]"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadsDetailsChane;

import React from "react";

const LeadsCard = ({ Leads }) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white border border-gray-300 rounded-md">
      <div className="flex w-86 gap-20">
        <div className="flex flex-col gap-2 w-48">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-main-text-color text-base">
              {Leads.product}
            </div>
            <div className="font-normal text-blue-700 text-base">
              Green Vision Studios
            </div>
          </div>
          <div className="font-normal text-gray-500 text-base">$ {Leads.expectedRevenue}</div>
          <button className="flex items-center justify-center gap-2 bg-yellow-500 rounded-full py-0.5 px-2 w-[150px]">
            <p className="text-white text-sm">Product</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-86 items-end">
        <div className="flex gap-2">
          <div className="text-gray-500 text-base">Closing date:</div>
          <div className="text-gray-500 text-base">12/11/2024</div>
        </div>
        <div className="w-7 h-7 bg-[#77919D] rounded-md overflow-hidden">
          <div className="absolute top-1 left-2 font-medium text-white text-base">
            J
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsCard;

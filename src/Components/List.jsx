import React from "react";

const List = () => {
  return (
    <div className="frame flex w-[100%] items-center justify-between px-10 py-10 bg-white">
      <div className="div-wrapper flex w-[168px] gap-2 items-center relative">
        <div className="text-wrapper relative w-fit -mt-1 font-medium text-[32px] text-main-text-color leading-normal">
          Pipeline
        </div>
      </div>
      <div className="div inline-flex gap-3 flex-none items-center relative">
        <div className="flex justify-center items-center relative">
          <input
            className="flex w-[413px] h-[44px] pl-[40px] pr-[16px] py-[10px] bg-white border border-gray-300 rounded-[4px] focus:outline-none focus:border-blue-500"
            placeholder="Search contacts"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[50%] left-3 transform -translate-y-1/2 text-gray-500"></i>
        </div>
        <div className="div-2 inline-flex gap-2 flex-none items-center relative">
          <button className="div-3 inline-flex h-[44px] justify-center gap-2 px-[12px] flex-none bg-gray-200 border border-gray-300 rounded-[4px] items-center relative">
            <i className="fa-solid fa-bars-staggered" />
            <p className="text-wrapper-3 relative w-fit font-normal text-main-text-color text-[16px] leading-normal whitespace-nowrap">
              List
            </p>
          </button>
          <button className="div-4 inline-flex h-[44px] justify-center gap-2 px-[12px] flex-none bg-gray-200 border border-blue-600 rounded-[4px] items-center relative">
            <i className="fa-solid fa-grip"></i>
            <p className="list relative w-fit font-normal text-blue-600 text-[16px] leading-normal whitespace-nowrap">
              Grid
            </p>
          </button>
        </div>
        <button className="div-5 inline-flex h-[44px] justify-center gap-3 px-[12px] flex-none bg-blue-600 rounded-[4px] items-center relative">
          <i className="fa-solid fa-user text-white"></i>
          <p className="new-contact relative w-fit font-normal text-white text-[16px] leading-normal whitespace-nowrap">
            New Lead
          </p>
        </button>
      </div>
    </div>
  );
};

export default List;

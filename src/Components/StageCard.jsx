import { useContext, useState, useEffect } from "react";
import React from "react";
import { ContextCrm } from "../ContextCrm/ContextCrm";
import AddLeads from "./AddLeads";
import { toast } from "react-toastify";

const StageCard = ({ Stage }) => {
  const { handleEditStage, handleDeleteStage } = useContext(ContextCrm);

  const [ShowChangeCategroy, setShowChangeCategroy] = useState(false);
  const toggleChangeCategroy = () => {
    setShowChangeCategroy(!ShowChangeCategroy);
  };

  const [categoryInputChange, setcategoryInputChange] = useState({
    id: Stage.id,
    name: Stage.name,
    userId: Stage.userId,
  });

  const handleCategoryChange = (e) => {
    setcategoryInputChange({
      id: Stage.id,
      name: e.target.value.trim(),
      userId: Stage.userId,
    });
  };

  const [showAddLeads, setshowAddLeads] = useState(false);
  const toggleAddLeads = () => {
    setshowAddLeads(!showAddLeads);
  };

  const [revenue, setRevenue] = useState(Stage.total_Revenue);
  const [colorClass, setColorClass] = useState("bg-blue-500");
  const [blueWidth, setBlueWidth] = useState(0);

  useEffect(() => {
    const newRevenue = Stage.total_Revenue;
    setRevenue(newRevenue);

    const newWidth = Math.min(Math.max((newRevenue / 100) * 100, 0), 100);
    setBlueWidth(newWidth);

    if (newWidth > 70) {
      setColorClass("bg-green-500");
    } else if (newWidth < 40) {
      setColorClass("bg-red-500");
    } else {
      setColorClass("bg-blue-500");
    }
  }, [Stage.total_Revenue]);

  return (
    <div className="flex flex-col w-[376px] items-start gap-4 py-4 relative group">
      <div className="flex items-center justify-between w-full relative ">
        {ShowChangeCategroy ? (
          <input
            value={categoryInputChange.name}
            onChange={handleCategoryChange}
            type="text"
            className="border-1 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-base"
            placeholder="Type here..."
          />
        ) : (
          <div className="font-medium text-main-text-color text-xl whitespace-nowrap">
            {Stage.name}
          </div>
        )}
        <div className="inline-flex items-center justify-center gap-2 relative">
          {ShowChangeCategroy ? (
            <div>
              {/* Check button */}
              <button
                onClick={() => {
                  if (Stage.name !== categoryInputChange.name) {
                    handleEditStage(categoryInputChange);
                    toggleChangeCategroy();
                  } else {
                    toast.error("No changes made");
                  }
                }}
                className="btn px-2 o-dropdown dropdown-toggle dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-check text-green-400"></i>
              </button>
              {/* Cancel button */}
              <button
                onClick={() => {
                  toggleChangeCategroy();
                  setcategoryInputChange({
                    id: Stage.id,
                    name: Stage.name,
                    userId: Stage.userId,
                  });
                }}
                className="btn px-2 o-dropdown dropdown-toggle dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-xmark text-red-400"></i>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={toggleChangeCategroy}
                className="btn px-2 o-dropdown dropdown-toggle text-slate-400  dropdown opacity-0 group-hover:opacity-100 transition-all hover:text-black"
                aria-expanded="false"
              >
                <i
                  className="fa fa-gear "
                  role="img"
                  aria-label="Settings"
                  title="Settings"
                />
              </button>
              <button
                onClick={() => handleDeleteStage(Stage.id)}
                className="btn px-2 o-dropdown dropdown-toggle dropdown text-red-300 opacity-0 group-hover:opacity-100 transition-all hover:text-red-600"
                aria-expanded="false"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          )}
          <button
            onClick={toggleAddLeads}
            className="inline-flex items-center gap-2.5 relative"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full relative">
        <div className="w-40 h-3 bg-red-500 rounded-sm flex overflow-hidden transition-all">
          <div
            className={`${colorClass} h-full transition-all`}
            style={{ width: `${blueWidth}%` }}
          />
          <div
            className="bg-stone-200 h-full transition-all"
            style={{ width: `${100 - blueWidth}%` }}
          />
        </div>
        <div
          className={`text-base font-normal mt-[-1px] whitespace-nowrap text-transition`}
        >
          {`$${revenue}`}
        </div>
      </div>
      {showAddLeads && <AddLeads StageId={Stage.id} />}
    </div>
  );
};

export default StageCard;

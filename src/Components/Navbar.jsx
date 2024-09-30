import React, { useState } from "react";
import Logo from "../Assets/Img/Logo.svg";
import UserLogo from "../Assets/Img/UserImg.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between px-5 md:px-10 py-5 bg-white border-b border-[#f2f2f2]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img className="h-10" alt="Logo" src={Logo} />
          {/* Menu Links */}
          <div className={`hidden md:flex items-center gap-2`}>
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                  isActive ? "bg-[#ddeaff]" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/Pipeline"
              className={({ isActive }) =>
                `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                  isActive ? "bg-[#ddeaff]" : ""
                }`
              }
            >
              Sales pipeline
            </NavLink>
            <NavLink
              to="/Contacts"
              className={({ isActive }) =>
                `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                  isActive ? "bg-[#ddeaff]" : ""
                }`
              }
            >
              Contacts
            </NavLink>
            <NavLink
              to="/Admin-Panel"
              className={({ isActive }) =>
                `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                  isActive ? "bg-[#ddeaff]" : ""
                }`
              }
            >
              Admin panel
            </NavLink>
          </div>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Links for Mobile */}
      <div className={`flex-col md:hidden ${isMenuOpen ? "flex" : "hidden"}`}>
        <div className="flex flex-col items-start gap-2 mt-4">
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                isActive ? "bg-[#ddeaff]" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/Pipeline"
            className={({ isActive }) =>
              `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                isActive ? "bg-[#ddeaff]" : ""
              }`
            }
          >
            Sales pipeline
          </NavLink>
          <NavLink
            to="/Contacts"
            className={({ isActive }) =>
              `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                isActive ? "bg-[#ddeaff]" : ""
              }`
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/Admin-Panel"
            className={({ isActive }) =>
              `relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-main-text-color text-base whitespace-nowrap px-4 py-2.5 rounded ${
                isActive ? "bg-[#ddeaff]" : ""
              }`
            }
          >
            Admin panel
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="flex items-center gap-3">
          <Link className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#222222] text-base whitespace-nowrap">
            Sophia Peterson
          </Link>
          <img className="h-10" src={UserLogo} alt="UserLogo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

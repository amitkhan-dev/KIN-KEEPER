import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router';

const Navbar = () => {
  const links= (
    <>
    {/* Home Link */}
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        isActive ? 
      "bg-[#234e3f] text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all font-medium hover:bg-[#1a3a2f]" :
      "text-[#4b5563] hover:text-[#234e3f] flex items-center gap-2 px-4 py-2 font-medium"
      }>
      <HiOutlineHome size={20}/>Home</NavLink> 
  </li>

  {/* Timeline Link */}
  <li>
    <NavLink 
      to="/timeline" 
      className={({ isActive }) => 
        isActive 
          ? "bg-[#234e3f] text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all font-medium hover:bg-[#1a3a2f]" 
          : "text-[#4b5563] hover:text-[#234e3f] flex items-center gap-2 px-4 py-2 font-medium"
      }>
      <MdOutlineAccessTime size={20} />Timeline</NavLink> 
  </li>

  {/* Stats Link */}
  <li>
    <NavLink 
      to="/analysis" 
      className={({ isActive }) => 
        isActive 
          ? "bg-[#234e3f] text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all font-medium hover:bg-[#1a3a2f]" 
          : "text-[#4b5563] hover:text-[#234e3f] flex items-center gap-2 px-4 py-2 font-medium"
      }>
      <IoStatsChartOutline size={20} />Stats</NavLink> 
  </li>
    
    </>
  )
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Left Side: Logo/Brand */}
        <div className="flex-1">
          <img src={Logo} alt="Brand logo" />
        </div>

        {/* Right Side: Navigation Links */}
        <div className="hidden md:block">
          <ul className="menu menu-horizontal p-0 gap-2 items-center">
            {links}
            </ul>
        </div>

        {/* Mobile  Responsive */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  gap-2 shadow bg-base-100 rounded-box w-52 border border-gray-100">
              {links}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
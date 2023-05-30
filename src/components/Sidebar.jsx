import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { MdOutlinePedalBike } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrBike } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#0c03b8] text-white w-2/12  h-screen">
      <div className="p-4 mt-2 flex space-x-4">
        <div>
          <MdDashboard className="text-4xl" color="white" />
        </div>
        <a href="/" className="text-xl font-semibold mt-1">
          DashBoard
        </a>
      </div>
      <nav className=" mt-16 ">
        <ul className="space-y-6">
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiTruck className="text-4xl" color="white" />
            </div>
            <a href="/order" className="text-2xl">
              Order
            </a>
          </li>
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <MdOutlinePedalBike className="text-4xl" color="white" />
            </div>
            <a href="Rider" className="text-2xl">
              Rider
            </a>
          </li>
          <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiSettings className="text-4xl" color="white" />
            </div>
            <a href="/settings" className=" text-2xl">
              Settings
            </a>
          </li>
          {/* <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiSettings className="text-4xl" color="white" />
            </div>
            <a href="/orderprocessing" className=" text-2xl">
              OrderProcessing
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;

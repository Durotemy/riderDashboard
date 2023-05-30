import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { GrBike } from "react-icons/gr";

export const Dashboard = () => {
  return (
    <main className="text-black w-full">
      <div className="w-full">
        <p className="ml-2 ">DashBoard</p>
        <div className="flex  justify-between  w-full mx-auto mt-4">
          <div>
            <h1 className="ml-2 text-2xl font-bold">Hello Admin</h1>
          </div>
        </div>
        <div className="flex justify-around w-9/12 mx-auto mt-4">
          <div className="h-[150px] w-[200px] rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-blue-600 bg-transparent text-black shadow-lg">
            <IoPaperPlaneOutline className="text-4xl" color="black" />
            <p className="text-2xl">10</p>
            <p className="text-2xl">Ongoing orders</p>
          </div>
          <div className="h-[150px] w-[200px] rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-red-600 bg-transparent text-black shadow-lg">
            <HiOutlineSpeakerphone className="text-4xl" color="black" />
            <p className="text-2xl">20</p>
            <p className="text-2xl">pending orders</p>
          </div>
          <div className="h-[150px] w-[200px] rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-green-600 bg-transparent text-black shadow-lg">
            <GrBike className="text-4xl" color="white" />
            <p className="text-2xl">40</p>
            <p className="text-2xl">Riders</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-12">
        <p className="font-bold">Pending</p>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-[blue] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border">
                Pick up
              </th>
              <th className="px-6 py-3 bg-[blue] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border">
                Drop off
              </th>
              <th className="px-6 py-3 bg-[blue] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border">
                Due date
              </th>
              <th className="px-6 py-3 bg-[blue] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border">
                Type
              </th>
              <th className="px-6 py-3 bg-[blue] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border">
                <button className="bg-[white] text-black py-4 px-6 border rounded">
                  Process
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border">Lagos</td>
              <td className="px-6 py-4 whitespace-no-wrap border">Ibadan</td>
              <td className="px-6 py-4 whitespace-no-wrap border">
                january 2021
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border">Urgent</td>
              <td className="px-6 py-4 whitespace-no-wrap border">Pending</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border">Kenya</td>
              <td className="px-6 py-4 whitespace-no-wrap border">Nigeria</td>
              <td className="px-6 py-4 whitespace-no-wrap border">
                March 2021
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border">Urgent</td>
              <td className="px-6 py-4 whitespace-no-wrap border">Pending</td>
            </tr>

            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

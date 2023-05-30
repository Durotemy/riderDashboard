import React from "react";

const Order = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between mt-8">
        <p className="text-2xl">Order</p>
        <p className="mt-8 border p-2">
          <select>
            <option>Ongoing Orders</option>
            <option>Unpending Orders</option>
          </select>
        </p>
      </div>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="">
          <tr className="">
            <th className="px-6 py-6 bg-[blue] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Pick up Address
            </th>
            <th className="px-6 py-6 bg-[blue] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Delivery Address
            </th>
            <th className="px-6 py-6 bg-[blue] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Type
            </th>
            <th className="px-6 py-6 bg-[blue] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Due Date
            </th>
            <th className="px-6 py-6 bg-[blue] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              <p>State</p>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">Lagos</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Ibadan</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Urgent</td>
            <td className="px-6 py-4 whitespace-no-wrap border">
              Febuary 2022
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">Pending</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">Kenya</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Nigeria</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Emergency</td>
            <td className="px-6 py-4 whitespace-no-wrap border">March 2021</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Pending</td>
          </tr>

          {/* I can add more table rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

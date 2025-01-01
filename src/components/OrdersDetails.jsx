"use client";

import { useState } from "react";
import {
  Calendar,
  Bell,
  MessageCircle,
  ExternalLink,
  Box,
} from "react-feather";
import { Link } from "react-router-dom";

export default function OrdersDetails() {
  const [orders] = useState([
    {
      id: "23635232634",
      customerName: "bommibricks",
      date: "28 November 2024",
      priority: "High priority",
      weight: "2.2 Oz",
      lots: "3/4 lots",
      items: "9/13 items",
      orderNumber: 1,
    },
    {
      id: "23635232634",
      customerName: "bommibricks",
      date: "28 November 2024",
      priority: "Medium",
      weight: "2.2 Oz",
      lots: "3/4 lots",
      items: "9/13 items",
      orderNumber: 2,
    },
  ]);

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Orders</h1>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Calendar className="w-6 h-6 text-[#6366F1]" />
            </button>
            <button className="relative">
              <Bell className="w-6 h-6 text-[#6366F1]" />
            </button>
            <button className="relative">
              <MessageCircle className="w-6 h-6 text-[#6366F1]" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm relative"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-black text-white px-3 py-1 rounded-md text-sm">
                      O no.#{order.id}
                    </div>
                    <Link to={`/order/${order.id}`}>
                      <ExternalLink size={14} className="text-gray-500" />
                    </Link>
                  </div>
                  <h2 className="text-xl font-medium">{order.customerName}</h2>
                  <p className="text-gray-500">{order.date}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
                      High priority
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                      Medium
                    </span>
                    <span className="ml-auto text-sm text-gray-600">
                      {order.weight}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-[#F9F9F9] rounded-lg p-4 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Box className="text-black" size={20} />
                  <span className="text-black">{order.lots}</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border-2 border-black checked:bg-black rounded:md checked:text-white checked:before:content-['✓'] checked:before:flex checked:before:justify-center checked:before:items-center focus:outline-none"
                    defaultChecked
                  />
                  <span className="text-black">{order.items}</span>
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <span className="text-2xl font-medium text-gray-400">
                  {order.orderNumber}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Continue Later
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Calendar, Bell, Clock } from "react-feather";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
    },
    {
      id: "23635232634",
      customerName: "bommibricks",
      date: "28 November 2024",
      priority: "Medium",
      weight: "2.2 Oz",
      lots: "3/4 lots",
      items: "9/13 items",
    },
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Orders</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Calendar className="w-6 h-6 text-blue-600" />
            </button>
            <button className="relative">
              <Bell className="w-6 h-6 text-blue-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative">
              <Clock className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">O no.{order.id}</h3>
                    {/* Use Link instead of ExternalLink */}
                    <Link to={`/order/${order.id}`}>
                      <Calendar size={16} className="text-blue-600" />
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600">{order.customerName}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.priority === "High priority"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {order.priority}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <span className="font-semibold">{order.weight}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">
                      <Calendar size={16} />
                    </span>
                    <span>{order.lots}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">
                      <Bell size={16} />
                    </span>
                    <span>{order.items}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">
                  Continue Later
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

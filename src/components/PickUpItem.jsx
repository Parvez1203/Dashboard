"use client";

import { useState } from "react";
import { Calendar } from "react-feather";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function PickUpItems() {
  const [items] = useState([
    {
      id: "23635232634",
      image: "/placeholder.svg?height=80&width=80",
      name: "Watch, Round 1 x 1",
      sku: "475734",
      flatSlot: "#13429856890",
      quantity: {
        picked: 2,
        total: 2,
      },
    },
    {
      id: "23635232635",
      image: "/placeholder.svg?height=80&width=80",
      name: "Watch, Round 1 x 1",
      sku: "475734",
      flatSlot: "#13429856890",
      quantity: {
        picked: 2,
        total: 2,
      },
    },
    {
      id: "23635232636",
      image: "/placeholder.svg?height=80&width=80",
      name: "Watch, Round 1 x 1",
      sku: "475734",
      flatSlot: "#13429856890",
      quantity: {
        picked: 4,
        total: 2,
      },
    },
    {
      id: "23635232637",
      image: "/placeholder.svg?height=80&width=80",
      name: "Watch, Round 1 x 1",
      sku: "475734",
      flatSlot: "#13429856890",
      quantity: {
        picked: 2,
        total: 2,
      },
    },
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-6">Pick Up Items</h1>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="bg-[#E8FFE8] rounded-lg p-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover bg-white p-2"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded">
                      Part
                    </span>
                    <span className="text-xs text-gray-600">
                      Flat Slot# {item.flatSlot}
                    </span>
                  </div>
                  <h3 className="font-medium mt-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.sku}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-semibold">
                    {item.quantity.picked}
                  </div>
                  <div className="text-gray-400 text-lg font-semibold">
                    {item.quantity.total}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="/pickup-complete">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Finish Pick Up <Calendar size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

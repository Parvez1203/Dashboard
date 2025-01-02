import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Grid,
  List,
} from "react-feather";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Order view component
function OrderPageContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  function StartPickUpButton() {
    return (
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          onClick={() => navigate("/pickupitems")}
        >
          Start Pick Up
          <ArrowRight size={18} />
        </button>
      </div>
    );
  }

  const orders = [
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },
    {
      id: "174.10",
      product: "Dollar watch",
      buyer: "bommibricks",
      date: "20/12/2024",
      location: "Warehouse 1",
      lots: "2/7",
      total: "$123",
      status: "Packed",
    },

    // Add more orders as needed
  ];

  const tasks = [
    { id: 1, title: "Schedule post Dusk&Dawn", completed: true },
    { id: 2, title: "Design post for Holi", completed: true },
    { id: 3, title: "Brainstorming new project", completed: false },
    { id: 4, title: "Re-Branding Discussion", completed: false },
  ];

  return (
    <div className="py-6 pt-0">
      <div className="bg-white rounded-xl p-6 card-shadow mb-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold">Stores</span>
          </div>

          {/* Store checkboxes */}
          <div className="flex gap-4">
            <span className="flex items-center gap-2 font-medium text-sm">
              <input type="checkbox" className="rounded" />
              BrickOwl
            </span>
            <label className="flex items-center gap-2 font-medium text-sm">
              <input type="checkbox" className="rounded" checked />
              BrickLink
            </label>
          </div>

          {/* Order status */}
          <div className="space-y-2">
            <span className="text-md font-semibold">Status</span>
            <div className="flex flex-wrap gap-4 font-medium text-sm">
              {["READYL(BL)", "PACKED(BL)", "SHIPPED(BL)"].map((status) => (
                <span key={status} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" checked />
                  {status}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Order list */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-md font-semibold mb-4">
                In Progress Orders
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded ${
                    viewMode === "table" ? "bg-gray-100" : ""
                  }`}
                >
                  <List size={20} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid" ? "bg-gray-100" : ""
                  }`}
                >
                  <Grid size={20} />
                </button>
              </div>
            </div>

            {viewMode === "table" ? (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-400">
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Order#
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Product
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Buyer
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Location
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Lots/Items
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Total
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={order.id}
                        className={`border-b border-gray-400 ${
                          index % 2 !== 0 ? "bg-[#F9F9F9]" : ""
                        }`}
                      >
                        <td className="py-3 px-4 text-sm font-medium">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.id}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.product}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.buyer}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.date}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.location}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.lots}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          {order.total}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.status === "Packed"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">{order.product}</h3>
                        <p className="text-sm text-gray-500">{order.buyer}</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>Order#: {order.id}</p>
                      <p>Date: {order.date}</p>
                      <p>Location: {order.location}</p>
                      <p>Lots/Items: {order.lots}</p>
                      <p>Total: {order.total}</p>
                    </div>
                    <div className="mt-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Packed"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <StartPickUpButton />
          </div>
        </div>

        {/* Calendar and Task sections */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 card-shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <button className="text-purple-600 border-b-2 border-purple-600 pb-1">
                  Monthly
                </button>
                <button className="text-gray-500 pb-1">Daily</button>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full border-none"
            />
          </div>

          <div className="bg-white rounded-xl p-4 card-shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Task</h2>
              <button className="p-1 rounded hover:bg-gray-100">
                <Settings size={16} />
              </button>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <label key={task.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="mt-1 rounded"
                    onChange={() => {}}
                  />
                  <span
                    className={
                      task.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {task.title}
                  </span>
                </label>
              ))}
            </div>
            <button className="w-full mt-4 bg-black text-white rounded-lg py-2">
              Schedule Task
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default OrderPageContent;

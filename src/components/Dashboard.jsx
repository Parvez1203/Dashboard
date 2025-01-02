import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StatsCard from "./StatsCard";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import { ByBuyers } from "./ByBuyers";
import { Search, ChevronDown, User, Settings, LogOut } from "react-feather";

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <header className="dashboard-header rounded-xl card-shadow">
        <div className="relative">
          <input type="text" placeholder="Search..." className="search-input" />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="account-dropdown">
          <div
            className="flex items-center gap-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src="https://c8.alamy.com/comp/2RFFRCC/photo-of-impressed-nice-cheerful-person-raise-arms-open-mouth-cant-believe-wear-lime-cropped-top-isolated-on-violet-color-background-2RFFRCC.jpg"
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">John Doe</span>
            <ChevronDown size={16} />
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="account-dropdown-content"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    <User size={16} />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    <Settings size={16} />
                    Settings
                  </a>
                  <hr className="my-1" />
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    <LogOut size={16} />
                    Logout
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="py-6 pt-0">
        <StatsCard />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="font-medium mb-4">Sales in last 6 Months</h2>
              <LineChart />
            </div>
          </div>

          <div className="lg:row-span-2">
            <div className="space-y-6 h-full">
              <ByBuyers />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 card-shadow lg:col-span-2">
            <h2 className="font-medium mb-1">P&L</h2>
            <p className="text-sm text-gray-500 mb-4">
              Total profit growth of 25%
            </p>
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

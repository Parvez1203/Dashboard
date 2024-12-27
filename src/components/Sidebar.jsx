import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Archive,
  ShoppingCart,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
} from 'react-feather';

function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { icon: Monitor, label: 'Dashboard', active: true },
    { icon: Archive, label: 'Inventory' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
    { icon: LogOut, label: 'Log out' },
  ];

  return (
    <>
      <motion.div
        className="sidebar"
        animate={{ width: isOpen ? 240 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="logo">
          {/* <img src="/nucleus-logo.svg" alt="Nucleus" /> */}
          <span className="text-[20px] font-extrabold">BrickOsys</span>
        </div>

        <nav className="nav-menu">
          {menuItems.map((item, index) => (
            <>
              {item.label === 'Log out' && <hr />}
              <motion.a
                key={item.label}
                href="#"
                className={`nav-item ${item.active ? 'active' : ''}`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </motion.a>
            </>
          ))}
        </nav>
      </motion.div>

      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>
    </>
  );
}

export default Sidebar;

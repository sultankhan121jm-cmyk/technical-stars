import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const linkClass = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors min-h-[44px] flex items-center ${isActive ? "text-[#F5A623]" : "text-white hover:text-white/90"}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center min-h-[44px] px-4 text-[16px] font-semibold rounded-lg transition-colors ${isActive ? "text-[#F5A623] bg-white/10" : "text-white hover:text-white/90"}`;

  const serviceSlugs = [
    { slug: "ac-repair", label: "AC Repair" },
    { slug: "ac-installation", label: "AC Installation" },
    { slug: "maintenance", label: "Preventive Maintenance" },
    { slug: "vent-cleaning", label: "Duct & Vent Cleaning" },
    { slug: "dismantlement", label: "AC Dismantlement" },
    { slug: "electricity", label: "Electrical Work" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20" style={{ backgroundColor: "#0F2F8A" }}>
      {/* UPPER LINE */}
      <div className="h-[2px]" style={{ backgroundColor: "#F5A623" }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center min-h-[44px]">
          <img src={logo} alt="BM Cooling Centre" width="40" height="40" className="h-9 md:h-10 w-auto object-contain" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>

          <div ref={dropdownRef} className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button className={`${linkClass({ isActive: false })} cursor-pointer`}>
              <span className="flex items-center gap-1">
                Services
                <FaChevronDown className={`text-[9px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-white rounded-xl shadow-2xl shadow-black/20 py-1.5 min-w-[240px] border border-gray-200">
                  {serviceSlugs.map(({ slug, label }) => (
                    <NavLink key={slug} to={`/services/${slug}`} onClick={() => setIsServicesOpen(false)} className="block px-5 py-2.5 text-[14px] font-medium text-gray-800 hover:text-[#1B4FD8] hover:bg-gray-100 transition-colors">
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+923214875662" className="text-[14px] font-semibold px-6 py-2.5 rounded-lg min-h-[44px] flex items-center justify-center text-white whitespace-nowrap transition-all hover:shadow-lg" style={{ backgroundColor: "#F5A623" }}>
            <FaPhone className="mr-1.5 text-[12px]" /> Call Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button className="text-white text-xl min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10" style={{ backgroundColor: "#0F2F8A" }}>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <nav className="flex flex-col px-5 py-4 pb-8 gap-0.5">
                <NavLink to="/" className={mobileLinkClass} onClick={() => setMobileOpen(false)} end>Home</NavLink>
                <NavLink to="/about" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>About</NavLink>
                <NavLink to="/services" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>Services</NavLink>
                {serviceSlugs.map(({ slug, label }) => (
                  <NavLink key={slug} to={`/services/${slug}`} className="flex items-center min-h-[44px] pl-10 pr-4 text-[15px] text-white hover:text-white/90 transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                    {label}
                  </NavLink>
                ))}
                <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
                <a href="tel:+923214875662" className="mt-4 w-full text-[14px] font-semibold text-center px-5 py-3 rounded-lg min-h-[48px] flex items-center justify-center text-white transition-all" style={{ backgroundColor: "#F5A623" }}>
                  <FaPhone className="mr-1.5" /> Call Now
                </a>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header >
  );
};

export default Navbar;
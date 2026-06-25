import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useLang } from "../contexts/LanguageContext";
import LangToggle from "./LangToggle";

const Navbar = () => {
  const { t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ... existing useEffect code ...

  const linkClass = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors min-h-[44px] flex items-center ${isActive ? "text-[#EF9F27]" : "text-white hover:text-white/90"}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center min-h-[44px] px-4 text-[16px] font-semibold rounded-lg transition-colors ${isActive ? "text-[#EF9F27] bg-white/10" : "text-white hover:text-white/90"}`;

  const serviceSlugs = ["ac-repair", "ac-installation", "ac-cleaning", "washing-machine", "plumbing", "electricity"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20" style={{ backgroundColor: "#0A1F3C" }}>
      {/* UPPER LINE */}
      <div className="h-[2px]" style={{ backgroundColor: "#EF9F27" }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center min-h-[44px]">
          <img src={logo} alt="Technical Stars" width="40" height="40" className="h-9 md:h-10 w-auto object-contain" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>{t("nav.home")}</NavLink>
          <NavLink to="/about" className={linkClass}>{t("nav.about")}</NavLink>

          <div ref={dropdownRef} className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button className={`${linkClass({ isActive: false })} cursor-pointer`}>
              <span className="flex items-center gap-1">
                {t("nav.services")}
                <FaChevronDown className={`text-[9px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-white rounded-xl shadow-2xl shadow-black/20 py-1.5 min-w-[240px] border border-gray-200">
                  {serviceSlugs.map((slug) => (
                    <NavLink key={slug} to={`/services/${slug}`} onClick={() => setIsServicesOpen(false)} className="block px-5 py-2.5 text-[14px] font-medium text-gray-800 hover:text-[#378ADD] hover:bg-gray-100 transition-colors">
                      {t(`services.${slug}`)}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={linkClass}>{t("nav.contact")}</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LangToggle />
          <a href="tel:+966556380709" className="text-[14px] font-semibold px-6 py-2.5 rounded-lg min-h-[44px] flex items-center justify-center text-white whitespace-nowrap transition-all hover:shadow-lg" style={{ backgroundColor: "#EF9F27" }}>
            <FaPhone className="mr-1.5 text-[12px]" /> {t("nav.callNow")}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button className="text-white text-xl min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10" style={{ backgroundColor: "#0A1F3C" }}>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <nav className="flex flex-col px-5 py-4 pb-8 gap-0.5">
                <NavLink to="/" className={mobileLinkClass} onClick={() => setMobileOpen(false)} end>{t("nav.home")}</NavLink>
                <NavLink to="/about" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>{t("nav.about")}</NavLink>
                <NavLink to="/services" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>{t("nav.services")}</NavLink>
                {serviceSlugs.map((slug) => (
                  <NavLink key={slug} to={`/services/${slug}`} className="flex items-center min-h-[44px] pl-10 pr-4 text-[15px] text-white hover:text-white/90 transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                    {t(`services.${slug}`)}
                  </NavLink>
                ))}
                <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>{t("nav.contact")}</NavLink>
                <a href="tel:+966556380709" className="mt-4 w-full text-[14px] font-semibold text-center px-5 py-3 rounded-lg min-h-[48px] flex items-center justify-center text-white transition-all" style={{ backgroundColor: "#EF9F27" }}>
                  <FaPhone className="mr-1.5" /> {t("nav.callNow")}
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
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaBars, FaTimes, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useLang } from "../contexts/LanguageContext";
import LangToggle from "./LangToggle";

const Navbar = () => {
  const { t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsServicesOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = ({ isActive }) =>
    `text-[14px] font-medium transition-colors min-h-[44px] flex items-center ${isActive ? "text-brand-blue" : "text-gray-600 hover:text-brand-blue"}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center min-h-[44px] px-4 text-[15px] font-medium rounded-lg transition-colors ${isActive ? "text-brand-blue bg-brand-blue/5" : "text-gray-600 hover:text-brand-blue"}`;

  const serviceSlugs = ["ac-repair", "ac-installation", "ac-cleaning", "washing-machine", "plumbing", "electricity"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/[0.04]" : "bg-white"}`}>
      {/* Top accent line */}
      <div className="h-[2px] bg-brand-blue" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center min-h-[44px]">
          <img src={logo} alt="Technical Stars" className="h-9 md:h-10 w-auto object-contain" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>{t("nav.home")}</NavLink>
          <NavLink to="/about" className={linkClass}>{t("nav.about")}</NavLink>

          <div ref={dropdownRef} className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button className={linkClass({ isActive: false })}>
              <span className="flex items-center gap-1">
                {t("nav.services")}
                <FaChevronDown className={`text-[9px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-white rounded-xl shadow-lg shadow-black/8 py-1.5 min-w-[240px] border border-gray-100">
                  {serviceSlugs.map((slug) => (
                    <NavLink key={slug} to={`/services/${slug}`} onClick={() => setIsServicesOpen(false)} className="block px-5 py-2.5 text-[14px] text-gray-600 hover:text-brand-blue hover:bg-brand-blue/[0.04] transition-colors">
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
          <a href="tel:+966551895625" className="btn-primary text-[13px] px-5 py-2.5 rounded-lg min-h-[40px] flex items-center justify-center">
            <FaPhone className="mr-1.5 text-[11px]" /> {t("nav.callNow")}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button className="text-gray-600 text-xl min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col px-5 py-4 gap-0.5">
              <NavLink to="/" className={mobileLinkClass} onClick={closeMobile} end>{t("nav.home")}</NavLink>
              <NavLink to="/about" className={mobileLinkClass} onClick={closeMobile}>{t("nav.about")}</NavLink>
              <NavLink to="/services" className={mobileLinkClass} onClick={closeMobile}>{t("nav.services")}</NavLink>
              {serviceSlugs.map((slug) => (
                <NavLink key={slug} to={`/services/${slug}`} className="flex items-center min-h-[44px] pl-10 pr-4 text-sm text-gray-500 hover:text-brand-blue transition-colors" onClick={closeMobile}>
                  {t(`services.${slug}`)}
                </NavLink>
              ))}
              <NavLink to="/contact" className={mobileLinkClass} onClick={closeMobile}>{t("nav.contact")}</NavLink>
              <a href="tel:+966551895625" className="mt-3 w-full btn-primary text-sm text-center px-5 py-3 rounded-lg min-h-[48px] flex items-center justify-center">
                <FaPhone className="mr-1.5" /> {t("nav.callNow")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPhone,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const desktopLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
      isActive ? "text-brand-accent" : "text-white hover:text-brand-accent"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center min-h-[44px] px-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive ? "text-brand-accent bg-white/5" : "text-white hover:text-brand-accent hover:bg-white/5"
    }`;

  const mobileSubLinkClass = ({ isActive }) =>
    `flex items-center min-h-[44px] pl-8 pr-3 text-sm transition-colors duration-200 ${
      isActive ? "text-brand-accent" : "text-white/70 hover:text-brand-accent"
    }`;

  const serviceSlugs = ["ac-repair", "ac-installation", "ac-cleaning", "washing-machine", "plumbing", "electricity"];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
      {/* Top bar */}
      <div className="bg-brand-accent hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between py-2">
          <span className="text-white text-sm flex items-center gap-2 min-h-[44px]">
            <FaMapMarkerAlt className="text-xs" /> {t("nav.topbarLocation")}
          </span>
          <div className="flex items-center gap-4">
            <LangToggle />
            <a href="tel:+966551895625" className="text-white text-sm flex items-center gap-2 hover:opacity-90 transition-opacity min-h-[44px]">
              <FaPhone className="text-xs" /> +966 55 189 5625
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center min-h-[44px]">
            <img src={logo} alt="Technical Stars Logo" className="h-10 md:h-12 w-auto object-contain bg-transparent p-0.5" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/" className={desktopLinkClass} end>{t("nav.home")}</NavLink>
            <NavLink to="/about" className={desktopLinkClass}>{t("nav.about")}</NavLink>

            <div ref={dropdownRef} className="relative inline-block" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={desktopLinkClass({ isActive: false })}>
                <span className="flex items-center gap-1.5">
                  {t("nav.services")}
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 z-50">
                  <div className="bg-white rounded-lg shadow-xl py-2 min-w-[260px] border border-gray-100">
                    {serviceSlugs.map((slug) => (
                      <NavLink key={slug} to={`/services/${slug}`} onClick={() => setIsServicesOpen(false)} className="block px-5 py-2.5 text-sm text-brand-primary hover:bg-brand-light hover:text-brand-accent transition-colors">
                        {t(`services.${slug}`)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={desktopLinkClass}>{t("nav.contact")}</NavLink>
            <a href="tel:+966551895625" className="bg-brand-cta text-brand-primary font-semibold text-sm px-6 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200 min-h-[44px] flex items-center justify-center">
              {t("nav.callNow")}
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button className="text-white text-2xl focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden md:hidden bg-brand-primary border-t border-white/10">
              <nav className="flex flex-col px-4 py-4 gap-1">
                <NavLink to="/" className={mobileLinkClass} onClick={closeMobile} end>{t("nav.home")}</NavLink>
                <NavLink to="/about" className={mobileLinkClass} onClick={closeMobile}>{t("nav.about")}</NavLink>
                <NavLink to="/services" className={mobileLinkClass} onClick={closeMobile}>{t("nav.services")}</NavLink>
                {serviceSlugs.map((slug) => (
                  <NavLink key={slug} to={`/services/${slug}`} className={mobileSubLinkClass} onClick={closeMobile}>
                    {t(`services.${slug}`)}
                  </NavLink>
                ))}
                <NavLink to="/contact" className={mobileLinkClass} onClick={closeMobile}>{t("nav.contact")}</NavLink>
                <a href="tel:+966551895625" className="mt-3 w-full bg-brand-cta text-brand-primary font-semibold text-sm text-center px-5 py-3 rounded-lg hover:brightness-110 transition-all duration-200 min-h-[44px] flex items-center justify-center">{t("nav.callNow")}</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

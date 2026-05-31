import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 — Brand Logo Info */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Technical Stars Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Your trusted partner for AC, appliance, plumbing, and electrical
            services in Riyadh. Available 24/7.
          </p>
        </div>

        {/* Column 2 — Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FaPhone className="text-brand-accent text-xs min-w-[16px]" />
              <a href="tel:+966500000000" className="hover:text-white transition-colors">+966 50 000 0000</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-brand-accent text-xs min-w-[16px]" />
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-brand-accent text-xs min-w-[16px]" />
              <a href="mailto:info@technicalstars.com" className="hover:text-white transition-colors">info@technicalstars.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-brand-accent text-xs min-w-[16px]" />
              <span>Riyadh, Saudi Arabia</span>
            </li>
          </ul>
        </div>

        {/* Column 3 — Our Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services/ac-repair" className="hover:text-white transition-colors">AC Repair</Link></li>
            <li><Link to="/services/ac-installation" className="hover:text-white transition-colors">AC Installation</Link></li>
            <li><Link to="/services/ac-cleaning" className="hover:text-white transition-colors">AC Cleaning</Link></li>
            <li><Link to="/services/washing-machine" className="hover:text-white transition-colors">Washing Machine Repair</Link></li>
            <li><Link to="/services/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
            <li><Link to="/services/electricity" className="hover:text-white transition-colors">Electricity</Link></li>
          </ul>
        </div>

        {/* Column 4 — Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Technical Stars. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
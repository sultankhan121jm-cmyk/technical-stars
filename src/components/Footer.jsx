import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

// ⚠️ CHANGE THIS to your exact file name! (e.g., "logo.svg" or "bm-cooling.png")
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#060F1D] text-gray-300 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo & About */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="BM Cooling Centre Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Professional AC repair & electrical services in Lahore. Certified technicians, genuine parts, and fast response in Gulshan-e-Ravi and surrounding areas.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/BM-electric-cooling-center-61588342966315/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#F5A623] hover:text-white transition-all duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/923214875662"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+923214875662"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#F5A623] hover:text-white transition-all duration-200"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Top Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">Top Services</h4>
          <ul className="space-y-3">
            {[
              { to: "/services/ac-repair", label: "AC Repair" },
              { to: "/services/ac-installation", label: "AC Installation" },
              { to: "/services/maintenance", label: "Preventive Maintenance" },
              { to: "/services/electricity", label: "Electrical Work" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#F5A623] mt-1 flex-shrink-0" />
              <a
                href="https://maps.google.com/?q=336+Gulshan+Ravi+Block+B+Gulshan-e-Ravi+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors"
              >
                336 Gulshan Ravi, Block B, Gulshan-e-Ravi, Lahore 54000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#F5A623] flex-shrink-0" />
              <a
                href="tel:+923214875662"
                className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors"
                dir="ltr"
              >
                0321 4875662
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-[#F5A623] flex-shrink-0" />
              <a
                href="https://wa.me/923214875662"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#F5A623] transition-colors"
                dir="ltr"
              >
                0321 4875662
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} BM Cooling Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useLang } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1 — Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Technical Stars Logo" className="h-10 md:h-12 w-auto object-contain bg-transparent p-0.5" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Column 2 — Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">{t("footer.contactUs")}</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FaPhone className="text-brand-accent text-xs min-w-[16px]" />
              <a href="tel:+966551895625" className="hover:text-white transition-colors">+966 55 189 5625</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-brand-accent text-xs min-w-[16px]" />
              <a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t("footer.whatsapp")}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-brand-accent text-xs min-w-[16px]" />
              <a href="mailto:info@technicalstars.com" className="hover:text-white transition-colors">info@technicalstars.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-brand-accent text-xs min-w-[16px]" />
              <span>{t("nav.topbarLocation")}</span>
            </li>
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">{t("footer.ourServices")}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services/ac-repair" className="hover:text-white transition-colors">{t("services.ac-repair")}</Link></li>
            <li><Link to="/services/ac-installation" className="hover:text-white transition-colors">{t("services.ac-installation")}</Link></li>
            <li><Link to="/services/ac-cleaning" className="hover:text-white transition-colors">{t("services.ac-cleaning")}</Link></li>
            <li><Link to="/services/washing-machine" className="hover:text-white transition-colors">{t("services.washing-machine")}</Link></li>
            <li><Link to="/services/plumbing" className="hover:text-white transition-colors">{t("services.plumbing")}</Link></li>
            <li><Link to="/services/electricity" className="hover:text-white transition-colors">{t("services.electricity")}</Link></li>
          </ul>
        </div>

        {/* Column 4 — Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">{t("nav.services")}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Technical Stars. {t("footer.allRights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

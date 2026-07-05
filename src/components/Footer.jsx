import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const { t, isAr } = useLang();

  // Updated slug list
  const serviceSlugs = ["ac-repair", "ac-installation", "ac-cleaning", "washing-machine", "freon-charging"];

  return (
    <footer className="bg-[#0A1F3C] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Technical Stars" width="40" height="40" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold text-white">Technical Stars</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              <a href="tel:+966556380709" className="bg-white/5 hover:bg-[#EF9F27] transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white">
                <FaPhone className="text-sm" />
              </a>
              <a href="https://wa.me/966556380709" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#EF9F27] transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white">
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/60 hover:text-[#EF9F27] transition-colors text-sm">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-[#EF9F27] transition-colors text-sm">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-[#EF9F27] transition-colors text-sm">{t("nav.services")}</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-[#EF9F27] transition-colors text-sm">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Services (Updated dynamically) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t("footer.ourServices")}</h3>
            <ul className="space-y-3">
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="text-white/60 hover:text-[#EF9F27] transition-colors text-sm capitalize"
                  >
                    {t(`services.${slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#EF9F27] text-md mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">{t("contact.location")}</span>
              </li>
              <li>
                <a href="tel:+966556380709" className="flex items-start gap-3 group">
                  <FaPhone className="text-[#EF9F27] text-md mt-1 flex-shrink-0" />
                  <span className="text-white/60 group-hover:text-[#EF9F27] transition-colors text-sm">+966 55 638 0709</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@technicalstars.online" className="flex items-start gap-3 group">
                  <FaEnvelope className="text-[#EF9F27] text-md mt-1 flex-shrink-0" />
                  <span className="text-white/60 group-hover:text-[#EF9F27] transition-colors text-sm">info@technicalstars.online</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Technical Stars. {t("footer.allRights")}
          </p>
          <Link to="/privacy-policy" className="text-white/40 hover:text-[#EF9F27] transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
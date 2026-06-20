import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

// ⚠️ CHANGE THIS to your exact file name! (e.g., "logo.svg" or "tech-stars.png")
import logo from "../assets/images/logo.png";

const Footer = () => {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const text = {
    desc: isAr
      ? "خدمات صيانة منزلية احترافية وسريعة في الرياض. فنيون معتمدون لجميع أعمال التكييف والسباكة والكهرباء."
      : "Professional and fast home maintenance services in Riyadh. Certified technicians for all AC, plumbing, and electrical work.",
    quickLinks: isAr ? "روابط سريعة" : "Quick Links",
    home: isAr ? "الرئيسية" : "Home",
    services: isAr ? "خدماتنا" : "Services",
    about: isAr ? "من نحن" : "About Us",
    contact: isAr ? "اتصل بنا" : "Contact Us",
    topServices: isAr ? "أفضل الخدمات" : "Top Services",
    acRepair: isAr ? "إصلاح مكيفات" : "AC Repair",
    acClean: isAr ? "تنظيف مكيفات" : "AC Cleaning",
    plumbing: isAr ? "سباكة" : "Plumbing",
    electric: isAr ? "كهرباء" : "Electricity",
    contactUs: isAr ? "تواصل معنا" : "Contact Us",
    address: isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
    phone: "+966 556380709",
    email: "info@technicalstars.online",
    rights: isAr ? "جميع الحقوق محفوظة" : "All Rights Reserved",
    company: isAr ? "نجوم التقنية" : "Technical Stars",
  };

  return (
    <footer className="w-full bg-[#060F1D] text-gray-300 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo & About */}
        <div>
          <Link to="/" className="inline-block">
            {/* Removed brightness-0 invert so it doesn't break your specific logo file */}
            <img
              src={logo}
              alt="Technical Stars Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {text.desc}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://wa.me/966556380709" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full...">
              <FaWhatsapp />
            </a>
            <a href="tel:+966556380709" className="w-10 h-10 rounded-full...">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">{text.quickLinks}</h4>
          <ul className="space-y-3">
            {[{ to: "/", label: text.home }, { to: "/services", label: text.services }, { to: "/about", label: text.about }, { to: "/contact", label: text.contact }].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-gray-400 hover:text-[#EF9F27] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Top Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">{text.topServices}</h4>
          <ul className="space-y-3">
            {[{ to: "/services/ac-repair", label: text.acRepair }, { to: "/services/ac-cleaning", label: text.acClean }, { to: "/services/plumbing", label: text.plumbing }, { to: "/services/electricity", label: text.electric }].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-gray-400 hover:text-[#EF9F27] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-5">{text.contactUs}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#EF9F27] mt-1 flex-shrink-0" />
              {/* Clickable Google Maps Link for exact coordinates */}
              <a
                href="https://maps.google.com/?q=24.818361,46.656472"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#EF9F27] transition-colors"
              >
                24°49'06.1"N 46°39'23.3"E
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#EF9F27] flex-shrink-0" />
              <a href="tel:+966556380709" className="text-sm text-gray-400 hover:text-[#EF9F27] transition-colors" dir="ltr">+966556380709</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#EF9F27] flex-shrink-0" />
              <a href="mailto:info@technicalstars.online" className="text-sm text-gray-400 hover:text-[#EF9F27] transition-colors">{text.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} {text.company}. {text.rights}.</p>
      </div>
    </footer>
  );
};

export default Footer;   
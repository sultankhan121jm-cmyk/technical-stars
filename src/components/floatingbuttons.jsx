import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const FloatingButtons = () => {
  const { lang } = useLang();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+966551895625"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 md:w-16 md:h-16 min-w-[44px] min-h-[44px] rounded-full bg-[#EF9F27] text-brand-primary text-2xl md:text-3xl hover:brightness-110 transition-all duration-200 shadow-lg flex items-center justify-center"
        aria-label={lang === "ar" ? "اتصل بنا" : "Call us"}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#EF9F27]"
          animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        <FaPhone className="relative z-10" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/966551895625"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="relative w-14 h-14 md:w-16 md:h-16 min-w-[44px] min-h-[44px] rounded-full bg-[#25D366] text-white text-2xl md:text-3xl hover:brightness-110 transition-all duration-200 shadow-lg flex items-center justify-center"
        aria-label={lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <FaWhatsapp className="relative z-10 text-3xl md:text-4xl" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;

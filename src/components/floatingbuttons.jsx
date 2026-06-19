import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const FloatingButtons = () => {
  const { lang } = useLang();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a href="tel:+966551895625" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.08 }}
        className="w-14 h-14 rounded-full bg-white shadow-lg shadow-black/10 border border-gray-200 text-brand-blue text-xl flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label={lang === "ar" ? "اتصل بنا" : "Call us"}>
        <FaPhone />
      </motion.a>
      <motion.a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} whileHover={{ scale: 1.08 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:shadow-xl transition-shadow"
        aria-label="WhatsApp">
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;

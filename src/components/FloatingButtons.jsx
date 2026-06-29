import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";
import { trackEvent } from "../utils/trackEvent";

const FloatingButtons = () => {
  const { lang } = useLang();

  const buttonVariants = {
    hidden: { scale: 0, y: 20, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <motion.a
        https://wa.me/966556380709?text=مرحباً%2C%20وجدتكم%20عبر%20الموقع%20الإلكتروني%20وأحتاج%20إلى%20خدمة%20تكييف
        custom={0}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          trackEvent("call_button_click", {
            event_label: "Floating Call Button",
            page_location: window.location.pathname,
          })
        }
        className="relative w-14 h-14 rounded-full bg-white shadow-lg shadow-black/10 border border-gray-200 text-brand-blue text-xl flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label={lang === "ar" ? "اتصل بنا" : "Call us"}
      >
        <FaPhone />
      </motion.a>

      {/* WhatsApp Button with Pulse Rings */}
      <div className="relative flex items-center justify-center">

        {/* Pulse Ring 1 */}
        <motion.span
          className="absolute w-14 h-14 rounded-full bg-[#25D366] z-0"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Pulse Ring 2 (Delayed) */}
        <motion.span
          className="absolute w-14 h-14 rounded-full bg-[#25D366] z-0"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.6,
          }}
        />

        {/* Actual Button */}
        <motion.a
          https://wa.me/966556380709?text=مرحباً%2C%20وجدتكم%20عبر%20الموقع%20الإلكتروني%20وأحتاج%20إلى%20خدمة%20تكييف
          target="_blank"
          rel="noopener noreferrer"
          custom={1}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            trackEvent("whatsapp_button_click", {
              event_label: "Floating WhatsApp Button",
              page_location: window.location.pathname,
            })
          }
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>
      </div>

    </div>
  );
};

export default FloatingButtons;
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

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

  const whatsappUrl = "https://wa.me/966556380709?text=" + encodeURIComponent(
    lang === "ar"
      ? "مرحباً، وجدتكم عبر الموقع الإلكتروني وأحتاج إلى خدمة تكييف"
      : "Hello, I found you through your website and I need AC service"
  );

  // Direct safe GA4 execution function
  const safeTrack = (eventName, label) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_label: label,
        page_location: window.location.pathname,
      });
    }
  };

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <motion.a
        href="tel:+966556380709"
        custom={0}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => safeTrack("call_button_click", "Floating Call Button")}
        className="relative w-14 h-14 rounded-full bg-white shadow-lg shadow-black/10 border border-gray-200 text-[#0A1F3C] text-xl flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label={lang === "ar" ? "اتصل بنا" : "Call us"}
      >
        <FaPhone />
      </motion.a>

      {/* WhatsApp Button with Pulse Rings */}
      <div className="relative flex items-center justify-center">
        <motion.span
          className="absolute w-14 h-14 rounded-full bg-[#25D366] z-0"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute w-14 h-14 rounded-full bg-[#25D366] z-0"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
        />

        {/* Actual Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          custom={1}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => safeTrack("whatsapp_button_click", "Floating WhatsApp Button")}
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
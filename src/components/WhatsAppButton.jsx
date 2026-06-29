import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      whileHover="showTooltip"
      initial="hideTooltip"
    >
      {/* Pulsing Ring Animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.4],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/966556380709"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 min-w-[44px] min-h-[44px] rounded-full bg-[#25D366] text-white text-3xl md:text-4xl hover:brightness-110 transition-all duration-200 shadow-lg"
      >
        <FaWhatsapp />
      </a>

      {/* Tooltip */}
      <motion.span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-brand-primary text-sm font-medium px-3 py-1.5 rounded-lg shadow-xl pointer-events-none"
        variants={{
          hideTooltip: { opacity: 0, x: 10 },
          showTooltip: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        Chat with us!
      </motion.span>
    </motion.div>
  );
};

export default WhatsAppButton;
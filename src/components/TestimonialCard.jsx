import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TestimonialCard = ({ name, location, review, service, index = 0 }) => {
  const { lang } = useLang();

  const nameStr = typeof name === "object" ? name[lang] : name;
  const locationStr = typeof location === "object" ? location[lang] : location;
  const reviewStr = typeof review === "object" ? review[lang] : review;
  const serviceStr = typeof service === "object" ? service[lang] : service;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#0D2847] border border-[#1A3A5C] rounded-2xl p-6 flex flex-col h-full shadow-lg"
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#EF9F27] text-sm" />
        ))}
      </div>

      {/* Top Row: Verified Badge & Service Badge */}
      <div className="flex items-start justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[#9FE1CB] text-xs font-semibold uppercase tracking-wider">
          <FaCheckCircle className="text-[#9FE1CB] text-sm" />
          Verified
        </span>
        <span className="bg-[#EF9F27] text-[#0A1F3C] text-xs rounded-full px-3 py-1 font-bold whitespace-nowrap">
          {serviceStr}
        </span>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm md:text-base text-[#E8F0FE] leading-relaxed flex-1">
        &ldquo;{reviewStr}&rdquo;
      </p>

      {/* Customer Info */}
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#1A3A5C]">
        <div className="w-11 h-11 min-w-[44px] bg-[#EF9F27] rounded-full flex items-center justify-center text-[#0A1F3C] font-bold text-base">
          {nameStr.charAt(0)}
        </div>
        <div>
          <p className="text-white text-sm font-bold">{nameStr}</p>
          <p className="text-[#9FE1CB] text-xs mt-0.5 font-medium">{locationStr}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
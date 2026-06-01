import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TestimonialCard = ({ name, location, review, service, rating = 5, index = 0 }) => {
  const { lang } = useLang();

  const getName = typeof name === "object" ? name[lang] : name;
  const getLocation = typeof location === "object" ? location[lang] : location;
  const getReview = typeof review === "object" ? review[lang] : review;
  const getService = typeof service === "object" ? service[lang] : service;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex items-center gap-1.5 text-brand-light text-xs">
          <FaCheckCircle className="text-brand-accent text-sm" />
          {lang === "ar" ? "عميل موثق" : "Verified Customer"}
        </span>
        <span className="bg-[#EF9F27]/20 text-brand-cta text-xs rounded-full px-3 py-1 font-medium whitespace-nowrap">
          {getService}
        </span>
      </div>

      <div className="flex items-center gap-1 mt-3">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-brand-cta text-sm" />
        ))}
      </div>

      <p className="mt-3 text-sm md:text-base text-brand-light leading-relaxed italic flex-1">
        &ldquo;{getReview}&rdquo;
      </p>

      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 min-w-[40px] bg-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
          {getName.charAt(0)}
        </div>
        <div>
          <p className="text-white text-sm font-bold">{getName}</p>
          <p className="text-[#9FE1CB] text-xs mt-0.5">{getLocation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

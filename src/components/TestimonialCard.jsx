import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const TestimonialCard = ({ name, location, review, service, rating = 5, index = 0 }) => {
  const { lang } = useLang();
  const getName = typeof name === "object" ? name[lang] : name;
  const getLocation = typeof location === "object" ? location[lang] : location;
  const getReview = typeof review === "object" ? review[lang] : review;
  const getService = typeof service === "object" ? service[lang] : service;

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="card-clean p-7 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-gray-400 text-[12px]"><FaCheckCircle className="text-brand-blue text-[11px]" /> {lang === "ar" ? "عميل موثق" : "Verified"}</span>
        <span className="text-gray-400 text-[12px] bg-gray-50 rounded-full px-3 py-1">{getService}</span>
      </div>
      <div className="flex items-center gap-0.5 mt-3">{[...Array(rating)].map((_, i) => <FaStar key={i} className="text-brand-cta text-[11px]" />)}</div>
      <p className="mt-3 text-[15px] text-gray-600 leading-relaxed italic flex-1">&ldquo;{getReview}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-semibold text-sm">{getName.charAt(0)}</div>
        <div>
          <p className="text-gray-900 text-sm font-medium">{getName}</p>
          <p className="text-gray-400 text-xs">{getLocation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

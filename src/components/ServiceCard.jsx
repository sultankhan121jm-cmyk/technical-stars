import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const iconMap = { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt };

const ServiceCard = ({ iconName, shortDesc, slug, index = 0 }) => {
  const { t, lang } = useLang();
  const Icon = iconMap[iconName] || FaWrench;
  const title = t(`services.${slug}`);
  const desc = typeof shortDesc === "object" ? shortDesc[lang] : shortDesc;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group card-clean p-7 md:p-8 flex flex-col relative overflow-hidden"
    >
      {/* Hover blue glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Animated icon container */}
      <motion.div
        initial={{ rotate: -10 }}
        whileInView={{ rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        className="w-14 h-14 rounded-2xl bg-brand-blue/[0.06] border border-brand-blue/[0.08] flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-400"
      >
        <Icon className="text-brand-blue text-2xl group-hover:text-white transition-colors duration-400" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
        className="mt-5 text-[17px] font-semibold text-gray-900 group-hover:text-brand-blue transition-colors duration-300"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.25 }}
        className="mt-2.5 text-[14px] text-gray-500 leading-relaxed flex-1"
      >
        {desc}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
      >
        <Link
          to={`/services/${slug}`}
          className="mt-5 inline-flex items-center min-h-[44px] text-[14px] font-medium text-brand-blue hover:gap-2.5 transition-all duration-300 gap-1.5"
        >
          {t("serviceCard.learnMore")}
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.div>
  );
};

export default ServiceCard;

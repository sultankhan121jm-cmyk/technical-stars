import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const iconMap = { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt };
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ServiceCard = ({ iconName, slug, index = 0 }) => {
  const { t, isRTL } = useLang();
  const Icon = iconMap[iconName] || FaWrench;
  const localizedTitle = t(`services.${slug}`);
  const localizedDesc = t(`servicesData.${slug}.shortDesc`);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white border border-brand-light rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-xl hover:border-brand-accent transition-all duration-300 flex flex-col"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-light rounded-xl flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
        <Icon className="text-brand-accent text-2xl md:text-3xl group-hover:text-brand-cta transition-colors duration-300" />
      </div>
      <h3 className="mt-4 text-lg md:text-xl font-bold text-brand-primary">{localizedTitle}</h3>
      <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed flex-1">{localizedDesc}</p>
      <Link
        to={`/services/${slug}`}
        className="mt-4 inline-flex items-center min-h-[44px] text-sm font-medium text-brand-accent hover:text-brand-primary transition-colors duration-200"
      >
        {t("serviceCard.learnMore")} <span className={`inline-block ${isRTL ? "mr-1" : "ml-1"} group-hover:translate-x-1 transition-transform duration-200`}>→</span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt, FaArrowRight } from "react-icons/fa";

const iconMap = { FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt };

const ServiceCard = ({ iconName, title, shortDesc, slug, index = 0 }) => {
  const Icon = iconMap[iconName] || FaWrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/services/${slug}`} className="block group h-full">
        <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-7 h-full overflow-hidden border border-[#E2E8F0] transition-all duration-500 ease-out group-hover:border-[#0F2F8A]/20 group-hover:shadow-[0_25px_50px_-12px_rgba(15,47,138,0.15)]">

          {/* Subtle Background Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top Accent Bar */}
          <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-[#0F2F8A] via-[#1B4FD8] to-[#0F2F8A] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />

          {/* Icon Container */}
          <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0F2F8A] to-[#1B4FD8] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:rounded-3xl group-hover:shadow-[0_8px_25px_-5px_rgba(15,47,138,0.35)]">
            <Icon className="text-white text-lg sm:text-xl lg:text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
          </div>

          {/* Content */}
          <div className="relative z-10 mt-4 sm:mt-5 lg:mt-6">
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#0F2F8A] leading-tight">
              {title}
            </h3>
            <p className="mt-2 sm:mt-2.5 lg:mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 transition-colors duration-300 group-hover:text-[#475569]">
              {shortDesc}
            </p>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-4 sm:mt-5 lg:mt-6 flex items-center gap-2.5">
            <span className="text-[#0F2F8A] font-semibold text-xs sm:text-sm transition-colors duration-300 group-hover:text-[#1B4FD8]">
              Learn More
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-[#0F2F8A] group-hover:border-[#0F2F8A] group-hover:translate-x-1.5 group-hover:shadow-md">
              <FaArrowRight className="text-[9px] sm:text-[10px] text-[#64748B] transition-all duration-500 group-hover:text-white group-hover:translate-x-0.5" />
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
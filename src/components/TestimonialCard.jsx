import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaUser } from "react-icons/fa";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TestimonialCard = ({ name, location, review, service, rating, image, index = 0 }) => {
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
          <FaStar key={i} className="text-[#F5A623] text-sm" />
        ))}
      </div>

      {/* Top Row: Verified Badge & Service Badge */}
      <div className="flex items-start justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[#9FE1CB] text-xs font-semibold uppercase tracking-wider">
          <FaCheckCircle className="text-[#9FE1CB] text-sm" />
          Verified
        </span>
        <span className="bg-[#F5A623] text-[#0F2F8A] text-xs rounded-full px-3 py-1 font-bold whitespace-nowrap">
          {service}
        </span>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm md:text-base text-[#E8EFFE] leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Customer Info */}
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#1A3A5C]">
        <div className="w-11 h-11 min-w-[44px] bg-white rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={name}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
              className="w-full h-full"
            />
          ) : null}
          <FaUser
            className="text-gray-400 text-sm"
            style={{ display: image ? "none" : "flex" }}
          />
        </div>
        <div>
          <p className="text-white text-sm font-bold">{name}</p>
          <p className="text-[#9FE1CB] text-xs mt-0.5 font-medium">{location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const CTABanner = () => {
  const tags = ["Transparent Pricing", "Genuine Parts", "Written Guarantee"];

  return (
    <section className="relative bg-[#F5A623] py-16 md:py-20 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0F2F8A]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#0F2F8A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Book Today
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F2F8A] leading-tight">
            Fast AC Repair in Lahore — Call Now!
          </h2>

          <p className="mt-4 text-[#0F2F8A]/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Our certified technicians reach your doorstep in 1-2 hours. Serving Gulshan-e-Ravi and surrounding areas in Lahore.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Call Now Button */}
          <a
            href="tel:+923214875662"
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#0F2F8A] text-white font-bold rounded-xl hover:bg-[#0A2270] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-black/20"
          >
            <FaPhone className="text-sm" />
            <span className="whitespace-nowrap">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923214875662"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-transparent border-2 border-[#0F2F8A] text-[#0F2F8A] font-bold rounded-xl hover:bg-[#0F2F8A] hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <FaWhatsapp className="text-base" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
        </motion.div>

        {/* Bottom Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#0F2F8A]/70 font-semibold"
        >
          {tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {tag}
              {i < tags.length - 1 && <span className="text-white">•</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CTABanner = () => {
  const { t } = useLang();

  return (
    <section className="bg-[#EF9F27] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-[#0A1F3C] bg-white/30 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {t("ctaBanner.badge")}
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1F3C] leading-tight">
              {t("ctaBanner.title")}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#0A1F3C]/80 max-w-lg mx-auto lg:mx-0">
              {t("ctaBanner.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 md:gap-4 justify-center lg:justify-end"
          >
            <a
              href="tel:+966551895625"
              className="min-h-[52px] w-full sm:w-auto flex items-center justify-center px-8 rounded-lg bg-[#0A1F3C] text-white font-bold hover:opacity-90 transition-opacity"
            >
              <FaPhone className="mr-2" />
              {t("ctaBanner.callNow")}
            </a>
            <a
              href="https://wa.me/966551895625"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] w-full sm:w-auto flex items-center justify-center px-8 rounded-lg bg-white text-[#0A1F3C] font-bold hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp className="mr-2 text-[#25D366]" />
              {t("ctaBanner.whatsapp")}
            </a>
          </motion.div>

        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-[#0A1F3C]/70 text-xs md:text-sm">
            {t("ctaBanner.trust")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;

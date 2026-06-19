import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

const CTABanner = () => {
  const { t } = useLang();
  return (
    <section className="bg-brand-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center lg:text-left">
          <span className="inline-block text-brand-cta text-[11px] font-semibold tracking-widest uppercase bg-brand-cta/10 px-3 py-1 rounded-full">
            {t("ctaBanner.badge")}
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{t("ctaBanner.title")}</h2>
          <p className="mt-3 text-sm md:text-base text-white/60 max-w-lg mx-auto lg:mx-0">{t("ctaBanner.subtitle")}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-center lg:justify-end">
          <a href="tel:+966551895625" className="bg-white text-brand-navy font-semibold min-h-[52px] w-full sm:w-auto flex items-center justify-center px-8 rounded-lg text-sm hover:bg-gray-100 transition-colors">
            <FaPhone className="mr-2 text-brand-blue" /> {t("ctaBanner.callNow")}
          </a>
          <a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" className="min-h-[52px] w-full sm:w-auto flex items-center justify-center px-8 rounded-lg text-sm font-semibold border-2 border-white/20 text-white hover:border-white/40 transition-colors">
            <FaWhatsapp className="mr-2 text-[#25D366]" /> {t("ctaBanner.whatsapp")}
          </a>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-16 mt-8 pt-6 border-t border-white/10 text-center">
        <p className="text-white/40 text-[13px]">{t("ctaBanner.trust")}</p>
      </div>
    </section>
  );
};

export default CTABanner;

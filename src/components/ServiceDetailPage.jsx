import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhone, FaWhatsapp, FaCheckCircle, FaClock, FaShieldAlt, FaTools,
  FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt,
} from "react-icons/fa";
import CTABanner from "./CTABanner";
import { useLang } from "../contexts/LanguageContext";
import services from "../data/services";

import acRepairImg from "../assets/images/service-ac-repair.jpg";
import acInstallImg from "../assets/images/service-ac-installation.jpg";
import acCleanImg from "../assets/images/service-ac-cleaning.jpg";
import washingImg from "../assets/images/service-washing-machine.jpg";
import plumbingImg from "../assets/images/service-plumbing.jpg";
import electricityImg from "../assets/images/service-electricity.jpg";

const serviceImages = {
  'ac-repair': acRepairImg,
  'ac-installation': acInstallImg,
  'ac-cleaning': acCleanImg,
  'washing-machine': washingImg,
  'plumbing': plumbingImg,
  'electricity': electricityImg,
};

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

const serviceIconMap = { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt };

const ServiceDetailPage = ({ slug }) => {
  const { t } = useLang();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-bold">
        Service not found for slug: {slug}
      </div>
    );
  }

  const Icon = serviceIconMap[service.iconName] || FaWrench;
  const localizedTitle = t(`services.${slug}`);
  const localizedDesc = t(`servicesData.${slug}.fullDesc`);
  const features = t(`servicesFeatures.${slug}`);

  return (
    <main>
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm">
              <Link to="/" className="hover:underline">{t("nav.home")}</Link>
              <span className="mx-2">&gt;</span>
              <Link to="/services" className="hover:underline">{t("serviceDetail.breadcrumbServices")}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{localizedTitle}</span>
            </nav>
            <Icon className="text-[#EF9F27] text-5xl md:text-6xl mt-4" />
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{localizedTitle}</h1>
            <p className="mt-4 text-sm md:text-base text-brand-light leading-relaxed">{localizedDesc}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="tel:+966551895625" className="min-h-[48px] w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-[#EF9F27] text-brand-primary font-bold rounded-lg hover:brightness-110 transition-all duration-200"><FaPhone className="mr-2" /> {t("serviceDetail.callNow")}</a>
              <a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" className="min-h-[48px] w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#EF9F27] text-[#EF9F27] font-bold rounded-lg hover:bg-[#EF9F27]/10 transition-all duration-200"><FaWhatsapp className="mr-2" /> {t("serviceDetail.whatsappUs")}</a>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.2 }} className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <img src={serviceImages[slug]} alt={`${localizedTitle} service in Riyadh`} loading="lazy" className="w-full rounded-2xl object-cover max-h-[350px] lg:max-h-[450px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" />
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{t("serviceDetail.whatsIncluded")}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t("serviceDetail.includedTitle")}</h2>
            <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
            <div className="mt-8 space-y-1">
              {Array.isArray(features) && features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 py-3 border-b border-brand-light last:border-b-0">
                  <FaCheckCircle className="text-[#EF9F27] text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-brand-primary text-sm md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{t("serviceDetail.brandsWeService")}</span>
            <h2 className="mt-3 text-xl md:text-2xl font-bold text-brand-primary">{t("serviceDetail.compatibleBrands")}</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {service.brands.map((brand, index) => (
                <div key={index} className="bg-white border border-brand-light text-brand-primary text-sm font-medium text-center py-3 px-4 rounded-xl hover:border-brand-accent hover:text-brand-accent transition-colors duration-200 min-h-[44px] flex items-center justify-center">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaClock, title: t("serviceDetail.whyChoose.fastTitle"), desc: t("serviceDetail.whyChoose.fastDesc") },
              { icon: FaShieldAlt, title: t("serviceDetail.whyChoose.warrantyTitle"), desc: t("serviceDetail.whyChoose.warrantyDesc") },
              { icon: FaTools, title: t("serviceDetail.whyChoose.expertTitle"), desc: t("serviceDetail.whyChoose.expertDesc") },
            ].map((reason, index) => (
              <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <reason.icon className="text-[#EF9F27] text-3xl mx-auto" />
                <h3 className="mt-4 text-white text-base md:text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-brand-light text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServiceDetailPage;

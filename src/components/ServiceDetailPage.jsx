import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCheckCircle, FaClock, FaShieldAlt, FaTools, FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt } from "react-icons/fa";
import CTABanner from "./CTABanner";
import { useLang } from "../contexts/LanguageContext";
import services from "../data/services";

import acRepairImg from "../assets/images/service-ac-repair.jpg";
import acInstallImg from "../assets/images/service-ac-installation.jpg";
import acCleanImg from "../assets/images/service-ac-cleaning.jpg";
import washingImg from "../assets/images/service-washing-machine.jpg";
import plumbingImg from "../assets/images/service-plumbing.jpg";
import electricityImg from "../assets/images/service-electricity.jpg";

const imgs = { 'ac-repair': acRepairImg, 'ac-installation': acInstallImg, 'ac-cleaning': acCleanImg, 'washing-machine': washingImg, 'plumbing': plumbingImg, 'electricity': electricityImg };
const iconMap = { FaWrench, FaSnowflake, FaWater, FaTshirt, FaFaucet, FaBolt };

const ServiceDetailPage = ({ slug }) => {
  const { t, lang } = useLang();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <div className="text-center py-20 text-gray-400 text-lg">{lang === "ar" ? "الخدمة غير موجودة" : "Service not found"}</div>;

  const Icon = iconMap[service.iconName] || FaWrench;
  const title = t(`services.${slug}`);
  const fullDesc = typeof service.fullDesc === "object" ? service.fullDesc[lang] : service.fullDesc;
  const features = typeof service.features === "object" && !Array.isArray(service.features) ? service.features[lang] : service.features;

  const reasons = [
    { icon: FaClock, title: t("whyChoose.features.speed.title"), desc: t("whyChoose.features.speed.desc") },
    { icon: FaShieldAlt, title: t("whyChoose.features.warranty.title"), desc: t("whyChoose.features.warranty.desc") },
    { icon: FaTools, title: t("whyChoose.features.certified.title"), desc: t("whyChoose.features.certified.desc") },
  ];

  return (
    <main className="pt-[66px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-gray-400 text-[13px]">
              <Link to="/" className="hover:text-brand-blue">{t("about.breadcrumbHome")}</Link> <span className="mx-2">›</span>
              <Link to="/services" className="hover:text-brand-blue">{t("nav.services")}</Link> <span className="mx-2">›</span>
              <span className="text-gray-600">{title}</span>
            </nav>
            <div className="mt-5 w-14 h-14 rounded-xl bg-brand-blue/[0.06] border border-brand-blue/10 flex items-center justify-center">
              <Icon className="text-brand-blue text-2xl" />
            </div>
            <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{title}</h1>
            <p className="mt-4 text-gray-500 leading-relaxed">{fullDesc}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="tel:+966551895625" className="btn-primary min-h-[50px] w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-lg text-sm"><FaPhone className="mr-2 text-[13px]" /> {t("hero.callNow")}</a>
              <a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" className="btn-outline min-h-[50px] w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-lg text-sm"><FaWhatsapp className="mr-2 text-[#25D366]" /> {t("hero.whatsapp")}</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="w-full max-w-xl mx-auto lg:ml-auto">
            <img src={imgs[slug]} alt={title} loading="lazy" className="w-full rounded-2xl object-cover max-h-[380px] lg:max-h-[460px] shadow-lg shadow-black/[0.06]" />
          </motion.div>
        </div>
      </section>

      {/* Features + Brands */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{lang === "ar" ? "ما يتضمنه" : "What's Included"}</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">{lang === "ar" ? "كل ما يتضمنه هذه الخدمة" : "Everything covered in this service"}</h2>
            <div className="section-line mt-3" />
            <div className="mt-8 space-y-1">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 py-3.5 border-b border-gray-200 last:border-0">
                  <FaCheckCircle className="text-brand-blue text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{lang === "ar" ? "العلامات التجارية" : "Brands We Service"}</span>
            <h2 className="mt-3 text-xl font-bold text-gray-900">{lang === "ar" ? "العلامات التجارية المتوافقة" : "Compatible Brands"}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {service.brands.map((b, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl text-gray-700 text-sm font-medium text-center py-3.5 px-4 hover:text-brand-blue hover:border-brand-blue/20 transition-colors min-h-[44px] flex items-center justify-center">{b}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-7 text-center border border-gray-100">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-blue/[0.06] flex items-center justify-center"><r.icon className="text-brand-blue text-xl" /></div>
              <h3 className="mt-4 text-gray-900 font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-gray-500 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServiceDetailPage;

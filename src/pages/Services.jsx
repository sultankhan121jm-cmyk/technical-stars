import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import services from "../data/services";
import servicesBanner from "../assets/images/services-banner.jpg";

const districts = [
  { en: "Al Olaya", ar: "العليا" }, { en: "Al Malaz", ar: "الملز" }, { en: "Al Yarmouk", ar: "اليرموك" },
  { en: "Al Yasmin", ar: "الياسمين" }, { en: "Al Rawdah", ar: "الروضة" }, { en: "Al Murabba", ar: "المربع" },
  { en: "Al Sahafa", ar: "الصفاة" }, { en: "Al Nakheel", ar: "النخيل" }, { en: "Al Wurud", ar: "الورود" },
  { en: "Al Sulaimaniyah", ar: "السليمانية" }, { en: "Al Aqiq", ar: "العقيق" }, { en: "Al Shuhada", ar: "الشهداء" },
];

const Services = () => {
  const { t, lang } = useLang();
  return (
    <main className="pt-[66px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 text-[13px]">
            <Link to="/" className="hover:text-brand-blue transition-colors">{t("about.breadcrumbHome")}</Link> <span className="mx-2">›</span> <span className="text-gray-600">{t("nav.services")}</span>
          </motion.nav>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t("nav.services")}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-gray-500 max-w-2xl mx-auto">{lang === "ar" ? "خدمات صيانة وإصلاح احترافية في جميع أحياء الرياض" : "Professional home repair and maintenance across all Riyadh districts"}</motion.p>
          <div className="section-line mx-auto mt-4" />
          <img src={servicesBanner} alt="Services" loading="lazy" className="mt-10 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[280px] md:max-h-[360px] shadow-lg shadow-black/[0.06]" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{lang === "ar" ? "ما نقدمه" : "What We Offer"}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{lang === "ar" ? "كل ما يحتاجه منزلك" : "Everything Your Home Needs"}</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.id} iconName={s.iconName} shortDesc={s.shortDesc} slug={s.slug} index={i} />)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{lang === "ar" ? "التغطية" : "Coverage"}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{lang === "ar" ? "نغطي جميع أحياء الرياض" : "We Cover All Riyadh Districts"}</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {districts.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-gray-50 border border-gray-100 rounded-xl text-gray-700 text-[13px] font-medium text-center py-3 px-3 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-200 min-h-[44px] flex items-center justify-center">
                {typeof d === "object" ? d[lang] : d}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Services;

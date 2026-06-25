import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp,
  FaPhoneAlt, FaSearch, FaTools, FaCheckCircle,
  FaChevronDown, FaStar, FaArrowRight, FaMapMarkerAlt,
} from "react-icons/fa";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import services from "../data/services";
import testimonials from "../data/testimonials";
import faqs from "../data/faqs";

const featureKeys = ["speed", "warranty", "certified", "rated"];
const stepKeys = ["call", "diagnose", "repair", "warranty"];

// ─── 1. FIXED ELECTRICAL KEY MATCHING ────────────────────────────────────────
const serviceImages = {
  "air-conditioning": "/images/repair.jpg",
  "ac-installation": "/images/installation.jpg",
  "ac-cleaning": "/images/cleaning.jpg",
  "washing-machine": "/images/washing-machine.jpg",
  "plumbing": "/images/plumbing.jpg",
  "electricity": "/images/electrical.jpg", // Fixed to match your exact dynamic slug
  "electrical": "/images/electrical.jpg",          // Fallback backup key
  "default": "/images/repair.jpg"
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const SectionHead = ({ label, title, subtitle, center = true }) => {
  const { lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <div className={`${center ? "text-center" : isRtl ? "text-right" : "text-left"} mb-12 md:mb-16 relative z-10`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full text-blue-950 bg-amber-400 font-black text-xs tracking-wider uppercase mb-3 shadow-sm"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`w-20 h-1.5 bg-blue-700 mt-4 rounded-full ${center ? "mx-auto" : isRtl ? "ml-auto" : "mr-auto"}`}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-slate-700 font-bold max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

const StatsBar = () => {
  const { t } = useLang();

  const stats = [
    { value: "2500+", label: t("hero.stats.happyClients"), icon: "😊" },
    { value: "10+", label: t("hero.stats.yearsExp"), icon: "🏆" },
    { value: "60 Min", label: t("hero.stats.responseTime"), icon: "⚡" },
    { value: "24/7", label: t("hero.stats.emergency"), icon: "🛡️" },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 relative overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 divide-x divide-slate-200">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 text-center group">
              <span className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
              <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight" dir="ltr">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-blue-900 font-black mt-2 tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <SectionHead
          label={t("servicesSection.label")}
          title={t("servicesSection.title")}
          subtitle={t("servicesSection.subtitle")}
        />

        {/* ── Spotlight Featured Service Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 mb-12 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl group flex flex-col lg:flex-row items-stretch justify-between relative"
        >
          <div className="w-full lg:w-5/12 min-h-[320px] lg:min-h-auto relative overflow-hidden bg-slate-100">
            {/* ── 3. LOCALLY HOSTED PICTURE ── */}
            <img
              src="/images/spotlight-repair.jpeg"
              alt="Professional Split AC Repairing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />
          </div>

          <div className="w-full lg:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-slate-900 text-white relative">
            <div className={`relative z-10 ${isRtl ? "text-right" : "text-left"}`}>
              <span className="inline-block text-xs font-black tracking-wider uppercase text-slate-950 bg-amber-400 px-3 py-1 rounded-md mb-4 shadow">
                🔥 {t("servicesSection.label")} #1
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                {typeof services[0].shortDesc === "object" ? services[0].shortDesc[lang] : services[0].shortDesc}
              </h3>
              <p className="mt-4 text-slate-300 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                {typeof services[0].fullDesc === "object" ? services[0].fullDesc[lang] : services[0].fullDesc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              {/* ── 2. FIXED TARGET ROUTE LINK ── */}
              <a
                href="https://www.technicalstars.online/services"
                className="inline-flex items-center gap-3 bg-amber-500 text-slate-950 font-black text-base rounded-2xl px-8 py-4 shadow-xl hover:bg-amber-400 transform hover:-translate-y-0.5 transition-all"
              >
                {t("servicesSection.viewAll")} <FaArrowRight className={`text-sm ${isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Graphic Service Card Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const cardImg = serviceImages[s.slug] || serviceImages["default"];
            return (
              <motion.div
                key={s.id}
                variants={fadeInUp}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:border-blue-700 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="h-52 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={cardImg}
                    alt={typeof s.shortDesc === "object" ? s.shortDesc[lang] : s.shortDesc}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className={`p-6 flex flex-col flex-grow ${isRtl ? "text-right" : "text-left"}`}>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {typeof s.shortDesc === "object" ? s.shortDesc[lang] : s.shortDesc}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm font-bold line-clamp-3 flex-grow">
                    {typeof s.fullDesc === "object" ? s.fullDesc[lang] : s.fullDesc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-black text-blue-700 hover:text-blue-900 group/link"
                    >
                      <span>Explore Service</span>
                      <FaArrowRight className={`text-xs transition-transform group-hover/link:translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";
  const icons = [FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp];

  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`flex flex-col gap-8 ${isRtl ? "text-right" : "text-left"}`}>
          <div>
            <SectionHead label={t("whyChoose.label")} title={t("whyChoose.title")} center={false} />
            <p className="mt-2 text-slate-700 font-bold text-base md:text-lg leading-relaxed">
              {t("whyChoose.subtitle")}
            </p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-8 group">
            <div className="text-center flex-shrink-0 relative z-10">
              {/* ── CHANGED RATING TO 4.5 ── */}
              <p className="text-6xl font-black text-white tracking-tight" dir="ltr">4.5</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {/* Renders 4 full stars */}
                {[...Array(4)].map((_, i) => <FaStar key={i} className="text-amber-400 text-base" />)}
                {/* Renders 1 half star to match 4.5 precisely */}
                <span className="text-amber-400 text-base relative overflow-hidden w-[8px] inline-block select-none leading-none">★</span>
              </div>
              <p className="text-amber-400 text-xs font-black uppercase tracking-wider mt-2">500+ reviews</p>
            </div>
            <div className={`w-full border-t sm:border-t-0 ${isRtl ? "sm:border-r" : "sm:border-l"} border-white/10 pt-6 sm:pt-0 sm:pl-8 sm:pr-4 flex flex-col gap-3.5 relative z-10`}>
              {[t("whyChoose.features.speed.title"), t("whyChoose.features.warranty.title"), t("whyChoose.features.certified.title")].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-white text-sm font-bold tracking-wide">
                  <FaCheckCircle className="text-amber-400 text-base flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
          {featureKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={key} className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:border-blue-700 transition-all duration-300 group ${isRtl ? "text-right" : "text-left"}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow"><Icon className="text-xl" /></div>
                  <span className="text-3xl font-black text-slate-200 pointer-events-none select-none">0{i + 1}</span>
                </div>
                <h3 className="text-slate-900 text-base font-black tracking-tight">{t(`whyChoose.features.${key}.title`)}</h3>
                <p className="mt-2 text-slate-600 text-xs md:text-sm font-bold leading-relaxed">{t(`whyChoose.features.${key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";
  const icons = [FaPhoneAlt, FaSearch, FaTools, FaCheckCircle];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <SectionHead label={t("howItWorks.label")} title={t("howItWorks.title")} />

        {/* ── 3. LOCALLY HOSTED APPRAISAL SHOWCASE BANNER ── */}
        <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden relative mb-16 border border-slate-200 shadow-md">
          <img
            src="/images/how-it-works.jpeg"
            alt="Technical team support setup parameters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/10" />
        </div>

        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {stepKeys.map((key, i) => {
              const Icon = icons[i];
              return (
                <div key={key} className="flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xl relative z-10">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center shadow border-2 border-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-slate-900 text-lg font-black tracking-tight">{t(`howItWorks.steps.${key}.title`)}</h3>
                  <p className="mt-2.5 text-slate-600 text-sm font-bold max-w-[240px] leading-relaxed">{t(`howItWorks.steps.${key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const { t } = useLang();
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-slate-950 bg-amber-400 text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-md shadow">{t("testimonials.label")}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-white tracking-tight">{t("testimonials.title")}</h2>
          <div className="w-24 h-1.5 bg-blue-700 mx-auto mt-5 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t2, i) => (
            <div key={t2.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-1 shadow-xl">
              <TestimonialCard name={t2.name} location={t2.location} review={t2.review} service={t2.service} rating={t2.rating} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 4. FIXED NORTH RIYADH COVERAGE METRICS ──────────────────────────────────
const ServiceAreaTeaser = () => {
  const { lang } = useLang();
  const isRtl = lang === "ar";

  const northDistricts = [
    { en: "Al Yasmin", ar: "الياسمين" },
    { en: "Al Malqa", ar: "الملقا" },
    { en: "Al Narjis", ar: "النرجس" },
    { en: "Al Sahafa", ar: "الصحافة" },
    { en: "Al Aqiq", ar: "العقيق" },
    { en: "Al Qairawan", ar: "القيروان" },
    { en: "Al Falah", ar: "الفلاح" },
    { en: "Al Ghadir", ar: "الغدير" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 ${isRtl ? "md:flex-row-reverse text-right" : "text-left"}`}>
          <div>
            <span className="text-blue-900 text-xs font-black tracking-wider uppercase flex items-center justify-start gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              {isRtl ? "نطاق الحصري - شمال الرياض" : "Exclusive Direct Coverage - North Riyadh Only"}
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              {isRtl ? "نخدم شمال الرياض فقط" : "Serving North Riyadh"}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {northDistricts.map((d, i) => (
            <span key={i} className="bg-white border border-slate-200 text-slate-900 text-sm font-black rounded-2xl px-4 py-2.5 shadow-sm flex items-center gap-1.5">
              <span></span> {d[lang]}
            </span>
          ))}
          <span className="bg-blue-50 border border-blue-200 text-blue-900 text-sm font-black rounded-2xl px-4 py-2.5">
            {isRtl ? "تغطية سريعة وشاملة" : "Rapid Express Deployment"}
          </span>
        </div>
      </div>
    </section>
  );
};

// ─── 5. FIXED FAQ PROFESSIONAL VIEWPORT ───────────────────────────────────────
const FAQSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";
  const [openIndex, setOpenIndex] = useState(null);

  const getQ = (f) => (typeof f.question === "object" ? f.question[lang] : f.question);
  const getA = (f) => (typeof f.answer === "object" ? f.answer[lang] : f.answer);

  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full">{t("faq.label")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-sans">{t("faq.title")}</h2>
          <p className="mt-3 text-slate-500 text-sm font-medium">{t("faq.subtitle")}</p>
        </div>

        {/* Explicitly force text-right and rtl formatting if needed */}
        <div className="space-y-3 font-sans" dir={isRtl ? "rtl" : "auto"}>
          {faqs.slice(0, 5).map((faq, i) => {
            const isOpen = openIndex === i;
            const questionText = getQ(faq);

            // Safety Check: Detect if the text string contains Arabic characters
            const hasArabicText = /[\u0600-\u06FF]/.test(questionText);
            const shouldAlignRight = isRtl || hasArabicText;

            return (
              <div
                key={faq.id}
                className="bg-white border-b border-slate-200 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between py-5 gap-4 ${shouldAlignRight ? "flex-row-reverse text-right" : "text-left"
                    }`}
                  style={{ textAlign: shouldAlignRight ? 'right' : 'left' }}
                >
                  <span className="text-slate-900 text-base font-bold tracking-tight hover:text-blue-700 transition-colors block w-full">
                    {questionText}
                  </span>
                  <span className={`text-xs flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-700" : "text-slate-400"}`}>
                    <FaChevronDown />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`pb-6 text-slate-600 text-sm leading-relaxed`}
                        style={{ textAlign: shouldAlignRight ? 'right' : 'left' }}
                      >
                        {getA(faq)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="overflow-x-hidden antialiased bg-white selection:bg-blue-700 selection:text-white"
    >
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServiceAreaTeaser />
      <FAQSection />
      <CTABanner />
    </main>
  );
};

export default Home;
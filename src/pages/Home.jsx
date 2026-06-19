import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhone, FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp, FaPhoneAlt, FaSearch, FaTools, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import services from "../data/services";
import testimonials from "../data/testimonials";
import faqs from "../data/faqs";

const featureKeys = ["speed", "warranty", "certified", "rated"];
const stepKeys = ["call", "diagnose", "repair", "warranty"];

const SectionHead = ({ label, title, subtitle }) => (
  <div className="text-center">
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{label}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{title}</motion.h2>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="section-line mx-auto mt-4" />
    {subtitle && <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4 text-gray-500 max-w-2xl mx-auto">{subtitle}</motion.p>}
  </div>
);

const ServicesSection = () => {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <SectionHead label={t("servicesSection.label")} title={t("servicesSection.title")} subtitle={t("servicesSection.subtitle")} />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={s.id} iconName={s.iconName} shortDesc={s.shortDesc} slug={s.slug} index={i} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-sm text-gray-400">{t("servicesSection.needService")}</p>
          <Link to="/services" className="inline-flex items-center justify-center min-h-[48px] mt-5 px-7 py-2.5 btn-outline rounded-lg text-sm">{t("servicesSection.viewAll")}</Link>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const { t } = useLang();
  const icons = [FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp];
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <SectionHead label={t("whyChoose.label")} title={t("whyChoose.title")} />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-5 text-gray-500 max-w-xl mx-auto lg:mx-0">{t("whyChoose.subtitle")}</motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8">
            <a href="tel:+966551895625" className="btn-primary inline-flex items-center min-h-[48px] px-7 py-2.5 rounded-lg text-sm"><FaPhone className="mr-2 text-[13px]" /> {t("whyChoose.callNow")}</a>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featureKeys.map((key, i) => {
            const Icon = icons[i]; return (
              <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 border border-gray-100">
                <Icon className="text-brand-blue text-xl" />
                <h3 className="mt-3 text-gray-900 text-[15px] font-semibold">{t(`whyChoose.features.${key}.title`)}</h3>
                <p className="mt-1.5 text-gray-500 text-sm">{t(`whyChoose.features.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { t, isRTL } = useLang();
  const icons = [FaPhoneAlt, FaSearch, FaTools, FaCheckCircle];
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <SectionHead label={t("howItWorks.label")} title={t("howItWorks.title")} />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stepKeys.map((key, i) => {
            const Icon = icons[i]; return (
              <motion.div key={key} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue/[0.06] border border-brand-blue/10 flex items-center justify-center"><Icon className="text-brand-blue text-xl" /></div>
                <h3 className="mt-4 text-gray-900 text-[15px] font-semibold">{t(`howItWorks.steps.${key}.title`)}</h3>
                <p className="mt-2 text-gray-500 text-sm max-w-[240px]">{t(`howItWorks.steps.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <SectionHead label={t("testimonials.label")} title={t("testimonials.title")} />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t2, i) => <TestimonialCard key={t2.id} name={t2.name} location={t2.location} review={t2.review} service={t2.service} rating={t2.rating} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState(null);
  const getQ = (f) => typeof f.question === "object" ? f.question[lang] : f.question;
  const getA = (f) => typeof f.answer === "object" ? f.answer[lang] : f.answer;
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-16">
        <SectionHead label={t("faq.label")} title={t("faq.title")} subtitle={t("faq.subtitle")} />
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.id} className={`bg-gray-50 border rounded-xl transition-colors ${openIndex === i ? "border-brand-blue/20 bg-brand-blue/[0.02]" : "border-gray-100"}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="text-gray-800 text-sm font-medium pr-4">{getQ(faq)}</span>
                <motion.span animate={{ rotate: openIndex === i ? 180 : 0 }} className="text-brand-blue text-xs"><FaChevronDown /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{getA(faq)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => (
  <main>
    <Hero />
    <ServicesSection />
    <WhyChooseUsSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FAQSection />
    <CTABanner />
  </main>
);

export default Home;

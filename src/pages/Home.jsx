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

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const featureIconMap = { FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp };
const stepIconMap = { FaPhoneAlt, FaSearch, FaTools, FaCheckCircle };

const featureKeys = ["speed", "warranty", "certified", "rated"];
const stepKeys = ["call", "diagnose", "repair", "warranty"];

const ServicesSection = () => {
  const { t } = useLang();
  return (
    <section className="bg-brand-background py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t("servicesSection.label")}</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{t("servicesSection.title")}</motion.h2>
          <div className="w-16 h-1 bg-brand-cta mx-auto mt-3" />
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">{t("servicesSection.subtitle")}</motion.p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} iconName={service.iconName} title={service.title} shortDesc={service.shortDesc} slug={service.slug} index={index} />
          ))}
        </div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-gray-500">{t("servicesSection.needService")}</p>
          <Link to="/services" className="inline-flex items-center justify-center min-h-[48px] mt-6 px-8 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-accent transition-colors duration-200">{t("servicesSection.viewAll")}</Link>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const { t } = useLang();
  return (
    <section className="bg-brand-primary py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-cta font-bold text-xs md:text-sm tracking-widest uppercase">{t("whyChoose.label")}</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t("whyChoose.title")}</motion.h2>
          <div className="w-16 h-1 bg-[#EF9F27] mt-3 mx-auto lg:mx-0" />
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm md:text-base text-brand-light leading-relaxed max-w-xl mx-auto lg:mx-0">{t("whyChoose.subtitle")}</motion.p>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6">
            <a href="tel:+966551895625" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-brand-cta text-brand-primary font-bold rounded-lg hover:brightness-110 transition-all duration-200"><FaPhone className="mr-2" /> {t("whyChoose.callNow")}</a>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featureKeys.map((key, index) => {
            const icons = [FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp];
            const Icon = icons[index] || FaThumbsUp;
            return (
              <motion.div key={key} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
                <Icon className="text-brand-cta text-2xl" />
                <h3 className="mt-3 text-white text-base font-bold">{t(`whyChoose.features.${key}.title`)}</h3>
                <p className="mt-1 text-sm text-brand-light">{t(`whyChoose.features.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { t } = useLang();
  const icons = [FaPhoneAlt, FaSearch, FaTools, FaCheckCircle];
  return (
    <section className="bg-brand-background py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t("howItWorks.label")}</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{t("howItWorks.title")}</motion.h2>
          <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stepKeys.map((key, index) => {
            const Icon = icons[index] || FaCheckCircle;
            return (
              <motion.div key={key} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative flex flex-col items-center text-center px-4">
                {index < 3 && <div className="hidden lg:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-brand-accent/30 pointer-events-none" />}
                <span className="text-4xl md:text-5xl font-bold text-brand-cta opacity-20 absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none select-none" dir="ltr">0{index + 1}</span>
                <div className="relative z-10 w-16 h-16 bg-brand-light rounded-full flex items-center justify-center"><Icon className="text-brand-primary text-2xl" /></div>
                <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{t(`howItWorks.steps.${key}.title`)}</h3>
                <p className="mt-2 text-gray-500 text-sm max-w-xs mx-auto">{t(`howItWorks.steps.${key}.desc`)}</p>
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
    <section className="bg-brand-primary py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-cta font-bold text-xs md:text-sm tracking-widest uppercase">{t("testimonials.label")}</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t("testimonials.title")}</motion.h2>
          <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              review={t(`testimonialsData.${testimonial.id}.review`)}
              service={t(`testimonialsData.${testimonial.id}.service`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <section className="bg-brand-background py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t("faq.label")}</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{t("faq.title")}</motion.h2>
          <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-3 text-sm md:text-base text-gray-500">{t("faq.subtitle")}</motion.p>
        </div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 md:mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`bg-white border rounded-xl transition-colors duration-300 ${openIndex === index ? "border-brand-accent" : "border-brand-light"}`}>
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-5 md:p-6 min-h-[52px] text-left">
                <span className="text-brand-primary text-sm md:text-base font-medium pr-4">{t(`faqsData.${faq.id}.question`)}</span>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 text-brand-accent"><FaChevronDown /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed">{t(`faqsData.${faq.id}.answer`)}</p>
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

const Home = () => {
  return (
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
};

export default Home;

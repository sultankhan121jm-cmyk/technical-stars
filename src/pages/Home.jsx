import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaClock,
  FaShieldAlt,
  FaUserCheck,
  FaThumbsUp,
  FaPhoneAlt,
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import services from "../data/services";
import testimonials from "../data/testimonials";
import faqs from "../data/faqs";

/* ── Animation Variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ── Icon Maps (CSP Safe) ── */
const featureIconMap = { FaClock, FaShieldAlt, FaUserCheck, FaThumbsUp };
const stepIconMap = { FaPhoneAlt, FaSearch, FaTools, FaCheckCircle };

/* ── Local Data Arrays ── */
const features = [
  { iconName: "FaClock", title: "60 Min Response", desc: "We reach you within 60 minutes anywhere in Riyadh" },
  { iconName: "FaShieldAlt", title: "Full Warranty", desc: "Written warranty on all parts and labor we provide" },
  { iconName: "FaUserCheck", title: "Certified Technicians", desc: "10+ years experienced and fully licensed professionals" },
  { iconName: "FaThumbsUp", title: "Highly Rated", desc: "Hundreds of happy customers across all Riyadh districts" },
];

const steps = [
  { iconName: "FaPhoneAlt", title: "Call or WhatsApp", desc: "Contact us anytime, we are available 24/7 for all emergencies" },
  { iconName: "FaSearch", title: "Quick Diagnosis", desc: "Our technician arrives and accurately diagnoses the problem" },
  { iconName: "FaTools", title: "Expert Repair", desc: "We fix the issue using original spare parts with precision" },
  { iconName: "FaCheckCircle", title: "Warranty Given", desc: "We hand over a written warranty for complete peace of mind" },
];


/* ═══════════════════════════════════════════════
   SECTION 1: SERVICES
   ═══════════════════════════════════════════════ */
const ServicesSection = () => (
  <section className="bg-brand-background py-16 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">Our Services</motion.span>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">What We Fix & Install</motion.h2>
        <div className="w-16 h-1 bg-brand-cta mx-auto mt-3" />
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">From AC repair to plumbing and electrical work — Technical Stars handles it all across Riyadh</motion.p>
      </div>
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} iconName={service.iconName} title={service.title} shortDesc={service.shortDesc} slug={service.slug} index={index} />
        ))}
      </div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 md:mt-16 text-center">
        <p className="text-sm text-gray-500">Need a service not listed here? Contact us directly</p>
        <Link to="/services" className="inline-flex items-center justify-center min-h-[48px] mt-6 px-8 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-accent transition-colors duration-200">View All Services</Link>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 2: WHY CHOOSE US
   ═══════════════════════════════════════════════ */
const WhyChooseUsSection = () => (
  <section className="bg-brand-primary py-16 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="text-center lg:text-left">
        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-cta font-bold text-xs md:text-sm tracking-widest uppercase">Why Choose Us</motion.span>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Riyadh&apos;s Most Trusted Home Service Experts</motion.h2>
        <div className="w-16 h-1 bg-[#EF9F27] mt-3 mx-auto lg:mx-0" />
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm md:text-base text-brand-light leading-relaxed max-w-xl mx-auto lg:mx-0">With over 10 years serving Riyadh households, Technical Stars has built a reputation for fast response, quality workmanship, and honest pricing. Our certified technicians treat every home like their own.</motion.p>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6">
          <a href="tel:+966551895625" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-brand-cta text-brand-primary font-bold rounded-lg hover:brightness-110 transition-all duration-200"><FaPhone className="mr-2" /> Call Now</a>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const Icon = featureIconMap[feature.iconName] || FaThumbsUp;
          return (
            <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
              <Icon className="text-brand-cta text-2xl" />
              <h3 className="mt-3 text-white text-base font-bold">{feature.title}</h3>
              <p className="mt-1 text-sm text-brand-light">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3: HOW IT WORKS
   ═══════════════════════════════════════════════ */
const HowItWorksSection = () => (
  <section className="bg-brand-background py-16 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">The Process</motion.span>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">How It Works</motion.h2>
        <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
      </div>
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {steps.map((step, index) => {
          const Icon = stepIconMap[step.iconName] || FaCheckCircle;
          return (
            <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative flex flex-col items-center text-center px-4">
              {index < 3 && <div className="hidden lg:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-brand-accent/30 pointer-events-none" />}
              <span className="text-4xl md:text-5xl font-bold text-brand-cta opacity-20 absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none select-none">0{index + 1}</span>
              <div className="relative z-10 w-16 h-16 bg-brand-light rounded-full flex items-center justify-center"><Icon className="text-brand-primary text-2xl" /></div>
              <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-500 text-sm max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4: TESTIMONIALS
   ═══════════════════════════════════════════════ */
const TestimonialsSection = () => (
  <section className="bg-brand-primary py-16 md:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-cta font-bold text-xs md:text-sm tracking-widest uppercase">Testimonials</motion.span>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">What Our Customers Say</motion.h2>
        <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
      </div>
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            name={testimonial.name} 
            location={testimonial.location} 
            review={testimonial.review} 
            service={testimonial.service} 
            index={index} 
          />
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5: FAQ
   ═══════════════════════════════════════════════ */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-background py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">FAQ</motion.span>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">Frequently Asked Questions</motion.h2>
          <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-3 text-sm md:text-base text-gray-500">Everything you need to know about our services</motion.p>
        </div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 md:mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`bg-white border rounded-xl transition-colors duration-300 ${openIndex === index ? "border-brand-accent" : "border-brand-light"}`}>
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-5 md:p-6 min-h-[52px] text-left">
                <span className="text-brand-primary text-sm md:text-base font-medium pr-4">{faq.question}</span>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 text-brand-accent"><FaChevronDown /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
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

/* ═══════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════ */
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
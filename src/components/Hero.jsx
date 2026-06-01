import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";
import heroMain from "../assets/images/hero-main.jpg";
import { useLang } from "../contexts/LanguageContext";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInDown = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { isRTL } = useLang();

  useEffect(() => {
    if (isInView && typeof value === "number") {
      let start = 0;
      const increment = value / (2000 / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) { setCount(value); clearInterval(timer); } else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold text-brand-cta" dir="ltr">
      {typeof value === "number" ? count : value}{typeof value === "number" ? suffix : ""}
    </span>
  );
};

const Hero = () => {
  const { t, isRTL } = useLang();

  const stats = [
    { value: 500, suffix: "+", label: t("hero.stats.happyClients") },
    { value: 10, suffix: "+", label: t("hero.stats.yearsExp") },
    { value: 60, suffix: " Min", label: t("hero.stats.responseTime") },
    { value: "24/7", label: t("hero.stats.emergency") },
  ];

  return (
    <section className="bg-brand-primary min-h-[90vh] lg:min-h-screen flex flex-col text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-1">
        <div className="flex flex-col text-center lg:text-left">
          <motion.div variants={fadeInDown} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0 }} className="inline-flex items-center justify-center lg:justify-start gap-2 bg-brand-accent text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0">
            {t("hero.badge")}
          </motion.div>
          <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {t("hero.titleLine1")}
            <br />
            <span className="text-brand-cta">{t("hero.titleHighlight")}</span>
            <br />
            {t("hero.titleLine2")}
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} className="mt-6 text-sm md:text-base lg:text-lg text-brand-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="tel:+966551895625" className="min-h-[48px] w-full sm:w-auto rounded-lg px-6 py-3 text-sm md:text-base font-bold bg-brand-cta text-brand-primary flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-200"><FaPhone className="mr-2" /> {t("hero.callNow")}</a>
            <a href="https://wa.me/966551895625" target="_blank" rel="noopener noreferrer" className="min-h-[48px] w-full sm:w-auto rounded-lg px-6 py-3 text-sm md:text-base font-bold bg-transparent border-2 border-brand-cta text-brand-cta flex items-center justify-center gap-2 hover:bg-brand-cta/10 transition-all duration-200"><FaWhatsapp className="mr-2" /> {t("hero.whatsapp")}</a>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.8 }} className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2 text-brand-light text-xs md:text-sm">
            <span className="flex items-center gap-1.5"><FaCheckCircle className="text-brand-accent text-sm" /> {t("hero.licensed")}</span>
            <span className="text-brand-accent/40 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5"><FaShieldAlt className="text-brand-accent text-sm" /> {t("hero.insured")}</span>
            <span className="text-brand-accent/40 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5"><FaClock className="text-brand-accent text-sm" /> {t("hero.response60")}</span>
          </motion.div>
        </div>
        <motion.div variants={isRTL ? fadeInLeft : fadeInRight} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.3 }} className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
          <img src={heroMain} alt="Technical Stars professional AC technician in Riyadh" loading="eager" className="w-full rounded-2xl object-cover max-h-[250px] md:max-h-[400px] lg:max-h-[500px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" />
        </motion.div>
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="w-full bg-white/5 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-4 lg:py-0 px-4 last:pb-0 lg:last:pl-0">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-brand-light text-xs md:text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

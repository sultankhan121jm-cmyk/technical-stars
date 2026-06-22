import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";
import heroMain from "../assets/images/hero-main.jpg";
import { useLang } from "../contexts/LanguageContext";

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && typeof value === "number") {
      let start = 0;
      const inc = value / (2000 / 16);
      const timer = setInterval(() => {
        start += inc;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref} className="text-3xl md:text-4xl font-bold text-brand-blue" dir="ltr">{typeof value === "number" ? count : value}{suffix}</span>;
};

const Hero = () => {
  const { t, lang } = useLang();

  const stats = [
    { value: 500, suffix: "+", label: String(t("hero.stats.happyClients")) },
    { value: 10, suffix: "+", label: String(t("hero.stats.yearsExp")) },
    { value: 60, suffix: " Min", label: String(t("hero.stats.responseTime")) },
    { value: "24/7", label: String(t("hero.stats.emergency")) },
  ];

  return (
    <section className="bg-brand-bg min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-5 lg:px-16 pt-32 md:pt-40 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center flex-1">
        <div className="flex flex-col text-center lg:text-left min-h-[120px] md:min-h-[150px]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 bg-brand-blue/10 text-brand-blue text-[12px] font-semibold px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0"
          >
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-brand-navy tracking-tight"
          >
            {t("hero.titleLine1")}
            <br />
            <span className="text-brand-blue">{t("hero.titleHighlight")}</span>
            <br />
            {t("hero.titleLine2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-base md:text-lg text-brand-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="tel:+966 556380709" className="btn-primary min-h-[54px] w-full sm:w-auto rounded-xl px-8 py-3.5 text-[16px] flex items-center justify-center gap-2.5 font-bold">
              <FaPhone className="text-[14px]" /> {t("hero.callNow")}
            </a>
            <a href="https://wa.me/966556380709" target="_blank" rel="noopener noreferrer" className="btn-outline min-h-[54px] w-full sm:w-auto rounded-xl px-8 py-3.5 text-[16px] flex items-center justify-center gap-2.5">
              <FaWhatsapp className="text-[#25D366]" /> {t("hero.whatsapp")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-7 flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2 text-brand-muted text-[13px]"
          >
            <span className="flex items-center gap-1.5"><FaCheckCircle className="text-brand-blue text-[11px]" /> {t("hero.licensed")}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><FaShieldAlt className="text-brand-blue text-[11px]" /> {t("hero.insured")}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><FaClock className="text-brand-blue text-[11px]" /> {t("hero.response60")}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: lang === "ar" ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
        >
          <img src={heroMain} alt="Technical Stars" width="1200" height="896" loading="eager" className="w-full rounded-2xl object-cover max-h-[320px] md:max-h-[440px] lg:max-h-[520px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
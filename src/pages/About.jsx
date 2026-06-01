import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaHandshake, FaThumbsUp, FaHeart } from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import aboutStory from "../assets/images/about-story.jpg";
import teamAfzaal from "../assets/images/team-afzaal.jpg";
import teamIrfan from "../assets/images/team-irfan.jpg";
import teamSultan from "../assets/images/team-sultan.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

const valueIconMap = { FaBolt, FaHandshake, FaThumbsUp, FaHeart };
const valueKeys = ["speed", "honesty", "rated", "care"];

const teamMembers = [
  { name: "Afzaal", role: "Lead AC Technician", bio: "10+ years specializing in split and central AC systems across Riyadh", img: teamAfzaal, alt: "Afzaal - Lead AC Technician at Technical Stars" },
  { name: "Irfan", role: "Plumbing & Electrical Expert", bio: "Certified professional with expertise in leak detection and electrical panels", img: teamIrfan, alt: "Irfan - Plumbing and Electrical Expert at Technical Stars" },
  { name: "Sultan", role: "Washing Machine Specialist", bio: "Trained in all major brands with a focus on fast same-day repairs", img: teamSultan, alt: "Sultan - Washing Machine Specialist at Technical Stars" },
];

const About = () => {
  const { t } = useLang();

  return (
    <main>
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm">
              <Link to="/" className="hover:underline">{t("about.breadcrumbHome")}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{t("about.breadcrumbCurrent")}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t("about.title")}</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light">{t("about.subtitle")}</p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={aboutStory} alt="Technical Stars team of certified technicians in Riyadh" loading="lazy" className="w-full rounded-2xl object-cover max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-white" />
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t("about.storyLabel")}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t("about.storyTitle")}</h2>
            <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">{t("about.storyText1")}</p>
            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">{t("about.storyText2")}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border-r border-[#E6F1FB] pr-4 text-center lg:text-left">
                <span className="text-2xl font-bold text-brand-cta">500+</span>
                <p className="text-xs text-gray-600 mt-1">{t("about.stats.clients")}</p>
              </div>
              <div className="border-r border-[#E6F1FB] pr-4 text-center lg:text-left">
                <span className="text-2xl font-bold text-brand-cta">10+</span>
                <p className="text-xs text-gray-600 mt-1">{t("about.stats.years")}</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl font-bold text-brand-cta">6</span>
                <p className="text-xs text-gray-600 mt-1">{t("about.stats.services")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t("about.valuesLabel")}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{t("about.valuesTitle")}</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, index) => {
              const icons = [FaBolt, FaHandshake, FaThumbsUp, FaHeart];
              const Icon = icons[index] || FaThumbsUp;
              return (
                <motion.div key={key} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white border border-brand-light rounded-2xl p-6 md:p-8 text-center hover:border-brand-accent -translate-y-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex items-center justify-center"><Icon className="text-brand-primary text-2xl" /></div>
                  <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{t(`about.values.${key}.title`)}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{t(`about.values.${key}.desc`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs tracking-widest uppercase">{t("about.teamLabel")}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t("about.teamTitle")}</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="text-center">
                <img src={member.img} alt={member.alt} loading="lazy" className="w-24 h-24 mx-auto rounded-full object-cover" />
                <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-brand-accent text-sm font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default About;

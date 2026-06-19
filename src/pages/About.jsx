import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaHandshake, FaThumbsUp, FaHeart } from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import aboutStory from "../assets/images/about-story.jpg";
import teamAfzaal from "../assets/images/team-afzaal.jpg";
import teamIrfan from "../assets/images/team-irfan.jpg";
import teamSultan from "../assets/images/team-sultan.jpg";

const valueKeys = ["speed", "honesty", "rated", "care"];
const valueIcons = [FaBolt, FaHandshake, FaThumbsUp, FaHeart];
const teamMembers = [
  { name: "Afzaal", role: { en: "Lead AC Technician", ar: "فني تكييف رئيسي" }, bio: { en: "10+ years specializing in split and central AC systems", ar: "أكثر من 10 سنوات خبرة في أنظمة التكييف المنفصل والمركزي" }, img: teamAfzaal },
  { name: "Irfan", role: { en: "Plumbing & Electrical Expert", ar: "خبير سباكة وكهرباء" }, bio: { en: "Certified professional with expertise in leak detection", ar: "محترف معتمد بخبرة في كشف التسربات واللوحات الكهربائية" }, img: teamIrfan },
  { name: "Sultan", role: { en: "Washing Machine Specialist", ar: "متخصص غسالات" }, bio: { en: "Trained in all major brands, fast same-day repairs", ar: "مدرب على جميع العلامات التجارية، إصلاح سريع في نفس اليوم" }, img: teamSultan },
];

const About = () => {
  const { t, lang } = useLang();
  return (
    <main className="pt-[66px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 text-[13px]">
            <Link to="/" className="hover:text-brand-blue transition-colors">{t("about.breadcrumbHome")}</Link> <span className="mx-2">›</span> <span className="text-gray-600">{t("about.breadcrumbCurrent")}</span>
          </motion.nav>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t("about.title")}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-gray-500">{t("about.subtitle")}</motion.p>
          <div className="section-line mx-auto mt-4" />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={aboutStory} alt="Our story" loading="lazy" className="w-full rounded-2xl object-cover max-h-[400px] shadow-lg shadow-black/[0.06]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{t("about.storyLabel")}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{t("about.storyTitle")}</h2>
            <div className="section-line mt-3" />
            <p className="mt-5 text-gray-500 leading-relaxed">{t("about.storyText1")}</p>
            <p className="mt-3 text-gray-500 leading-relaxed">{t("about.storyText2")}</p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div><span className="text-2xl font-bold text-brand-blue">500+</span><p className="text-xs text-gray-400 mt-1">{t("about.stats.clients")}</p></div>
              <div><span className="text-2xl font-bold text-brand-blue">10+</span><p className="text-xs text-gray-400 mt-1">{t("about.stats.years")}</p></div>
              <div><span className="text-2xl font-bold text-brand-blue">6</span><p className="text-xs text-gray-400 mt-1">{t("about.stats.services")}</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{t("about.valuesLabel")}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{t("about.valuesTitle")}</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueKeys.map((key, i) => { const Icon = valueIcons[i]; return (
              <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-clean p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-blue/[0.06] flex items-center justify-center"><Icon className="text-brand-blue text-lg" /></div>
                <h3 className="mt-4 text-gray-900 font-semibold">{t(`about.values.${key}.title`)}</h3>
                <p className="mt-1.5 text-gray-500 text-sm">{t(`about.values.${key}.desc`)}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{t("about.teamLabel")}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{t("about.teamTitle")}</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {teamMembers.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <img src={m.img} alt={m.name} loading="lazy" className="w-24 h-24 mx-auto rounded-full object-cover shadow-md" />
                <h3 className="mt-4 text-gray-900 font-semibold">{m.name}</h3>
                <p className="mt-1 text-brand-blue text-sm">{typeof m.role === "object" ? m.role[lang] : m.role}</p>
                <p className="mt-2 text-gray-500 text-sm max-w-xs mx-auto">{typeof m.bio === "object" ? m.bio[lang] : m.bio}</p>
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaHandshake, FaThumbsUp, FaHeart } from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext"; // ADDED
import aboutStory from "../assets/images/about-story.jpg";
import teamAfzaal from "../assets/images/team-afzaal.jpg";
import teamIrfan from "../assets/images/team-irfan.jpg";
import teamSultan from "../assets/images/team-sultan.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

const valueIconMap = { FaBolt, FaHandshake, FaThumbsUp, FaHeart };

// Translations Dictionary
const content = {
  en: {
    home: "Home", aboutUs: "About Us",
    heroTitle: "About Technical Stars",
    heroSub: "Riyadh's trusted home service experts since 2015",
    storyLabel: "Our Story", storyTitle: "10 Years Serving Riyadh Homes",
    storyP1: "Technical Stars was founded in 2015 with a simple mission — to provide fast, honest, and high-quality home repair services to families across Riyadh. What started as a small AC repair team has grown into a full-service home maintenance company trusted by hundreds of households.",
    storyP2: "Today our team of certified technicians handles everything from AC installation and repair to plumbing, electrical work, and washing machine servicing. We take pride in our 60-minute response time, transparent pricing, and written warranty on every job.",
    happyClients: "Happy Clients", yearsExp: "Years Experience", servicesOffered: "Services Offered",
    valuesLabel: "Our Values", valuesTitle: "What Drives Us Every Day",
    teamLabel: "Our Team", teamTitle: "The Experts Behind Technical Stars",
    values: [
      { iconName: "FaBolt", title: "Speed", desc: "We respond within 60 minutes and never keep you waiting" },
      { iconName: "FaHandshake", title: "Honesty", desc: "Transparent pricing with no hidden fees or surprises" },
      { iconName: "FaThumbsUp", title: "Highly Rated", desc: "Hundreds of happy customers across all Riyadh districts" },
      { iconName: "FaHeart", title: "Care", desc: "We treat every home and family with genuine respect" },
    ],
    team: [
      { name: "Afzaal", role: "Lead AC Technician", bio: "10+ years specializing in split and central AC systems across Riyadh" },
      { name: "Irfan", role: "Plumbing & Electrical Expert", bio: "Certified professional with expertise in leak detection and electrical panels" },
      { name: "Sultan", role: "Washing Machine Specialist", bio: "Trained in all major brands with a focus on fast same-day repairs" },
    ]
  },
  ar: {
    home: "الرئيسية", aboutUs: "من نحن",
    heroTitle: "عن نجوم التقنية",
    heroSub: "خبراء خدمة المنزل الموثوقون في الرياض منذ 2015",
    storyLabel: "قصتنا", storyTitle: "10 سنوات من خدمة منازل الرياض",
    storyP1: "تأسست نجوم التقنية في عام 2015 بمهمة بسيطة — تقديم خدمات إصلاح منزلية سريعة وصادقة وعالية الجودة للعائلات في جميع أنحاء الرياض. ما بدأ كفريق صغير لإصلاح المكيفات نمى ليصبح شركة صيانة منزلية متكاملة يثق بها مئات الأسر.",
    storyP2: "اليوم، يتعامل فريقنا من الفنيين المعتمدين مع كل شيء من تركيب وإصلاح المكيفات إلى السباكة والأعمال الكهربائية وخدمة الغسالات. نفخر بوقت استجابتنا الذي يبلغ 60 دقيقة والأسعار الشفافة والضمان المكتوب في كل مهمة.",
    happyClients: "عميل سعيد", yearsExp: "سنوات خبرة", servicesOffered: "خدمات مقدمة",
    valuesLabel: "قيمنا", valuesTitle: "ما يدفعنا كل يوم",
    teamLabel: "فريقنا", teamTitle: "الخبراء وراء نجوم التقنية",
    values: [
      { iconName: "FaBolt", title: "السرعة", desc: "نستجيب خلال 60 دقيقة ولا نجعلك تنتظر أبداً" },
      { iconName: "FaHandshake", title: "الصدق", desc: "أسعار شفافة بدون رسوم مخفية أو مفاجآت" },
      { iconName: "FaThumbsUp", title: "تقييمات عالية", desc: "مئات العملاء السعداء في جميع أحياء الرياض" },
      { iconName: "FaHeart", title: "العناية", desc: "نعامل كل منزل وعائلة باحترام حقيقي" },
    ],
    team: [
      { name: "أفعال", role: "فني مكيفات رئيسي", bio: "أكثر من 10 سنوات متخصص في أنظمة المكيفات المنفصلة والمركزية في الرياض" },
      { name: "إرفان", role: "خبير سباكة وكهرباء", bio: "محترف معتمد بخبرة في كشف التسربات واللوحات الكهربائية" },
      { name: "سلطان", role: "أخصائي غسالات", bio: "مدرب على جميع العلامات التجارية الكبرى مع التركيز على الإصلاحات السريعة في نفس اليوم" },
    ]
  }
};

const About = () => {
  const { lang } = useLang(); // ADDED
  const t = content[lang];    // ADDED

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm" dir="ltr">
              <Link to="/" className="hover:underline">{t.home}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{t.aboutUs}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t.heroTitle}</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light">{t.heroSub}</p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={aboutStory} alt="Technical Stars team" loading="lazy" className="w-full rounded-2xl object-cover max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-white" />
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t.storyLabel}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t.storyTitle}</h2>
            <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">{t.storyP1}</p>
            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">{t.storyP2}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {/* Changed border-r to border-e so it flips correctly in Arabic RTL */}
              <div className="border-e border-[#E6F1FB] pe-4 text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">2500+</span>
                <p className="text-xs text-gray-600 mt-1">{t.happyClients}</p>
              </div>
              <div className="border-e border-[#E6F1FB] pe-4 text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">10+</span>
                <p className="text-xs text-gray-600 mt-1">{t.yearsExp}</p>
              </div>
              <div className="text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">6</span>
                <p className="text-xs text-gray-600 mt-1">{t.servicesOffered}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{t.valuesLabel}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{t.valuesTitle}</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => {
              const Icon = valueIconMap[value.iconName] || FaThumbsUp;
              return (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white border border-brand-light rounded-2xl p-6 md:p-8 text-center hover:border-brand-accent -translate-y-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex items-center justify-center"><Icon className="text-brand-primary text-2xl" /></div>
                  <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs tracking-widest uppercase">{t.teamLabel}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t.teamTitle}</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {t.team.map((member, index) => {
              // Select image based on index since names change based on language
              const images = [teamAfzaal, teamIrfan, teamSultan];
              const alts = [
                lang === "ar" ? "أفعال - فني مكيفات رئيسي" : "Afzaal - Lead AC Technician at Technical Stars",
                lang === "ar" ? "إرفان - خبير سباكة وكهرباء" : "Irfan - Plumbing and Electrical Expert at Technical Stars",
                lang === "ar" ? "سلطان - أخصائي غسالات" : "Sultan - Washing Machine Specialist at Technical Stars"
              ];
              return (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="text-center">
                  <img src={images[index]} alt={alts[index]} loading="lazy" className="w-24 h-24 mx-auto rounded-full object-cover" />
                  <h3 className="mt-4 text-brand-primary text-base md:text-lg font-bold">{member.name}</h3>
                  <p className="mt-1 text-brand-accent text-sm font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default About;
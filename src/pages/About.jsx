import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaHandshake, FaThumbsUp, FaHeart } from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import aboutStory from "../assets/images/about-story.jpg";
import teamAfzaal from "../assets/images/team-afzaal.jpg";
import teamIrfan from "../assets/images/team-irfan.jpg";
import teamSultan from "../assets/images/team-sultan.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

const valueIconMap = { FaBolt, FaHandshake, FaThumbsUp, FaHeart };

const content = {
  home: "Home",
  aboutUs: "About Us",
  heroTitle: "About BM Cooling Centre",
  heroSub: "Lahore's trusted AC repair & electrical service experts",
  storyLabel: "Our Story",
  storyTitle: "Trusted AC & Electrical Services in Lahore",
  storyP1: "BM Cooling Centre was founded with a simple mission — to provide fast, honest, and high-quality AC repair and electrical services to families across Lahore. What started as a small AC repair operation in Gulshan-e-Ravi has grown into a trusted service provider relied upon by hundreds of households.",
  storyP2: "Today, our team of certified technicians handles everything from AC installation and gas refilling to duct cleaning, electrical wiring, and AC dismantlement. We take pride in our 1-2 hour response time, transparent pricing with quotes before work begins, and a written guarantee on every job.",
  happyClients: "Happy Clients",
  yearsExp: "Years Experience",
  servicesOffered: "Services Offered",
  valuesLabel: "Our Values",
  valuesTitle: "What Drives Us Every Day",
  teamLabel: "Our Team",
  teamTitle: "The Experts Behind BM Cooling Centre",
  values: [
    { iconName: "FaBolt", title: "Speed", desc: "We respond within 1-2 hours in Gulshan-e-Ravi and surrounding areas" },
    { iconName: "FaHandshake", title: "Honesty", desc: "Transparent pricing with a quote before any work starts" },
    { iconName: "FaThumbsUp", title: "5.0 Rated", desc: "Rated 5.0 stars on Google with 29 genuine customer reviews" },
    { iconName: "FaHeart", title: "Care", desc: "We treat every home and family with genuine respect" },
  ],
  team: [
    { name: "Afzaal", role: "Lead AC Technician", bio: "Specializing in split and inverter AC systems, gas refilling, and compressor fault diagnosis" },
    { name: "Irfan", role: "Electrical Expert", bio: "Certified professional with expertise in wiring, electrical panels, and fault diagnosis" },
    { name: "Sultan", role: "Maintenance & Dismantlement Specialist", bio: "Trained in preventive maintenance, duct cleaning, and safe AC dismantlement" },
  ],
};

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm" dir="ltr">
              <Link to="/" className="hover:underline">{content.home}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{content.aboutUs}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{content.heroTitle}</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light">{content.heroSub}</p>
            <div className="w-16 h-1 bg-[#F5A623] mx-auto mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={aboutStory} alt="BM Cooling Centre team" loading="lazy" className="w-full rounded-2xl object-cover max-h-[400px] ring-4 ring-[#F5A623] ring-offset-4 ring-offset-white" />
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{content.storyLabel}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{content.storyTitle}</h2>
            <div className="w-16 h-1 bg-[#F5A623] mt-3" />
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">{content.storyP1}</p>
            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">{content.storyP2}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border-e border-[#E6F1FB] pe-4 text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">2500+</span>
                <p className="text-xs text-gray-600 mt-1">{content.happyClients}</p>
              </div>
              <div className="border-e border-[#E6F1FB] pe-4 text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">5+</span>
                <p className="text-xs text-gray-600 mt-1">{content.yearsExp}</p>
              </div>
              <div className="text-center lg:text-start">
                <span className="text-2xl font-bold text-brand-cta">6</span>
                <p className="text-xs text-gray-600 mt-1">{content.servicesOffered}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs md:text-sm tracking-widest uppercase">{content.valuesLabel}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">{content.valuesTitle}</motion.h2>
            <div className="w-16 h-1 bg-[#F5A623] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.map((value, index) => {
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
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs tracking-widest uppercase">{content.teamLabel}</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{content.teamTitle}</motion.h2>
            <div className="w-16 h-1 bg-[#F5A623] mx-auto mt-3" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {content.team.map((member, index) => {
              const images = [teamAfzaal, teamIrfan, teamSultan];
              const alts = [
                "Afzaal - Lead AC Technician at BM Cooling Centre",
                "Irfan - Electrical Expert at BM Cooling Centre",
                "Sultan - Maintenance & Dismantlement Specialist at BM Cooling Centre",
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
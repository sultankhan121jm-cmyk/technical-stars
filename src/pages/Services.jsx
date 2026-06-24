import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import services from "../data/services";
import servicesBanner from "../assets/images/services-banner.jpg";

const areas = [
  "Gulshan-e-Ravi",
  "Garden Town",
  "Johar Town",
  "Model Town",
  "Ichhra",
  "Muslim Town",
  "Faisal Town",
  "Township",
  "Samnabad",
  "Shadman",
  "Iqbal Town",
  "Chauburji",
];

const Services = () => {
  return (
    <main className="pt-[66px] bg-brand-bg">
      {/* Hero Section - White */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-muted text-[13px]">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link> <span className="mx-2">›</span> <span className="text-brand-navy font-medium">Services</span>
          </motion.nav>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">Our Services</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-brand-muted max-w-2xl mx-auto">Professional AC repair and electrical services across Lahore — fast, reliable, and affordable.</motion.p>
          <div className="section-line mx-auto mt-4" />
          <div className="mt-10 max-w-5xl mx-auto w-full">
            <img src={servicesBanner} alt="BM Cooling Centre Services" loading="lazy" className="w-full h-auto rounded-2xl object-contain shadow-lg shadow-brand-navy/10" />
          </div>
        </div>
      </section>

      {/* Services Grid - Uses Main Background color so Light cards pop */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">Everything Your AC & Electrical Needs</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.id} iconName={s.iconName} shortDesc={s.shortDesc} slug={s.slug} index={i} />)}
          </div>
        </div>
      </section>

      {/* Areas Section - White background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="text-center">
            <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">Coverage</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-navy">Areas We Serve in Lahore</h2>
            <div className="section-line mx-auto mt-4" />
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-brand-light rounded-xl text-brand-navy text-[13px] font-medium text-center py-3 px-3 hover:bg-brand-blue hover:text-white transition-all duration-200 min-h-[44px] flex items-center justify-center">
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Services;
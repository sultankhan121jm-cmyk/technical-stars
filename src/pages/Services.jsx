import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import services from "../data/services";
import servicesBanner from "../assets/images/services-banner.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const districts = [
  "Al Olaya", "Al Malaz", "Al Yarmouk", "Al Yasmin", "Al Rawdah", "Al Murabba",
  "Al Sahafa", "Al Nakheel", "Al Wurud", "Al Sulaimaniyah", "Al Aqiq", "Al Shuhada",
];

const Services = () => {
  return (
    <main>
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">Services</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light max-w-2xl mx-auto">Professional home repair and maintenance across all Riyadh districts</p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
            
            {/* Banner Image Added Here */}
            <img 
              src={servicesBanner} 
              alt="Technical Stars home services in Riyadh" 
              loading="lazy" 
              className="mt-8 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[300px] md:max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" 
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center lg:text-left">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs tracking-widest uppercase">What We Offer</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">Everything Your Home Needs</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mt-3 mx-auto lg:mx-0" />
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto lg:mx-0">Technical Stars covers all major home repair and maintenance services in Riyadh</motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} iconName={service.iconName} title={service.title} shortDesc={service.shortDesc} slug={service.slug} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-brand-accent font-bold text-xs tracking-widest uppercase">Coverage</motion.span>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">We Cover All Riyadh Districts</motion.h2>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-3" />
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {districts.map((district, index) => (
              <motion.div key={district} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="bg-brand-light text-brand-primary text-xs md:text-sm font-medium text-center py-3 px-4 rounded-xl hover:bg-brand-primary hover:text-white transition-colors duration-200 cursor-default min-h-[44px] flex items-center justify-center">
                {district}
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
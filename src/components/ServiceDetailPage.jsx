import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhone, FaWhatsapp, FaCheckCircle, FaClock, FaShieldAlt, FaTools,
  FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt, FaWater,
  FaMapMarkerAlt, FaStar, FaTag
} from "react-icons/fa";
import CTABanner from "./CTABanner";
import services from "../data/services";
import { useLang } from "../contexts/LanguageContext";

// --- EXISTING IMAGE IMPORTS ---
import acRepairImg from "../assets/images/service-ac-repair.jpg";
import acInstallImg from "../assets/images/service-ac-installation.jpg";
import acCleanImg from "../assets/images/service-ac-cleaning.jpg";
import washingImg from "../assets/images/service-washing-machine.jpg";

// --- NEW IMAGE IMPORTS ---
import centralAcCleanImg from "../assets/images/central-ac-cleaning.jpg";
import windowAcCleanImg from "../assets/images/window-ac-cleaning.jpg";

// --- IMAGE MAP ---
const serviceImages = {
  'ac-repair': acRepairImg,
  'ac-installation': acInstallImg,
  'ac-cleaning': acCleanImg,
  'washing-machine': washingImg,
};

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

const serviceIconMap = { FaWrench, FaSnowflake, FaWind, FaTshirt, FaFaucet, FaBolt, FaWater };

// Helper to get localized content
const getLocalized = (content, lang) => {
  if (typeof content === 'string') return content;
  if (typeof content === 'object' && content !== null) {
    return content[lang] || content.en || '';
  }
  return content;
};

const ServiceDetailPage = ({ slug }) => {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-bold">
        Service not found for slug: {slug}
      </div>
    );
  }

  const Icon = serviceIconMap[service.iconName] || FaWrench;

  const fullDesc = getLocalized(service.fullDesc, lang);
  const features = getLocalized(service.features, lang);
  const safeFeatures = Array.isArray(features) ? features : [];

  const staticText = {
    home: isAr ? "الرئيسية" : "Home",
    services: isAr ? "الخدمات" : "Services",
    whatsIncluded: isAr ? "ما يتضمنه" : "What's Included",
    everythingCovered: isAr ? "كل ما يتضمنه هذه الخدمة" : "Everything covered in this service",
    brandsWeService: isAr ? "العلامات التجارية التي نخدمها" : "Brands We Service",
    compatibleBrands: isAr ? "العلامات التجارية المتوافقة" : "Compatible Brands",
    callNow: isAr ? "اتصل الآن واطلب خصم 30%" : "Call Now & Claim 30% OFF",
    whatsappUs: isAr ? "تواصل واتساب" : "WhatsApp Us",
    fastResponse: isAr ? "استجابة سريعة" : "Fast Response",
    fastResponseDesc: isAr ? "الفني عند بابك خلال 60 دقيقة" : "Technician at your door within 60 minutes",
    fullWarranty: isAr ? "ضمان كامل" : "Full Warranty",
    fullWarrantyDesc: isAr ? "ضمان مكتوب على جميع القطع وأجور العمالة" : "Written warranty on all parts and labor",
    expertTeam: isAr ? "فريق خبراء" : "Expert Team",
    expertTeamDesc: isAr ? "محترفون معتمدون بخبرة تزيد عن 10 سنوات" : "Certified professionals with 10+ years experience",
    ourWork: isAr ? "عملنا" : "Our Work",
    acCleanTitle: isAr ? "نظافة احترافية لكل أنواع المكيفات" : "Professional Cleaning for All AC Types",
    centralAcTitle: isAr ? "تنظيف المكيف المركزي" : "Central AC Cleaning",
    windowAcTitle: isAr ? "تنظيف مكيف النافذة" : "Window AC Cleaning",
    promoTitle: isAr ? "عرض خاص للعملاء الجدد" : "Exclusive First-Time Offer",
    promoDesc: isAr ? "احصل على خصم 30% على أول خدمة تنظيف!" : "Get 30% OFF your first AC cleaning service!",
    localProof: isAr ? "خدمة تنظيف المكيفات السريعة في شمال الرياض" : "Fast AC Cleaning Service in North Riyadh",
    topRated: isAr ? "تقييم 5 نجوم" : "5-Star Rated",
    trustExp: isAr ? "خبرة +10 سنوات" : "10+ Yrs Experience",
    trustSameDay: isAr ? "خدمة نفس اليوم" : "Same Day Service",
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="bg-brand-background overflow-x-hidden">

      {/* Section 1: The Stunning, High-Converting Hero */}
      <section className="bg-brand-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF9F27]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible" transition={{ duration: 0.6 }} className={isAr ? "lg:order-2" : ""}>
            <nav className="text-brand-accent text-xs md:text-sm opacity-80 mb-6" dir="ltr">
              <Link to="/" className="hover:underline">{staticText.home}</Link>
              <span className="mx-2">&gt;</span>
              <Link to="/services" className="hover:underline">{staticText.services}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60 capitalize">{slug.replace(/-/g, ' ')}</span>
            </nav>

            {slug === 'ac-cleaning' && (
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-[#EF9F27]/40 text-brand-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FaMapMarkerAlt className="text-[#EF9F27] text-base" />
                {staticText.localProof}
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#EF9F27] p-4 rounded-2xl flex-shrink-0">
                <Icon className="text-white text-3xl" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">{service.title}</h1>
            </div>

            <p className="text-base md:text-lg text-brand-light/90 leading-relaxed max-w-xl mb-8">{fullDesc}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <div className="flex text-[#EF9F27]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="font-bold text-sm">{staticText.topRated}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaShieldAlt className="text-[#EF9F27]" />
                <span className="font-medium text-sm">{staticText.trustExp}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaBolt className="text-[#EF9F27]" />
                <span className="font-medium text-sm">{staticText.trustSameDay}</span>
              </div>
            </div>

            {slug === 'ac-cleaning' && (
              <motion.div
                variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8 bg-gradient-to-r from-[#EF9F27] to-[#e08e15] rounded-2xl p-6 shadow-xl flex items-center gap-5"
              >
                <div className="bg-white/20 p-4 rounded-xl flex-shrink-0">
                  <FaTag className="text-white text-3xl" />
                </div>
                <div>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">{staticText.promoTitle}</p>
                  <p className="text-white text-xl md:text-2xl font-extrabold mt-1">{staticText.promoDesc}</p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+966556380709" className="group flex-1 min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-primary font-extrabold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-lg">
                <FaPhone className="group-hover:scale-110 transition-transform" /> {staticText.callNow}
              </a>
              <a href="https://wa.me/966556380709" target="_blank" rel="noopener noreferrer" className="flex-1 min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 text-lg">
                <FaWhatsapp className="text-xl" /> {staticText.whatsappUs}
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.2 }} className={`w-full relative ${isAr ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"}`}>
            <div className="relative">
              <img
                src={serviceImages[slug]}
                alt={`${service.title} service in Riyadh`}
                loading="lazy"
                className="w-full rounded-3xl object-cover h-[450px] md:h-[550px] shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent rounded-3xl"></div>

              {slug === 'ac-cleaning' && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: -12 }} transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                  className="absolute top-8 right-8 bg-red-600 text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white"
                >
                  <span className="text-3xl md:text-4xl font-extrabold leading-none">30%</span>
                  <span className="text-sm md:text-base font-bold uppercase tracking-wide mt-1">OFF</span>
                </motion.div>
              )}

              <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-gray-100">
                <div className="bg-green-100 p-3 rounded-xl">
                  <FaShieldAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-brand-primary font-bold text-sm">{staticText.fullWarranty}</p>
                  <p className="text-gray-500 text-xs">{staticText.fullWarrantyDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* REDESIGNED SECTION 2: What's Included & Brands (Dark vs Light Split) */}
      {/* ==================================================================== */}
      <section className="bg-brand-background py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Features (Left - 7 cols) */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{staticText.whatsIncluded}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-primary">{staticText.everythingCovered}</h2>
            <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 rounded-full mb-10" />

            <div className="grid sm:grid-cols-2 gap-5">
              {safeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-[#EF9F27] to-[#e08e15] p-3 rounded-xl flex-shrink-0 shadow-md">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <span className="text-brand-primary text-base font-semibold pt-1 leading-snug">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brands (Right - 5 cols) - Dark Premium Card */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
            <div className="bg-brand-primary rounded-3xl p-8 md:p-10 shadow-xl border border-[#EF9F27]/20 sticky top-8">
              <span className="text-[#EF9F27] font-bold text-xs tracking-widest uppercase">{staticText.brandsWeService}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">{staticText.compatibleBrands}</h2>
              <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 rounded-full mb-8" />

              <div className="grid grid-cols-2 gap-4">
                {(Array.isArray(service.brands) ? service.brands : []).map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 text-white text-sm font-bold py-4 px-4 rounded-xl text-center hover:bg-[#EF9F27] hover:text-brand-primary hover:border-transparent transition-all duration-300 flex items-center justify-center cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <FaShieldAlt className="text-[#EF9F27] text-3xl flex-shrink-0" />
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  {isAr ? "فنيون معتمدون لإصلاح وصيانة جميع الموديلات والعلامات التجارية." : "Certified technicians equipped to repair and maintain all models and brands."}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* ==================================================================== */}

      {/* AC Cleaning Image Gallery */}
      {slug === 'ac-cleaning' && (
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-8">
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{staticText.ourWork}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-primary">{staticText.acCleanTitle}</h2>
              <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              >
                <img
                  src={centralAcCleanImg}
                  alt="Central AC Cleaning Service"
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-lg">{staticText.centralAcTitle}</h3>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              >
                <img
                  src={windowAcCleanImg}
                  alt="Window AC Cleaning Service"
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-lg">{staticText.windowAcTitle}</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Why Choose Us */}
      <section className="bg-brand-primary py-20 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF9F27]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{isAr ? "لماذا نحن" : "Why Choose Us"}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">{isAr ? "نحن نلتزم بالتميز" : "Committed to Excellence"}</h2>
            <div className="w-16 h-1.5 bg-[#EF9F27] mt-4 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: FaClock, title: staticText.fastResponse, desc: staticText.fastResponseDesc },
              { icon: FaShieldAlt, title: staticText.fullWarranty, desc: staticText.fullWarrantyDesc },
              { icon: FaTools, title: staticText.expertTeam, desc: staticText.expertTeamDesc },
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="inline-block bg-[#EF9F27]/10 p-5 rounded-2xl mb-6">
                  <reason.icon className="text-[#EF9F27] text-3xl" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-brand-light/80 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServiceDetailPage;
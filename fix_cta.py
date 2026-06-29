const fs = require('fs');

const content = `import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";
import { trackEvent } from "../utils/trackEvent";

const CTABanner = () => {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const waLink = isAr
    ? "https://wa.me/966556380709?text=مرحباً%2C%20وجدتكم%20عبر%20الموقع%20الإلكتروني%20وأحتاج%20إلى%20خدمة%20تكييف"
    : "https://wa.me/966556380709?text=Hi%2C%20I%20found%20you%20on%20your%20website%20and%20need%20AC%20service";

  const handleCallClick = () => {
    trackEvent("call_button_click", {
      event_label: "CTA Banner - Call Now",
      page_location: window.location.pathname,
    });
  };

  const handleWAClick = () => {
    trackEvent("whatsapp_button_click", {
      event_label: "CTA Banner - WhatsApp",
      page_location: window.location.pathname,
    });
  };

  const text = {
    title: isAr ? "عرض محدود" : "Limited Offer",
    headline: isAr ? "استمتع بخصم 30% على خدمتك الأولى!" : "Enjoy 30% Off Your First Service!",
    subtitle: isAr
      ? "احجز اليوم وسيكون فنينا المعتمد عند بابك خلال 60 دقيقة. متاح 24/7 في جميع أحياء الرياض."
      : "Book today and our certified technician will be at your door within 60 minutes. Available 24/7 across Riyadh.",
    callNow: isAr ? "اتصل الآن" : "Call Now",
    whatsapp: isAr ? "واتساب" : "WhatsApp",
    tags: isAr
      ? ["بدون رسوم مخفية", "خدمة في نفس اليوم", "ضمان مكتوب"]
      : ["No Hidden Fees", "Same-Day Service", "Written Warranty"],
  };

  return (
    <section className="relative bg-[#EF9F27] py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0A1F3C]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#0A1F3C] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            {text.title}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A1F3C] leading-tight">
            {text.headline}
          </h2>
          <p className="mt-4 text-[#0A1F3C]/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            {text.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
            href="tel:+966556380709"
            onClick={handleCallClick}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#0A1F3C] text-white font-bold rounded-xl hover:bg-[#0d2847] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-black/20"
          >
            <FaPhone className="text-sm" />
            <span className="whitespace-nowrap">{text.callNow}</span>
          </a>
          
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWAClick}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-transparent border-2 border-[#0A1F3C] text-[#0A1F3C] font-bold rounded-xl hover:bg-[#0A1F3C] hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <FaWhatsapp className="text-base" />
            <span className="whitespace-nowrap">{text.whatsapp}</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#0A1F3C]/70 font-semibold"
        >
          {text.tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {tag}
              {i < text.tags.length - 1 && <span className="text-white">•</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;`;

fs.writeFileSync('src/components/CTABanner.jsx', content, 'utf8');
console.log('CTABanner done!');
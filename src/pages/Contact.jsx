import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext"; // ADDED
import contactBanner from "../assets/images/contact-banner.jpg";

/* ── Animation Variant ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ── Translations Dictionary ── */
const content = {
  en: {
    home: "Home", contact: "Contact Us",
    heroTitle: "Contact Us",
    heroDesc: "We are available 24/7 — reach us by phone, WhatsApp or the form below",
    touchLabel: "Get In Touch",
    touchTitle: "We'd Love to Hear From You",
    touchDesc: "Whether you have an emergency or just need a quote, our team is ready to help you across all Riyadh districts.",
    cards: [
      { icon: "FaPhone", title: "Call Us", value: "0556380709", link: "tel:+966556380709", linkColor: "text-brand-accent" },
      { icon: "FaWhatsapp", title: "WhatsApp", value: "Chat with us instantly", link: "https://wa.me/966556380709", linkColor: "text-[#25D366]" },
      { icon: "FaMapMarkerAlt", title: "Location", value: "24°49'06.1\"N 46°39'23.3\"E", link: "https://maps.google.com/?q=24.818361,46.656472", linkColor: "text-brand-accent" },
      { icon: "FaClock", title: "Working Hours", value: "Sat–Thu: 7AM–11PM | Fri: 2PM–11PM | Emergency: 24/7", link: null, linkColor: "" },
    ],
    formTitle: "Send Us a Message",
    formDesc: "We'll get back to you within 60 minutes",
    firstName: "First Name", lastName: "Last Name", phoneNumber: "Phone Number",
    serviceNeeded: "Service Needed", message: "Message",
    placeholders: { firstName: "Ahmed", lastName: "Al-Rashidi", phone: "+966 55 000 0000", message: "Describe your problem or request..." },
    selectService: "Select a service...",
    services: ["AC Repair", "AC Installation", "AC Cleaning", "Washing Machine Repair", "Plumbing", "Electricity", "Other"],
    send: "Send Message", sending: "Sending...",
    successTitle: "Message Sent Successfully!",
    successDesc: "Our team will contact you within 60 minutes. Thank you for choosing Technical Stars!",
    sendAnother: "Send Another Message",
    mapText: "📍 Technical Stars — Riyadh, Saudi Arabia",
    getDirections: "Get Directions",
    errors: {
      firstNameReq: "First name is required", firstNameMin: "Min 2 characters",
      lastNameReq: "Last name is required", lastNameMin: "Min 2 characters",
      phoneReq: "Phone number is required", phoneRegex: "Must start with +966 or 05 and be 10 digits",
      serviceReq: "Please select a service",
      messageReq: "Message is required", messageMin: "Please provide at least 10 characters",
    }
  },
  ar: {
    home: "الرئيسية", contact: "اتصل بنا",
    heroTitle: "اتصل بنا",
    heroDesc: "نحن متاحون على مدار الساعة — تواصل معنا عبر الهاتف أو واتساب أو النموذج أدناه",
    touchLabel: "تواصل معنا",
    touchTitle: "يسعدنا سماعك",
    touchDesc: "سواء كانت لديك حالة طوارئ أو ترغب فقط في الحصول على عرض سعر، فريقنا جاهز لمساعدتك في جميع أحياء الرياض.",
    cards: [
      { icon: "FaPhone", title: "اتصل بنا", value: "0556380709", link: "tel:+966556380709", linkColor: "text-brand-accent" },
      { icon: "FaWhatsapp", title: "واتساب", value: "تحدث معنا فوراً", link: "https://wa.me/966556380709", linkColor: "text-[#25D366]" },
      { icon: "FaMapMarkerAlt", title: "الموقع", value: "24°49'06.1\"N 46°39'23.3\"E", link: "https://maps.google.com/?q=24.818361,46.656472", linkColor: "text-brand-accent" },
      { icon: "FaClock", title: "ساعات العمل", value: "السبت–الخميس: 7ص–11م | الجمعة: 2م–11م | الطوارئ: 24/7", link: null, linkColor: "" },
    ],
    formTitle: "أرسل لنا رسالة",
    formDesc: "سنرد عليك خلال 60 دقيقة",
    firstName: "الاسم الأول", lastName: "اسم العائلة", phoneNumber: "رقم الهاتف",
    serviceNeeded: "الخدمة المطلوبة", message: "الرسالة",
    placeholders: { firstName: "أحمد", lastName: "الرشيدي", phone: "+966 55 000 0000", message: "صف مشكلتك أو طلبك..." },
    selectService: "اختر خدمة...",
    services: ["إصلاح مكيفات", "تركيب مكيفات", "تنظيف مكيفات", "إصلاح غسالات", "سباكة", "كهرباء", "أخرى"],
    send: "إرسال الرسالة", sending: "جارِ الإرسال...",
    successTitle: "تم إرسال الرسالة بنجاح!",
    successDesc: "سيتواصل فريقنا معك خلال 60 دقيقة. شكراً لاختيارك نجوم التقنية!",
    sendAnother: "إرسال رسالة أخرى",
    mapText: "📍 نجوم التقنية — الرياض، المملكة العربية السعودية",
    getDirections: "الحصول على الاتجاهات",
    errors: {
      firstNameReq: "الاسم الأول مطلوب", firstNameMin: "حرفان على الأقل",
      lastNameReq: "اسم العائلة مطلوب", lastNameMin: "حرفان على الأقل",
      phoneReq: "رقم الهاتف مطلوب", phoneRegex: "يجب أن يبدأ بـ +966 أو 05 ويكون مكون من 10 أرقام",
      serviceReq: "يرجى اختيار خدمة",
      messageReq: "الرسالة مطلوبة", messageMin: "يرجى كتابة 10 أحرف على الأقل",
    }
  }
};

const iconMap = { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock };

const Contact = () => {
  const { lang } = useLang(); // ADDED
  const isAr = lang === "ar";
  const t = content[lang];    // ADDED

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ── Validation Rules (Moved inside to access translations) ── */
  const firstNameRules = {
    required: t.errors.firstNameReq,
    minLength: { value: 2, message: t.errors.firstNameMin },
  };

  const lastNameRules = {
    required: t.errors.lastNameReq,
    minLength: { value: 2, message: t.errors.lastNameMin },
  };

  const phoneRules = {
    required: t.errors.phoneReq,
    pattern: {
      value: /^(\+966|05)\d{8}$/,
      message: t.errors.phoneRegex,
    },
  };

  const serviceRules = { required: t.errors.serviceReq };

  const messageRules = {
    required: t.errors.messageReq,
    minLength: { value: 10, message: t.errors.messageMin },
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Combine First and Last name for the backend
      const fullName = `${data.firstName} ${data.lastName}`;

      // Send data to the Render Backend API
      const response = await fetch('https://technical-stars.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          phone: data.phone,
          service: data.service,
          message: data.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* HERO BANNER */}
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm" dir="ltr">
              <Link to="/" className="hover:underline">{t.home}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{t.contact}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t.heroTitle}</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light max-w-2xl mx-auto">{t.heroDesc}</p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
            <img src={contactBanner} alt="Technical Stars team" loading="lazy" className="mt-8 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[300px] md:max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* LEFT COLUMN: INFO */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{t.touchLabel}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t.touchTitle}</h2>
              <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
              <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">{t.touchDesc}</p>
            </motion.div>

            <div className="mt-8 space-y-4">
              {t.cards.map((card, index) => {
                const Icon = iconMap[card.icon];
                return (
                  <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white border border-brand-light rounded-xl p-4 md:p-5 flex items-start gap-4 hover:border-brand-accent transition-colors duration-200">
                    <div className="w-12 h-12 min-w-[48px] bg-brand-light rounded-xl flex items-center justify-center text-brand-accent text-xl">
                      {Icon && <Icon />}
                    </div>
                    <div>
                      <h3 className="text-brand-primary text-sm font-bold">{card.title}</h3>
                      {card.link ? (
                        <a href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined} className={`text-sm mt-0.5 block min-h-[44px] flex items-center ${card.linkColor} hover:underline`} dir={card.title === "Call Us" || card.title === "واتصل بنا" || card.title === "Location" || card.title === "الموقع" ? "ltr" : ""}>
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm mt-0.5">{card.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3 bg-white border border-brand-light rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
            {!isSuccess ? (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-brand-primary">{t.formTitle}</h2>
                <p className="text-gray-500 text-sm mt-1">{t.formDesc}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">{t.firstName}</label>
                      <input type="text" placeholder={t.placeholders.firstName} className={inputClass(errors.firstName)} {...register("firstName", firstNameRules)} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">{t.lastName}</label>
                      <input type="text" placeholder={t.placeholders.lastName} className={inputClass(errors.lastName)} {...register("lastName", lastNameRules)} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t.phoneNumber}</label>
                    <input type="tel" placeholder={t.placeholders.phone} className={inputClass(errors.phone)} dir="ltr" {...register("phone", phoneRules)} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t.serviceNeeded}</label>
                    <select defaultValue="" className={`${inputClass(errors.service)} text-gray-600`} {...register("service", serviceRules)}>
                      <option value="" disabled>{t.selectService}</option>
                      {t.services.map((svc, i) => <option key={i} value={svc}>{svc}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t.message}</label>
                    <textarea rows={4} placeholder={t.placeholders.message} className={`${inputClass(errors.message)} resize-none md:rows-5`} {...register("message", messageRules)} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={isSubmitting} className="w-full min-h-[52px] bg-[#EF9F27] text-brand-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <><FaSpinner className="animate-spin text-lg" /> {t.sending}</>
                    ) : (
                      <>{t.send} <FaPaperPlane className="text-lg" /></>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-10 text-center">
                <FaCheckCircle className="text-[#25D366] text-5xl mx-auto" />
                <h2 className="mt-4 text-xl font-bold text-brand-primary">{t.successTitle}</h2>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">{t.successDesc}</p>
                <button onClick={handleReset} className="mt-6 px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-xl hover:bg-brand-accent hover:text-white transition-colors duration-200 min-h-[44px]">
                  {t.sendAnother}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-white">
        <div className="bg-brand-primary py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white text-sm md:text-base text-center sm:text-start">{t.mapText}</span>
          <a href="https://maps.google.com/?q=24.818361,46.656472" target="_blank" rel="noopener noreferrer" className="bg-[#EF9F27] text-brand-primary font-bold px-4 py-2 rounded-lg text-sm hover:brightness-110 transition-all min-h-[44px] flex items-center justify-center">
            {t.getDirections}
          </a>
        </div>

        {/* Updated Map Embed with new coordinates */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2000!2d46.656472!3d24.818361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1690000000000"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Technical Stars Location"
          className="w-full h-[300px] md:h-[450px]"
        />
      </section>

      <CTABanner />
    </main>
  );
};

export default Contact;
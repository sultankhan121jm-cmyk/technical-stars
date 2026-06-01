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
import { useLang } from "../contexts/LanguageContext";
import contactBanner from "../assets/images/contact-banner.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { t, lang } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const firstNameRules = {
    required: t("contact.validation.firstNameRequired"),
    minLength: { value: 2, message: t("contact.validation.min2") },
  };

  const lastNameRules = {
    required: t("contact.validation.lastNameRequired"),
    minLength: { value: 2, message: t("contact.validation.min2") },
  };

  const phoneRules = {
    required: t("contact.validation.phoneRequired"),
    pattern: {
      value: /^(\+966|05)\d{8}$/,
      message: t("contact.validation.phoneFormat"),
    },
  };

  const serviceRules = { required: t("contact.validation.serviceRequired") };

  const messageRules = {
    required: t("contact.validation.messageRequired"),
    minLength: { value: 10, message: t("contact.validation.min10") },
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
  };

  const contactCards = [
    { icon: FaPhone, title: t("contact.callUs"), value: "+966 55 189 5625", link: "tel:+966551895625", linkColor: "text-brand-accent" },
    { icon: FaWhatsapp, title: "WhatsApp", value: t("contact.whatsappChat"), link: "https://wa.me/966551895625", linkColor: "text-[#25D366]" },
    { icon: FaMapMarkerAlt, title: "Location", value: t("contact.location"), link: null, linkColor: "" },
    { icon: FaClock, title: "Working Hours", value: t("contact.workingHours"), link: null, linkColor: "" },
  ];

  const inputClass = (hasError) =>
    `w-full px-4 py-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 transition-colors ${
      hasError ? "border-red-400 focus:ring-red-200" : "border-brand-light focus:border-brand-accent focus:ring-[#378ADD]/20"
    }`;

  const serviceOpts = lang === "ar"
    ? [
        { value: "AC Repair", label: "إصلاح التكييف" },
        { value: "AC Installation", label: "تركيب التكييف" },
        { value: "AC Cleaning", label: "تنظيف التكييف" },
        { value: "Washing Machine Repair", label: "إصلاح الغسالة" },
        { value: "Plumbing", label: "السباكة" },
        { value: "Electricity", label: "الكهرباء" },
        { value: "Other", label: "أخرى" },
      ]
    : [
        { value: "AC Repair", label: "AC Repair" },
        { value: "AC Installation", label: "AC Installation" },
        { value: "AC Cleaning", label: "AC Cleaning" },
        { value: "Washing Machine Repair", label: "Washing Machine Repair" },
        { value: "Plumbing", label: "Plumbing" },
        { value: "Electricity", label: "Electricity" },
        { value: "Other", label: "Other" },
      ];

  return (
    <main>
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <nav className="text-brand-accent text-xs md:text-sm">
              <Link to="/" className="hover:underline">{t("contact.breadcrumbHome")}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{t("contact.breadcrumbCurrent")}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t("contact.title")}</h1>
            <p className="mt-3 text-sm md:text-base text-brand-light max-w-2xl mx-auto">{t("contact.subtitle")}</p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
            <img src={contactBanner} alt="Technical Stars team ready to serve in Riyadh" loading="lazy" className="mt-8 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[300px] md:max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" />
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">{t("contact.getInTouch")}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">{t("contact.contactTitle")}</h2>
              <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
              <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">{t("contact.contactSubtitle")}</p>
            </motion.div>

            <div className="mt-8 space-y-4">
              {contactCards.map((card, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white border border-brand-light rounded-xl p-4 md:p-5 flex items-start gap-4 hover:border-brand-accent transition-colors duration-200">
                  <div className="w-12 h-12 min-w-[48px] bg-brand-light rounded-xl flex items-center justify-center text-brand-accent text-xl"><card.icon /></div>
                  <div>
                    <h3 className="text-brand-primary text-sm font-bold">{card.title}</h3>
                    {card.link ? (
                      <a href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined} className={`text-sm mt-0.5 block min-h-[44px] flex items-center ${card.linkColor} hover:underline`}>{card.value}</a>
                    ) : (
                      <p className="text-gray-600 text-sm mt-0.5">{card.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3 bg-white border border-brand-light rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
            {!isSuccess ? (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-brand-primary">{t("contact.formTitle")}</h2>
                <p className="text-gray-500 text-sm mt-1">{t("contact.formSubtitle")}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">{t("contact.labels.firstName")}</label>
                      <input type="text" placeholder={t("contact.placeholders.firstName")} className={inputClass(errors.firstName)} {...register("firstName", firstNameRules)} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">{t("contact.labels.lastName")}</label>
                      <input type="text" placeholder={t("contact.placeholders.lastName")} className={inputClass(errors.lastName)} {...register("lastName", lastNameRules)} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t("contact.labels.phone")}</label>
                    <input type="tel" placeholder={t("contact.placeholders.phone")} className={inputClass(errors.phone)} {...register("phone", phoneRules)} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t("contact.labels.service")}</label>
                    <select defaultValue="" className={`${inputClass(errors.service)} text-gray-600`} {...register("service", serviceRules)}>
                      <option value="" disabled>{t("contact.placeholders.selectService")}</option>
                      {serviceOpts.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">{t("contact.labels.message")}</label>
                    <textarea rows={4} placeholder={t("contact.placeholders.message")} className={`${inputClass(errors.message)} resize-none md:rows-5`} {...register("message", messageRules)} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full min-h-[52px] bg-[#EF9F27] text-brand-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <><FaSpinner className="animate-spin text-lg" /> {t("contact.sending")}</>
                    ) : (
                      <><span>{t("contact.formTitle")}</span><FaPaperPlane className="text-lg" /></>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-10 text-center">
                <FaCheckCircle className="text-[#25D366] text-5xl mx-auto" />
                <h2 className="mt-4 text-xl font-bold text-brand-primary">{t("contact.successTitle")}</h2>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">{t("contact.successSubtitle")}</p>
                <button onClick={handleReset} className="mt-6 px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-xl hover:bg-brand-accent hover:text-white transition-colors duration-200 min-h-[44px]">{t("contact.sendAnother")}</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="bg-brand-primary py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white text-sm md:text-base text-center sm:text-left">
            {t("nav.topbarLocation")}
          </span>
          <a href="https://www.google.com/maps?q=24.688944,46.831528" target="_blank" rel="noopener noreferrer" className="bg-[#EF9F27] text-brand-primary font-bold px-4 py-2 rounded-lg text-sm hover:brightness-110 transition-all min-h-[44px] flex items-center justify-center">
            {t("contact.getDirections")}
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6!2d46.831528!3d24.688944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzIwLjIiTiA0NsKwNDknNTMuNSJF!5e0!3m2!1sen!2ssa!4v1234567890"
          width="100%"
          height="300"
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

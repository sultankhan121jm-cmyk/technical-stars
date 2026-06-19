import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import { useLang } from "../contexts/LanguageContext";
import contactBanner from "../assets/images/contact-banner.jpg";

const Contact = () => {
  const { t, lang } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // 1. Combine First Name and Last Name (Backend expects just "name")
      const fullName = `${data.firstName} ${data.lastName}`;

      // 2. Send data to your Express backend
      const response = await fetch('http://localhost:5000/api/contact', {
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

      // 3. If saved successfully, show green success screen
      if (result.success) {
        setIsSuccess(true);
        reset(); // Clears the form fields
      } else {
        // If validation fails (e.g., missing field), show error
        alert(result.message);
      }
    } catch (error) {
      // If backend is turned off or internet fails
      alert("Failed to send message. Is the backend server running?");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleReset = () => { reset(); setIsSuccess(false); };

  const rules = {
    firstName: { required: t("contact.validation.firstNameRequired"), minLength: { value: 2, message: t("contact.validation.min2") } },
    lastName: { required: t("contact.validation.lastNameRequired"), minLength: { value: 2, message: t("contact.validation.min2") } },
    phone: { required: t("contact.validation.phoneRequired"), pattern: { value: /^(\+966|05)\d{8}$/, message: t("contact.validation.phoneFormat") } },
    service: { required: t("contact.validation.serviceRequired") },
    message: { required: t("contact.validation.messageRequired"), minLength: { value: 10, message: t("contact.validation.min10") } },
  };

  const inputCls = (err) => `w-full px-4 py-3 border rounded-xl text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 transition-all ${err ? "border-red-300 focus:ring-red-100" : "border-gray-200 focus:border-brand-blue/40 focus:ring-brand-blue/10 placeholder:text-gray-400"}`;
  const opts = t("contact.serviceOptions");

  const cards = [
    { icon: FaPhone, title: t("contact.callUs"), value: "+966 55 189 5625", link: "tel:+966551895625", color: "text-brand-blue" },
    { icon: FaWhatsapp, title: t("contact.whatsapp"), value: t("contact.whatsappChat"), link: "https://wa.me/966551895625", color: "text-[#25D366]" },
    { icon: FaMapMarkerAlt, title: lang === "ar" ? "الموقع" : "Location", value: t("contact.location") },
    { icon: FaClock, title: lang === "ar" ? "ساعات العمل" : "Working Hours", value: t("contact.workingHours") },
  ];

  return (
    <main className="pt-[66px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 text-[13px]">
            <Link to="/" className="hover:text-brand-blue transition-colors">{t("about.breadcrumbHome")}</Link> <span className="mx-2">›</span> <span className="text-gray-600">{t("contact.breadcrumbCurrent")}</span>
          </motion.nav>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t("contact.title")}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-gray-500 max-w-2xl mx-auto">{t("contact.subtitle")}</motion.p>
          <div className="section-line mx-auto mt-4" />
          <img src={contactBanner} alt="Contact" loading="lazy" className="mt-10 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[280px] md:max-h-[360px] shadow-lg shadow-black/[0.06]" />
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-brand-blue text-[12px] font-semibold tracking-widest uppercase">{t("contact.getInTouch")}</span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">{t("contact.contactTitle")}</h2>
              <div className="section-line mt-3" />
              <p className="mt-4 text-gray-500">{t("contact.contactSubtitle")}</p>
            </motion.div>
            <div className="mt-8 space-y-3">
              {cards.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-xl p-4 flex items-start gap-4 border border-gray-100">
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/[0.06] flex items-center justify-center text-brand-blue text-lg"><c.icon /></div>
                  <div>
                    <h3 className="text-gray-900 text-sm font-medium">{c.title}</h3>
                    {c.link ? <a href={c.link} target={c.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`text-sm mt-0.5 block min-h-[44px] flex items-center ${c.color} hover:underline`}>{c.value}</a> : <p className="text-gray-500 text-sm mt-0.5">{c.value}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            {!isSuccess ? (
              <>
                <h2 className="text-xl font-bold text-gray-900">{t("contact.formTitle")}</h2>
                <p className="text-gray-400 text-sm mt-1">{t("contact.formSubtitle")}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">{t("contact.labels.firstName")}</label>
                      <input type="text" placeholder={t("contact.placeholders.firstName")} className={inputCls(errors.firstName)} {...register("firstName", rules.firstName)} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">{t("contact.labels.lastName")}</label>
                      <input type="text" placeholder={t("contact.placeholders.lastName")} className={inputCls(errors.lastName)} {...register("lastName", rules.lastName)} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">{t("contact.labels.phone")}</label>
                    <input type="tel" placeholder={t("contact.placeholders.phone")} className={inputCls(errors.phone)} {...register("phone", rules.phone)} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">{t("contact.labels.service")}</label>
                    <select defaultValue="" className={`${inputCls(errors.service)} text-gray-500`} {...register("service", rules.service)}>
                      <option value="" disabled>{t("contact.placeholders.selectService")}</option>
                      {Object.entries(opts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">{t("contact.labels.message")}</label>
                    <textarea rows={4} placeholder={t("contact.placeholders.message")} className={`${inputCls(errors.message)} resize-none`} {...register("message", rules.message)} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full min-h-[52px] btn-primary rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-60">
                    {isSubmitting ? <><FaSpinner className="animate-spin" /> {t("contact.sending")}</> : <>{lang === "ar" ? "إرسال الرسالة" : "Send Message"} <FaPaperPlane /></>}
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="py-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-50 flex items-center justify-center"><FaCheckCircle className="text-green-500 text-2xl" /></div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">{t("contact.successTitle")}</h2>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">{t("contact.successSubtitle")}</p>
                <button onClick={handleReset} className="mt-6 px-6 py-2.5 btn-outline rounded-lg min-h-[44px] text-sm">{t("contact.sendAnother")}</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-navy py-4 px-5 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-white/60 text-sm">📍 {lang === "ar" ? "نجوم التقنية — الرياض" : "Technical Stars — Riyadh, Saudi Arabia"}</span>
        <a href="https://www.google.com/maps?q=24.688944,46.831528" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-navy font-semibold px-5 py-2.5 rounded-lg text-sm min-h-[44px] flex items-center justify-center">{t("contact.getDirections")}</a>
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6!2d46.831528!3d24.688944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzIwLjIiTiA0NsKwNDknNTMuNSJF!5e0!3m2!1sen!2ssa!4v1234567890" width="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" className="w-full h-[280px] md:h-[400px]" />

      <CTABanner />
    </main>
  );
};

export default Contact;

import { useState, useEffect, useRef } from "react";
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
import API_URL from "../utils/api";
import contactBanner from "../assets/images/contact-banner.jpg";

/* ── Animation Variant ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ── Input Class Function ── */
const inputClass = (error) =>
  `w-full px-4 py-3 border rounded-xl text-sm outline-none transition-colors duration-200 bg-white ${error
    ? "border-red-500 focus:ring-2 focus:ring-red-200"
    : "border-gray-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
  }`;

/* ── Content ── */
const content = {
  home: "Home",
  contact: "Contact Us",
  heroTitle: "Contact Us",
  heroDesc: "We are available 24/7 for emergencies — reach us by phone, WhatsApp or the form below",
  touchLabel: "Get In Touch",
  touchTitle: "We'd Love to Hear From You",
  touchDesc: "Whether you have an emergency or just need a quote, our team is ready to help you across Gulshan-e-Ravi and surrounding Lahore areas.",
  cards: [
    { icon: "FaPhone", title: "Call Us", value: "0321 4875662", link: "tel:+923214875662", linkColor: "text-brand-accent" },
    { icon: "FaWhatsapp", title: "WhatsApp", value: "Chat with us instantly", link: "https://wa.me/923214875662", linkColor: "text-[#25D366]" },
    { icon: "FaMapMarkerAlt", title: "Location", value: "336 Gulshan Ravi, Block B, Lahore", link: "https://maps.app.goo.gl/c4rckdXGtGHxfodM8", linkColor: "text-brand-accent" },
    { icon: "FaClock", title: "Working Hours", value: "Mon–Sat: 9AM–12AM | Sun: 10AM–10PM | Emergency: 24/7", link: null, linkColor: "" },
  ],
  formTitle: "Send Us a Message",
  formDesc: "We'll get back to you within 1-2 hours",
  firstName: "First Name",
  lastName: "Last Name",
  phoneNumber: "Phone Number",
  serviceNeeded: "Service Needed",
  message: "Message",
  placeholders: {
    firstName: "Ali",
    lastName: "Ahmed",
    phone: "0321 XXXXXXX",
    message: "Describe your problem or request...",
  },
  selectService: "Select a service...",
  services: [
    "AC Repair",
    "AC Installation",
    "Preventive Maintenance",
    "Duct & Vent Cleaning",
    "Electrical Work",
    "AC Dismantlement",
    "Other",
  ],
  send: "Send Message",
  sending: "Sending...",
  successTitle: "Message Sent Successfully!",
  successDesc:
    "Our team will contact you within 1-2 hours. Thank you for choosing BM Cooling Centre!",
  sendAnother: "Send Another Message",
  mapText: "📍 BM Cooling Centre — 336 Gulshan Ravi, Block B, Lahore",
  getDirections: "Get Directions",
  errors: {
    firstNameReq: "First name is required",
    firstNameMin: "Min 2 characters",
    lastNameReq: "Last name is required",
    lastNameMin: "Min 2 characters",
    phoneReq: "Phone number is required",
    phoneRegex: "Enter a valid Pakistani number (e.g., 0321XXXXXXXX)",
    serviceReq: "Please select a service",
    messageReq: "Message is required",
    messageMin: "Please provide at least 10 characters",
  },
};

const iconMap = { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock };

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (isSuccess && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSuccess]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const firstNameRules = {
    required: content.errors.firstNameReq,
    minLength: { value: 2, message: content.errors.firstNameMin },
  };

  const lastNameRules = {
    required: content.errors.lastNameReq,
    minLength: { value: 2, message: content.errors.lastNameMin },
  };

  const phoneRules = {
    required: content.errors.phoneReq,
    pattern: {
      value: /^0\d{10}$/,
      message: content.errors.phoneRegex,
    },
  };

  const serviceRules = { required: content.errors.serviceReq };

  const messageRules = {
    required: content.errors.messageReq,
    minLength: { value: 10, message: content.errors.messageMin },
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const fullName = `${data.firstName} ${data.lastName}`;

      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone: data.phone,
          service: data.service,
          message: data.message,
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
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <nav className="text-brand-accent text-xs md:text-sm" dir="ltr">
              <Link to="/" className="hover:underline">
                {content.home}
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">{content.contact}</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {content.heroTitle}
            </h1>
            <p className="mt-3 text-sm md:text-base text-brand-light max-w-2xl mx-auto">
              {content.heroDesc}
            </p>
            <div className="w-16 h-1 bg-[#F5A623] mx-auto mt-4" />
            <img
              src={contactBanner}
              alt="BM Cooling Centre team"
              loading="lazy"
              className="mt-8 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[300px] md:max-h-[400px] ring-4 ring-[#F5A623] ring-offset-4 ring-offset-[#0F2F8A]"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* LEFT COLUMN: INFO */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                {content.touchLabel}
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">
                {content.touchTitle}
              </h2>
              <div className="w-16 h-1 bg-[#F5A623] mt-3" />
              <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
                {content.touchDesc}
              </p>
            </motion.div>

            <div className="mt-8 space-y-4">
              {content.cards.map((card, index) => {
                const Icon = iconMap[card.icon];
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border border-brand-light rounded-xl p-4 md:p-5 flex items-start gap-4 hover:border-brand-accent transition-colors duration-200"
                  >
                    <div className="w-12 h-12 min-w-[48px] bg-brand-light rounded-xl flex items-center justify-center text-brand-accent text-xl">
                      {Icon && <Icon />}
                    </div>
                    <div>
                      <h3 className="text-brand-primary text-sm font-bold">
                        {card.title}
                      </h3>
                      {card.link ? (
                        <a
                          href={card.link}
                          target={card.link.startsWith("http") ? "_blank" : undefined}
                          rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`text-sm mt-0.5 block min-h-[44px] flex items-center ${card.linkColor} hover:underline`}
                          dir={card.title === "Call Us" || card.title === "Location" ? "ltr" : ""}
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm mt-0.5">
                          {card.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white border border-brand-light rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            {!isSuccess ? (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
                  {content.formTitle}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{content.formDesc}</p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-5"
                >
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">
                        {content.firstName}
                      </label>
                      <input
                        type="text"
                        placeholder={content.placeholders.firstName}
                        className={inputClass(errors.firstName)}
                        {...register("firstName", firstNameRules)}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">
                        {content.lastName}
                      </label>
                      <input
                        type="text"
                        placeholder={content.placeholders.lastName}
                        className={inputClass(errors.lastName)}
                        {...register("lastName", lastNameRules)}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">
                      {content.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      placeholder={content.placeholders.phone}
                      className={inputClass(errors.phone)}
                      dir="ltr"
                      {...register("phone", phoneRules)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">
                      {content.serviceNeeded}
                    </label>
                    <select
                      defaultValue=""
                      className={`${inputClass(errors.service)} text-gray-600`}
                      {...register("service", serviceRules)}
                    >
                      <option value="" disabled>
                        {content.selectService}
                      </option>
                      {content.services.map((svc, i) => (
                        <option key={i} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">
                      {content.message}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={content.placeholders.message}
                      className={`${inputClass(errors.message)} resize-none md:rows-5`}
                      {...register("message", messageRules)}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[52px] bg-[#F5A623] text-brand-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />{" "}
                        {content.sending}
                      </>
                    ) : (
                      <>
                        {content.send} <FaPaperPlane className="text-lg" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                ref={successRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-10 text-center"
              >
                <FaCheckCircle className="text-[#25D366] text-5xl mx-auto" />
                <h2 className="mt-4 text-xl font-bold text-brand-primary">
                  {content.successTitle}
                </h2>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">
                  {content.successDesc}
                </p>
                <button
                  onClick={() => {
                    reset();
                    setIsSuccess(false);
                  }}
                  className="mt-6 px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-xl hover:bg-brand-accent hover:text-white transition-colors duration-200 min-h-[44px]"
                >
                  {content.sendAnother}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-white">
        <div className="bg-brand-primary py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white text-sm md:text-base text-center sm:text-start">
            {content.mapText}
          </span>
          <a
            href="https://maps.app.goo.gl/c4rckdXGtGHxfodM8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5A623] text-brand-primary font-bold px-4 py-2 rounded-lg text-sm hover:brightness-110 transition-all min-h-[44px] flex items-center justify-center"
          >
            {content.getDirections}
          </a>
        </div>

        <iframe
          src="https://maps.google.com/maps?q=BM+Cooling+Centre+336+Gulshan+Ravi+Block+B+Gulshan-e-Ravi+Lahore+54000+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BM Cooling Centre Location"
          className="w-full h-[300px] md:h-[450px]"
        />
      </section>

      <CTABanner />
    </main>
  );
};

export default Contact;
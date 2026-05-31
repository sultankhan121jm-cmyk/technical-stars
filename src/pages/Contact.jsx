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
import contactBanner from "../assets/images/contact-banner.jpg";

/* ── Animation Variant ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* ── React Hook Form Setup ── */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ── Validation Rules (Extracted to prevent parser errors) ── */
  const firstNameRules = {
    required: "First name is required",
    minLength: { value: 2, message: "Min 2 characters" },
  };

  const lastNameRules = {
    required: "Last name is required",
    minLength: { value: 2, message: "Min 2 characters" },
  };

  const phoneRules = {
    required: "Phone number is required",
    pattern: {
      value: /^(\+966|05)\d{8}$/,
      message: "Must start with +966 or 05 and be 10 digits",
    },
  };

  const serviceRules = { required: "Please select a service" };

  const messageRules = {
    required: "Message is required",
    minLength: { value: 10, message: "Please provide at least 10 characters" },
  };

  /* ── Form Submit Handler ── */
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  /* ── Reset to Form View ── */
  const handleReset = () => {
    reset();
    setIsSuccess(false);
  };

  /* ── Contact Info Data ── */
  const contactCards = [
    {
      icon: FaPhone,
      title: "Call Us",
      value: "+966 55 189 5625",
      link: "tel:+966551895625",
      linkColor: "text-brand-accent",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat with us instantly",
      link: "https://wa.me/966551895625",
      linkColor: "text-[#25D366]",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Riyadh, Saudi Arabia",
      link: null,
      linkColor: "",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      value: "Sat–Thu: 7AM–11PM | Fri: 2PM–11PM | Emergency: 24/7",
      link: null,
      linkColor: "",
    },
  ];

  /* ── Dynamic Input Styling ── */
  const inputClass = (hasError) =>
    `w-full px-4 py-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? "border-red-400 focus:ring-red-200"
        : "border-brand-light focus:border-brand-accent focus:ring-[#378ADD]/20"
    }`;

  return (
    <main>
      {/* ═══════════════════════════════════════════════
          SECTION 1: PAGE HERO BANNER
          ═══════════════════════════════════════════════ */}
      <section className="bg-brand-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <nav className="text-brand-accent text-xs md:text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/60">Contact Us</span>
            </nav>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-3 text-sm md:text-base text-brand-light max-w-2xl mx-auto">
              We are available 24/7 — reach us by phone, WhatsApp or the form below
            </p>
            <div className="w-16 h-1 bg-[#EF9F27] mx-auto mt-4" />
            
            {/* Banner Image */}
            <img 
              src={contactBanner} 
              alt="Technical Stars team ready to serve in Riyadh" 
              loading="lazy" 
              className="mt-8 max-w-4xl mx-auto w-full rounded-2xl object-cover max-h-[300px] md:max-h-[400px] ring-4 ring-[#EF9F27] ring-offset-4 ring-offset-[#0A1F3C]" 
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: CONTACT INFO + FORM
          ═══════════════════════════════════════════════ */}
      <section className="bg-brand-background py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* ── Left Column: Info Cards ── */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                Get In Touch
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-primary">
                We&apos;d Love to Hear From You
              </h2>
              <div className="w-16 h-1 bg-[#EF9F27] mt-3" />
              <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
                Whether you have an emergency or just need a quote, our team is ready to help you across all Riyadh districts.
              </p>
            </motion.div>

            <div className="mt-8 space-y-4">
              {contactCards.map((card, index) => (
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
                    <card.icon />
                  </div>
                  <div>
                    <h3 className="text-brand-primary text-sm font-bold">{card.title}</h3>
                    {card.link ? (
                      <a
                        href={card.link}
                        target={card.link.startsWith("http") ? "_blank" : undefined}
                        rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-sm mt-0.5 block min-h-[44px] flex items-center ${card.linkColor} hover:underline`}
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm mt-0.5">{card.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Form ── */}
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
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  We&apos;ll get back to you within 60 minutes
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">First Name</label>
                      <input
                        type="text"
                        placeholder="Ahmed"
                        className={inputClass(errors.firstName)}
                        {...register("firstName", firstNameRules)}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-brand-primary text-sm font-medium mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Al-Rashidi"
                        className={inputClass(errors.lastName)}
                        {...register("lastName", lastNameRules)}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+966 55 000 0000"
                      className={inputClass(errors.phone)}
                      {...register("phone", phoneRules)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">Service Needed</label>
                    <select
                      defaultValue=""
                      className={`${inputClass(errors.service)} text-gray-600`}
                      {...register("service", serviceRules)}
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="AC Repair">AC Repair</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Cleaning">AC Cleaning</option>
                      <option value="Washing Machine Repair">Washing Machine Repair</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Electricity">Electricity</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-brand-primary text-sm font-medium mb-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your problem or request..."
                      className={`${inputClass(errors.message)} resize-none md:rows-5`}
                      {...register("message", messageRules)}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[52px] bg-[#EF9F27] text-brand-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-lg" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* ── Success State UI ── */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-10 text-center"
              >
                <FaCheckCircle className="text-[#25D366] text-5xl mx-auto" />
                <h2 className="mt-4 text-xl font-bold text-brand-primary">
                  Message Sent Successfully!
                </h2>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">
                  Our team will contact you within 60 minutes. Thank you for choosing Technical Stars!
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-xl hover:bg-brand-accent hover:text-white transition-colors duration-200 min-h-[44px]"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: GOOGLE MAPS
          ═══════════════════════════════════════════════ */}
      <section className="bg-white">
        {/* Map Overlay Bar */}
        <div className="bg-brand-primary py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white text-sm md:text-base text-center sm:text-left">
            📍 Technical Stars — Riyadh, Saudi Arabia
          </span>
          <a
            href="https://www.google.com/maps?q=24.688944,46.831528"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EF9F27] text-brand-primary font-bold px-4 py-2 rounded-lg text-sm hover:brightness-110 transition-all min-h-[44px] flex items-center justify-center"
          >
            Get Directions
          </a>
        </div>

        {/* Map Embed */}
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

      {/* ═══════════════════════════════════════════════
          SECTION 4: CTA BANNER
          ═══════════════════════════════════════════════ */}
      <CTABanner />
    </main>
  );
};

export default Contact;
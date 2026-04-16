import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECRET_TOKEN = "FARMCULT";
const ALLOWED_ORIGIN = "https://farmcult.vercel.app/"; // UPDATE THIS BEFORE PRODUCTION
const PREV_SUBMIT_KEY = "_fc_last_contact";
const COOLDOWN_MS = 60000;

const utf8ToBase64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)));
};

const ContactSection = () => {
  const [formLoadTime, setFormLoadTime] = useState(0);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.firstName?.trim() || !data.lastName?.trim() || !data.phone?.trim()) {
      setErrorMsg("First Name, Last Name, and Phone Number are mandatory.");
      setTimeout(() => setErrorMsg(null), 3000);
      return;
    }

    const silentlyDrop = () => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMsg("Message sent successfully! We will get back to you soon.");
        e.target.reset();
        setTimeout(() => setSuccessMsg(null), 4000);
      }, 1500);
    };

    const lastSubmit = localStorage.getItem(PREV_SUBMIT_KEY);
    if (lastSubmit && (Date.now() - parseInt(lastSubmit, 10)) < COOLDOWN_MS) {
      return silentlyDrop();
    }

    const payload = {
      firstName: (data.firstName || "").toString().trim().substring(0, 100).replace(/[<>]/g, ""),
      lastName: (data.lastName || "").toString().trim().substring(0, 100).replace(/[<>]/g, ""),
      email: (data.email || "").toString().trim().substring(0, 150).replace(/[<>]/g, ""),
      phone: (data.phone || "").toString().trim().substring(0, 20).replace(/[<>]/g, ""),
      service: (data.service || "").toString().trim().substring(0, 100).replace(/[<>]/g, ""),
      message: (data.message || "").toString().trim().substring(0, 1000).replace(/[<>]/g, ""),
      website_url: (data.website_url || "").toString(),
      duration: Math.max(0, Date.now() - formLoadTime)
    };

    if (payload.website_url || payload.duration < 1500) {
      return silentlyDrop();
    }

    const signatureString = `${payload.firstName}|${payload.lastName}|${payload.email}|${payload.phone}|${payload.service}|${payload.website_url}|${payload.duration}|${SECRET_TOKEN}`;
    const signature = utf8ToBase64(signatureString);

    const requestData = {
      token: SECRET_TOKEN,
      signature: signature,
      origin: ALLOWED_ORIGIN,
      payload: payload
    };

    try {
      setIsSubmitting(true);
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzRhD1hCyyCc5CoY_PVuRpOdfcaQ0amIh1FAUpzMiGMmYc3c5WPxCpw2PjpCpoMMt2y/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await res.json();
      console.log("Response:", result);

      localStorage.setItem(PREV_SUBMIT_KEY, Date.now().toString());
      setSuccessMsg("Message sent successfully! We will get back to you soon.");
      e.target.reset();
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send message. Please try again later.");
      setTimeout(() => setErrorMsg(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const options = [
    { value: "Turnkey Model", label: "Turnkey Model" },
    { value: "Passive Model", label: "Passive Model" },
    { value: "Education & Trainings", label: "Education & Trainings" },
    { value: "Become our Vendor", label: "Become our Vendor" },
  ];

  return (
    <>
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ y: -50, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: -50, opacity: 0, x: "-50%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-[100px] left-1/2 z-[1000] bg-red-600 text-white px-8 py-4 rounded-xl shadow-2xl font-medium text-center min-w-[300px]"
          >
            {errorMsg}
          </motion.div>
        )}
        {successMsg && (
          <motion.div
            initial={{ y: -50, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: -50, opacity: 0, x: "-50%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-[100px] left-1/2 z-[1000] bg-[#8DC83A] text-white px-8 py-4 rounded-xl shadow-2xl font-medium text-center min-w-[300px]"
          >
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="contact"
        className="contact-section relative min-h-[85vh] flex items-center py-20 lg:py-32 px-[5%] overflow-hidden bg-black"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: 'url("/Shared/contactFromimg2.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent lg:to-black/10" />

        <div className="container relative z-10 mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
            {/* Left Side: Info */}
            <div className="lg:w-1/2 text-white flex flex-col justify-between py-2">
              <div>
                <h2 className="text-[40px] font-normal font-outfit mb-8 leading-[28px] tracking-tight">
                  Build a Farm with Us
                </h2>
                <p className="text-[16px] text-white mt-16 mb-12 leading-[32px] font-inter">
                  We work closely with landowners and investors to build
                  sustainable <br /> hydroponics farms. From planning to
                  operations, our team supports you <br /> at every stage.
                </p>
              </div>

              {/* Location & Contact Info: Aligned to Bottom of Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                <div className="info-group">
                  <span className="block text-[24px] font-medium mb-8">
                    Location
                  </span>
                  <p className="text-[16px] leading-[28px] opacity-100 max-w-[80%]">
                    Farmcult Agritech Pvt Ltd <br /> Plot no 181, 32 Industrial
                    Area Phase 1 Chandigarh,(160002)
                  </p>
                </div>
                <div className="info-group">
                  <span className="block text-[24px] font-medium mb-8">
                    Contact
                  </span>
                  <p className="text-[16px] leading-[28px] opacity-100">
                    farmcult.company@gmail.com
                    <br />
                    +91 9041104230
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="lg:w-[45%] w-full h-full">
              <div className="bg-white rounded-[12px] p-8 lg:p-12 shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#1A1A1A] mb-10">
                  Send us a message
                </h3>

                <form
                  className="flex flex-col gap-8"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    type="text"
                    name="website_url"
                    tabIndex="-1"
                    autoComplete="off"
                    className="absolute opacity-0 -z-10 w-0 h-0 pointer-events-none"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    <div className="form-group flex flex-col gap-2 group">
                      <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                      />
                    </div>
                    <div className="form-group flex flex-col gap-2 group">
                      <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black placeholder:text-[#1A1A1A]/30"
                      />
                    </div>

                    <div className="form-group flex flex-col gap-2 group">
                      <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder=" "
                        className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                      />
                    </div>
                    <div className="form-group flex flex-col gap-2 group">
                      <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                      />
                    </div>
                  </div>

                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      Service
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                    >
                      <option value="" disabled hidden>
                        Select an option
                      </option>
                      {options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="text-[#1A1A1A]/60"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Write your message.."
                      className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black resize-none min-h-[50px] placeholder:text-[#1A1A1A]/50"
                      rows={1}
                    />
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

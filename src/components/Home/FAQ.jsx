import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "Do I need prior knowledge?",
      answer: "Not at all—just bring your curiosity, we'll handle the rest!"
    },
    {
      question: "Is the training practical or theoretical?",
      answer: "Hands-on all the way—learn by doing, not just listening."
    },
    {
      question: "Can I start my own setup after training?",
      answer: "Yes! Walk in as a learner, walk out ready to grow your own farm."
    },
    {
      question: "What makes Farmcult's training different?",
      answer: "Real farms, real skills, real results—that’s the Farmcult edge."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useGSAP(() => {
    gsap.fromTo('.faq-header',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    gsap.fromTo('.faq-item',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.faq-list', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="faq-section w-full px-[5%] py-16 lg:py-24 bg-[#FAFAFA]" ref={sectionRef}>
      <div className="w-full mx-auto">
        <h2 className="faq-header text-[32px] md:text-[36px] font-semibold text-text-primary mb-10 text-left">
          Frequently Asked Questions
        </h2>

        <div className="faq-list flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-item bg-white rounded-[12px] p-6 lg:px-8 lg:py-7 cursor-pointer border border-[#EBEBEB] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center gap-6">
                  <h3 className="text-base md:text-[17px] font-semibold text-text-primary">
                    {faq.question}
                  </h3>
                  <div className="shrink-0 text-[#B0B0B0] flex items-center justify-center w-6 h-6">
                    <span
                      className={`text-[28px] font-light leading-none inline-block origin-center transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#D0D0D0]' : ''}`}
                    >
                      +
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#555555] text-[15px] leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

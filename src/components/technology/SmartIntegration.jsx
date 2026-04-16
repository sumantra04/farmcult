import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Updated data to use JSX for strict <br /> placement: 2-line titles and 3-line descriptions
const benefitsData = [
  {
    title: <>Water<br />Efficient</>,
    description: <>Uses significantly<br />less water through<br />controlled growing systems.</>,
  },
  {
    title: <>Reduced<br />Pesticide Use</>,
    description: <>Cleaner cultivation<br />methods with lower<br />chemical dependency.</>,
  },
  {
    title: <>Consistent<br />Production</>,
    description: <>Structured systems<br />designed for stable,<br />repeatable crop cycles.</>,
  },
  {
    title: <>Automated<br />Efficiency</>,
    description: <>Reduce manual dependency,<br />and improve operational<br />efficiency and reliability.</>,
  },
];

const SmartIntegration = () => {
  useGSAP(() => {
    // Background Image Animation (Fade in + subtle zoom out)
    gsap.from('.si-bg-image', {
      scrollTrigger: {
        trigger: '.smart-integration-section',
        start: 'top 80%',
      },
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    gsap.from('.si-heading, .si-desc', {
      scrollTrigger: {
        trigger: '.smart-integration-section',
        start: 'top 75%',
      },
      y: 30,
      delay: 0.2,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    gsap.from('.benefit-card', {
      scrollTrigger: {
        trigger: '.si-cards-grid',
        start: 'top 65%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'expo.out',
    });
  });

  return (
    <section className="smart-integration-section flex flex-col justify-center pt-16 pb-16 md:pt-24 md:pb-16 bg-white text-black">
      {/* Background Image */}

      <div className="relative z-10 mx-auto px-[5%] w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 px-4 md:px-0">
          <h2 className="si-heading text-[28px] leading-[38px] md:text-[32px] md:leading-[48px] font-medium mb-4 md:mb-5">
            Deliver Impact With Smart Integration
          </h2>
          <p className="si-desc text-[14px] leading-[24px] md:text-[14px] md:leading-[29px] mx-auto max-w-[90%] md:max-w-[800px]">
            Integrated systems translate into measurable gains in water efficiency, crop stability, and operational performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="si-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 lg:gap-y-0 lg:grid-cols-4 text-left max-w-[1600px] mx-auto w-full">
          {benefitsData.map((benefit, index) => {
            const isLast = index === benefitsData.length - 1;
            
            return (
              <div
                key={index}
                // Added overflow-hidden to prevent bleeding
                className={`benefit-card flex gap-4 lg:gap-6 px-6 lg:px-8 py-2 relative lg:border-l lg:border-[#181818] overflow-hidden $}`}
              >
                <div className="w-full">
                  {/* Kept whitespace-nowrap and clamp() for fluid sizing */}
                  <h3 className="text-[20px] leading-[30px] md:text-[24px] lg:text-[clamp(16px,1.5vw,24px)] xl:text-[24px] md:leading-[32px] font-medium pb-4 lg:pb-12 whitespace-nowrap">
                    {benefit.title}
                  </h3>
                  {/* Kept whitespace-nowrap and clamp() for fluid sizing */}
                  <p className="text-[14px] leading-[24px] md:text-[15px] lg:text-[clamp(11px,1.1vw,15px)] xl:text-[15px] md:leading-[29px] font-light md:max-w-[80%] whitespace-nowrap">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SmartIntegration;

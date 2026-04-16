import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechCards = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.tech-feature-card',
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#EFEEEE] px-5 py-12 lg:px-24 lg:py-24">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Card 1 */}
        {/* Added overflow-hidden */}
        <div className="tech-feature-card bg-white rounded-2xl p-6 md:p-12 flex flex-col justify-between overflow-hidden">
          <div className="w-full">
            {/* Added whitespace-nowrap and clamp() for fluid sizing */}
            <h3 className="text-[22px] sm:text-[28px] lg:text-[20px] leading-[38px] md:leading-[32px] font-medium text-[#000000] mb-4 md:mb-5 whitespace-nowrap">
              24/7 Cloud-Based Monitoring
            </h3>
            {/* Added whitespace-nowrap, <br />, and clamp() */}
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[15px] leading-[24px] md:leading-[29px] text-[#333333] mb-8 md:mb-10 lg:pr-8 whitespace-wrap">
              Continuous cloud syncing provides real-time visibility<br />
              and remote access to farm performance data.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-auto">
            <img 
              src="/technology/card01.jpg" 
              alt="Cloud Monitoring" 
              className="w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[250px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Card 2 */}
        {/* Added overflow-hidden */}
        <div className="tech-feature-card bg-white rounded-2xl p-6 md:p-12 flex flex-col justify-between overflow-hidden">
          <div className="w-full">
            {/* Added whitespace-nowrap and clamp() for fluid sizing */}
            <h3 className="text-[22px] sm:text-[28px] lg:text-[20px] leading-[38px] md:leading-[32px] font-medium text-[#000000] mb-4 md:mb-5 whitespace-nowrap">
              Automated Fertigation
            </h3>
            {/* Added whitespace-nowrap, <br />, and clamp() */}
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[15px] leading-[24px] md:leading-[29px] text-[#333333] mb-8 md:mb-10 lg:pr-8 whitespace-wrap">
              Precision-controlled nutrient dosing ensures balanced growth,<br />
              efficient resource use, and consistent crop outcomes.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-auto">
            <img 
              src="/technology/card2.jpg" 
              alt="Automated Fertigation" 
              className="w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[250px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCards;

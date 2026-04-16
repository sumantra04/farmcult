import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmartTechnology = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Title, Desc, and Link Animations
    gsap.fromTo('.smart-tech-title, .smart-tech-desc, .smart-tech-link',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
      }
    );

    // Main Card Animation
    gsap.fromTo('.smart-tech-card',
      { x: 50, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: 0, autoAlpha: 1, duration: 1.2, ease: 'power2.out'
      }
    );

    // Feature Overlay Animations
    gsap.fromTo('.smart-tech-feature',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.smart-tech-card', start: 'top 60%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5
      }
    );
  }, { scope: sectionRef });

  const features = [
    {
      icon: '/Home/icons/icon4.png',
      text: 'IoT-enabled farm monitoring',
    },
    {
      icon: '/Home/icons/icon5.png',
      text: 'Custom farm solutions',
    },
    {
      icon: '/Home/icons/icon6.png',
      text: 'Data-driven decision making',
    },
  ];

  return (
    <section className="smart-tech-section flex flex-col lg:flex-row bg-white px-[16px] md:px-[5%] pt-[40px] md:py-[80px] lg:py-[100px] min-h-[70vh] gap-[32px] md:gap-12 lg:gap-[5%] items-center" ref={sectionRef}>

      {/* Left Content */}
      <div className="smart-tech-left w-full lg:w-[40%] lg:max-w-[450px] text-left lg:mr-4">
        <h2 className="smart-tech-title font-inter text-[32px] md:text-[32px] font-medium md:font-[500] leading-[48px] md:leading-[48px] text-text-primary mb-[24px] md:mb-8 m-0 w-full tracking-normal">
          Built on Smart <br className="hidden sm:block" /> Technology
        </h2>
        <p className="smart-tech-desc font-inter text-[15px] md:text-[15px] font-normal leading-[29px] md:leading-[29px] text-text-secondary mb-[24px] md:mb-10 w-full m-0">
          Smart systems run quietly in the background to keep farms operating smoothly. Technology helps reduce effort, improve consistency, and support better outcomes.
        </p>

        <div className="smart-tech-link-container md:mt-[74px]">
          <Link to="/technology" className="smart-tech-link font-inter font-normal md:font-normal text-[16px] md:text-[16px] leading-[1.5] md:leading-normal text-text-primary underline md:no-underline md:relative inline-block md:pb-[4px] md:after:content-[''] md:after:absolute md:after:w-full md:after:scale-x-0 md:after:h-[1px] md:after:bottom-0 md:after:left-0 md:after:bg-text-primary md:after:origin-bottom-right md:after:transition-transform md:after:duration-[350ms] md:after:ease-out md:hover:after:scale-x-100 md:hover:after:origin-bottom-left m-0">
            Learn more about how we use technology <span className="inline-block ml-1">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Right Image Card */}
      <div className="smart-tech-right w-full lg:w-[60%] flex justify-center lg:justify-end mt-[16px] md:mt-0">
        <div className="smart-tech-card relative w-[370px] md:w-full max-w-none md:max-w-[704px] h-[218px] md:h-[327px] md:aspect-[16/7.5] rounded-[16px] md:rounded-2xl overflow-hidden shadow-none md:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group mx-auto lg:mx-0">
          {/* Background Image */}
          <img
            src="/Home/BuiltOnSmartTechnology.jpg"
            alt="Farm Technology"
            className="w-full h-full object-cover"
          />

          {/* Intense Black Overlay for better icon/text contrast (Hover effect removed) */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Features Overlay */}
          <div className="absolute inset-0 flex flex-row justify-between md:justify-center items-center gap-[10px] md:gap-8 lg:gap-16 px-[16px] md:px-8 py-0 md:py-10">
            {features.map((feature, index) => (
              <div key={index} className="smart-tech-feature flex flex-col items-center justify-start text-center gap-[12px] md:gap-4 w-[85px] md:w-auto md:max-w-[180px]">
                <div className="feature-icon-wrapper w-[25px] h-[25px] md:w-16 md:h-16 flex items-center justify-center transition-all duration-300">
                  <img src={feature.icon} alt={feature.text} className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                <p className="feature-text font-inter text-white text-[14px] md:text-[18px] font-bold leading-[20px] md:leading-[29px] drop-shadow-md m-0 w-full">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SmartTechnology;

import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container relative w-full h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center will-change-transform"
        >
          <source src="/Home/farmcult_hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="hero-text-wrapper relative z-20 w-full md:max-w-[1280px] px-4 md:px-[64px] flex justify-center mx-auto pt-[80px]">
        {/* Inner Content */}
        <div className="hero-text-content flex flex-col items-center gap-[24px] w-full max-w-[900px] mx-auto text-center">

          <h1 className="hero-title font-inter text-[36px] sm:text-[48px] md:text-[64px] font-medium leading-[1.1] text-white tracking-normal w-full m-0 drop-shadow-md">
            Turn Your Idle Land Into An Income Generating Asset
          </h1>

          <p className="hero-subtitle font-inter text-[16px] md:text-[20px] leading-[1.5] text-white/90 font-normal m-0 tracking-normal drop-shadow max-w-[668px]">
            Climate-smart, data-led farming models built for long-term growth.
          </p>

          {/* Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.lenis?.scrollTo('#contact');
            }}
            className="btn-filled group flex items-center justify-center mt-2 w-[140px] h-[48px] bg-white text-black border-none rounded-[40px] font-inter font-medium text-[16px] cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 hover:scale-105 m-0 p-0 shadow-lg"
          >
            <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
              <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
              <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

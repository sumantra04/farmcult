import React from 'react';

const About = () => {
  return (
    <section className="about-container w-full max-w-[1600px] mx-auto pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-[5%] flex flex-col" id="why">

      {/* Header Section */}
      <div className="about-header flex flex-col md:flex-row md:justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
        <div className="about-header-text w-full md:max-w-[700px]">
          <h2 className="section-title font-inter font-medium text-[24px] leading-[32px] tracking-normal text-[#343434] md:text-[32px] md:leading-[48px] md:tracking-[-0.02em] md:text-text-primary mb-3 md:mb-4">
            Cultivating For Tomorrow
          </h2>
          <p className="section-subtitle text-[15px] text-text-secondary leading-[29px] md:leading-[29px]">
            Farmcult uses technology to build farming systems that are easy to manage, sustainable, and designed to grow over time.
          </p>
        </div>

        {/* Animated Underline Link */}
        <div className="about-header-link mt-2 md:mt-0">
          <a href="/why-farmcult" className="btn-text-link group font-medium text-[16px] text-text-primary relative inline-block pb-[2px] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-text-primary after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            Learn more about Farmcult &rarr;
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content-wrapper relative w-full h-[388px] md:h-[75vh] md:min-h-[500px] rounded-[16px] md:rounded-2xl mb-8 md:mb-0 overflow-hidden shadow-lg md:shadow-none">

        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/Shared/contactFromimg.jpg"
            alt="Farmcult Greenhouse Facility"
            className="about-img w-full h-full object-cover"
          />
        </div>

        {/* Features Panel Overlay */}
        <div className="about-features-panel absolute z-10 top-[21px] right-[17px] bottom-[26px] left-[18px] sm:top-6 sm:bottom-6 sm:left-8 sm:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-8 lg:right-12 md:left-auto md:w-[413px] md:h-[447px] md:max-w-none bg-white/85 md:bg-bg-color backdrop-blur-md md:backdrop-blur-none rounded-[16px] md:rounded-[16px] px-[20px] md:pl-[37px] md:pr-4 py-[20px] md:py-[52px] flex flex-col justify-between shadow-xl md:shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/50 md:border-none">

          <div className="feature-item flex flex-col items-start w-[100%] max-w-[329px] md:max-w-none md:w-[367px] md:h-[81px]">
            <div className="feature-icon flex items-center justify-start h-[24px] md:h-[25px] mb-[1px] md:mb-0">
              <img src="/Shared/icons/icon1.svg" alt="Technology-led" className="h-full w-auto object-contain" />
            </div>
            <h3 className="feature-title text-[18px] md:text-[18px] font-semibold md:font-bold font-inter text-text-primary h-[36px] leading-[36px] m-0">
              Technology-led
            </h3>
            <p className="feature-desc md:font-normal text-[13px] md:text-[12px] text-text-secondary h-[20px] leading-[20px] m-0 whitespace-nowrap md:whitespace-normal overflow-hidden overflow-ellipsis w-full">
              Automation, monitoring, and data-based decisions
            </p>
          </div>

          <div className="feature-item flex flex-col items-start w-[100%] max-w-[329px] md:max-w-none md:w-[367px] md:h-[81px]">
            <div className="feature-icon flex items-center justify-start h-[24px] md:h-[25px] mb-[1px] md:mb-0">
              <img src="/Shared/icons/icon2.svg" alt="Sustainable" className="h-full w-auto object-contain" />
            </div>
            <h3 className="feature-title text-[18px] md:text-[18px] font-semibold md:font-bold font-inter text-text-primary h-[36px] leading-[36px] m-0">
              Sustainable
            </h3>
            <p className="feature-desc md:font-normal text-[13px] md:text-[12px] text-text-secondary h-[20px] leading-[20px] m-0 whitespace-nowrap md:whitespace-normal overflow-hidden overflow-ellipsis w-full">
              Less water. No pesticides. Cleaner farming.
            </p>
          </div>

          <div className="feature-item flex flex-col items-start w-[100%] max-w-[329px] md:max-w-none md:w-[367px] md:h-[81px]">
            <div className="feature-icon flex items-center justify-start h-[24px] md:h-[25px] mb-[1px] md:mb-0">
              <img src="/Shared/icons/icon3.svg" alt="Scaleable" className="h-full w-auto object-contain" />
            </div>
            <h3 className="feature-title text-[18px] md:text-[18px] font-semibold md:font-bold font-inter text-text-primary h-[36px] leading-[36px] m-0">
              Scaleable
            </h3>
            <p className="feature-desc md:font-normal text-[13px] md:text-[12px] text-text-secondary h-[20px] leading-[20px] m-0 whitespace-nowrap md:whitespace-normal overflow-hidden overflow-ellipsis w-full">
              Systems that can grow from small to large farms
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

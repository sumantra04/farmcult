/*
import React from 'react';

const WfcBanner = ({ 
  title = "", 
  subtitle = "", 
  image = "",
  tag = "",
  variant = "dark"
}) => {
  const isDark = variant === 'dark';

  return (
    <section 
      className={`wfc-about-banner relative flex items-center justify-center lg:justify-start overflow-hidden ${
        isDark ? 'min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-16 lg:py-0' : 'pt-16 md:pt-24 pb-10 md:pb-14'
      }`}
    >
      {isDark ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-white z-0" />
      )}

      <div 
        className={`wfc-about-banner-inner relative z-10 w-full max-w-[100vw] mx-auto px-6 md:px-[5%] flex flex-col justify-center ${
          isDark ? 'text-center lg:text-left' : 'text-center'
        }`}
      >
        {tag && (
          <span className="inline-block text-[#8DC83A] text-[0.75rem] md:text-[0.85rem] font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase mb-4">
            {tag}
          </span>
        )}
        <h2 
          className={`wfc-about-banner-title text-[24px] sm:text-[2.5rem] md:text-[29px] font-bold mb-4 md:mb-2 leading-[32px] lg:leading-[48px] ${
            isDark 
              ? 'text-white max-w-[90vw] md:max-w-[800px] mx-auto lg:mx-0' 
              : 'text-[#2A2A2A] max-w-[90vw] md:max-w-[700px] mx-auto'
          }`}
        >
          {title}
        </h2>
        <p 
          className={`wfc-about-banner-sub text-[16px] md:text-[15px] leading-[26px] md:leading-[29px] w-full max-w-[90vw] md:max-w-[600px] ${
            isDark 
              ? 'text-white mx-auto lg:mx-0' 
              : 'text-[#666] mx-auto'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default WfcBanner;
*/

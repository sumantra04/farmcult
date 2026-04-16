import React from 'react';

const WfcFeatures = () => {
  return (
    <section className="wfc-features-section px-4 md:px-[5%] pb-16 md:pb-[6rem] max-w-[1600px] mx-auto">
      <div className="wfc-features-wrapper relative flex flex-col w-full max-w-[372px] md:max-w-none h-auto mx-auto">
        
        {/* Mobile Timeline Vertical Line */}
        <div className="absolute left-[3px] top-[16px] w-[2px] h-[calc(100%-32px)] bg-[#8DC83A] block md:hidden z-0"></div>

        <div className="wfc-features-grid flex flex-col gap-[40px] md:gap-0 md:grid md:grid-cols-2 xl:grid-cols-3">
          
          {/* Card 1 */}
          <div className="wfc-feature-card relative flex flex-col pl-[20px] md:pl-0 md:py-2 xl:py-2 md:px-6 sm:px-8 xl:px-12 transition-colors duration-300 ease-in-out border-[#DEDEDE] md:border-l-2 z-10 overflow-hidden">
            {/* Mobile Dot */}
            <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
            
            <div className="wfc-feature-icon w-6 h-6 md:w-[16px] md:h-[28px] flex items-center justify-center mb-4 md:mb-6">
              <img src="/Shared/icons/icon1.svg" alt="Technology-led icon" className="w-full h-full" />
            </div>
            <h3 className="wfc-feature-title text-[24px] md:text-[clamp(20px,2.5vw,32px)] xl:text-[32px] md:leading-[48px] font-medium mb-2 md:mb-[60px] text-black whitespace-nowrap">
              Technology-led
            </h3>
            <p className="wfc-feature-desc text-[14px] md:text-[clamp(12px,1.2vw,16px)] xl:text-[16px] text-black leading-[26px] md:leading-[29px] whitespace-nowrap">
              Automation, IoT monitoring, and<br />data-based decision-making systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="wfc-feature-card relative flex flex-col pl-[20px] md:pl-0 md:py-2 xl:py-2 md:px-6 sm:px-8 xl:px-12 transition-colors duration-300 ease-in-out border-[#DEDEDE] md:border-t-0 md:border-l md:border-r xl:border-r-1 xl:border-l-2 z-10 overflow-hidden">
             {/* Mobile Dot */}
             <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
             
            <div className="wfc-feature-icon w-6 h-6 md:w-[25px] md:h-[28px] flex items-center justify-center mb-4 md:mb-6">
              <img src="/Shared/icons/icon2.svg" alt="Sustainable icon" className="w-full h-full" />
            </div>
            <h3 className="wfc-feature-title text-[24px] md:text-[clamp(20px,2.5vw,32px)] xl:text-[32px] md:leading-[48px] font-medium mb-2 md:mb-[60px] text-black whitespace-nowrap">
              Sustainable
            </h3>
            <p className="wfc-feature-desc text-[14px] md:text-[clamp(12px,1.2vw,16px)] xl:text-[16px] text-black leading-[26px] md:leading-[29px] whitespace-nowrap">
              Less water usage and no soil dependency,<br />build for long-term environmental balance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="wfc-feature-card relative flex flex-col pl-[20px] md:pl-0 md:py-2 xl:py-2 md:px-6 sm:px-8 xl:px-12 transition-colors duration-300 ease-in-out border-[#DEDEDE] md:border-t-0 md:border-l md:col-span-2 xl:col-span-1 md:border-r-2 z-10 overflow-hidden">
             {/* Mobile Dot */}
             <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
             
            <div className="wfc-feature-icon w-6 h-6 md:w-[25px] md:h-[28px] flex items-center justify-center mb-4 md:mb-6">
              <img src="/Shared/icons/icon3.svg" alt="Scaleable icon" className="w-full h-full" />
            </div>
            <h3 className="wfc-feature-title text-[24px] md:text-[clamp(20px,2.5vw,32px)] xl:text-[32px] md:leading-[48px] font-medium mb-2 md:mb-[60px] text-black whitespace-nowrap">
              Scaleable
            </h3>
            <p className="wfc-feature-desc text-[14px] md:text-[clamp(12px,1.2vw,16px)] xl:text-[16px] text-black leading-[26px] md:leading-[29px] whitespace-nowrap">
              Structured systems designed to expand<br />smoothly from small to large farms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WfcFeatures;

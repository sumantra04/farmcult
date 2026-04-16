import React from 'react';

const TsStatsGrid = () => {
  // Note: I removed the broken bg-[] class and replaced it with bg-transparent
  return (
    <div className="ts-stats-grid grid grid-cols-1 md:grid-cols-3 md:divide-x md:border-x border-[#DEDEDE] bg-transparent">
      
      {/* Feature 1 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1 overflow-hidden">
        <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-[48px] text-black mb-0 md:mb-0 whitespace-nowrap">
          Up to 50%
        </h3>
        <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-8 md:mb-14 w-full whitespace-nowrap">
          Capital Subsidy
        </p>
        <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[15px] font-normal leading-[1.4] md:leading-[29px] text-black md:max-w-[90%] mt-auto whitespace-nowrap">
          Government capital subsidies<br />on eligible projects
        </p>
      </div>

      {/* Feature 2 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1 overflow-hidden">
        <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-[48px] text-black mb-0 md:mb-0 whitespace-nowrap">
          3% <span className="font-light tracking-normal inline-block ml-1">Interest Subsidy</span>
        </h3>
        <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-8 md:mb-14 w-full whitespace-nowrap">
          Available
        </p>
        <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[15px] font-normal leading-[1.4] md:leading-[29px] text-black md:max-w-[90%] mt-auto whitespace-nowrap">
          Loan Interest subsidised<br />by 3%
        </p>
      </div>

      {/* Feature 3 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1 overflow-hidden">
        <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-[48px] text-black mb-0 md:mb-0 whitespace-nowrap">
          Tax-Free
        </h3>
        <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-8 md:mb-14 w-full whitespace-nowrap">
          Returns
        </p>
        <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[15px] font-normal leading-[1.4] md:leading-[29px] text-black md:max-w-[90%] mt-auto whitespace-nowrap">
          Agricultural income may qualify for<br />tax exemptions under Indian law
        </p>
      </div>
      
    </div>
  );
};

export default TsStatsGrid;

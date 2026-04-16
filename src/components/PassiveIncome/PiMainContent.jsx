import React from 'react';
import PiStatsGrid from './PiStatsGrid';

const PiMainContent = () => {
  return (
    <section className="pi-content-container py-[80px] md:py-[100px] lg:py-[140px] px-4 md:px-[68px]">
      <div className="mx-auto">

        {/* Header */}
        <div className="text-center mx-auto mb-16 md:mb-32 lg:mb-32">
          <h2 className="pi-section-title font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary mb-3 md:mb-4">
            Earn Tax-Free Returns Without Moving a Finger
          </h2>
          <p className="pi-section-desc font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary">
            We manage setup, cultivation, monitoring, and operations enabling stable returns without day to day involvement.
          </p>
        </div>

        {/* ✅ REPLACED EMPTY STATS BLOCK WITH COMPONENT */}
        <PiStatsGrid />

        {/* What's Included Section */}
        <div className="pi-whats-included mt-24 md:mt-16 pt-16 md:pt-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[58%]">

              <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
                What's Included in our<br className="hidden md:block" /> Passive Income Solution?
              </h2>

              <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
                Farmcult's passive income model is designed for investors and landowners who want exposure to modern agriculture without managing daily farm operations.
              </p>

              <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-8 md:mb-10">
                We handle the setup, cultivation, monitoring, and farm management while you benefit from a structured agricultural asset.
              </p>

              {/* BULLETS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">

                {[
                  "End-to-end farm setup",
                  "Farm operations management",
                  "IoT monitoring & reporting",
                  "Crop planning & yield optimisation",
                  "Market linkage & sales coordination",
                  "Ongoing performance oversight",
                  "Farmcult invests in day-to-day operational expenses",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>

                    <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* GREEN HIGHLIGHT LINE */}
              <div className="mt-6 bg-[#E6F4D7] text-[14px] text-[#344054] px-4 py-2 rounded-md w-full">
                Minimum farm size: 5 acres and above
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-[455px] lg:h-[507px] mt-10 lg:mt-0">
              <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-[16px] group">
                <img
                  src="/passiveIncome/piWhatsincluded.jpg"
                  alt="Passive Income Farming"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PiMainContent;

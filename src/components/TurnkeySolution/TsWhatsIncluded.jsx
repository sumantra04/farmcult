import React from 'react';

const TsWhatsIncluded = () => {
  return (
    <section className="ts-content-container py-[80px] md:py-[100px] bg-[#F7F7F7] lg:py-[140px] px-4 md:px-[68px]">
      <div className="mx-auto ts-section-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">

          {/* LEFT */}
          <div className="w-full lg:w-[58%]">

            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
              What's Included in our<br className="hidden md:block" /> Turnkey Solution?
            </h2>

            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
              Farmcult's turnkey model covers every stage of setting up a high-tech hydroponics farm. From design and infrastructure to crop planning and operational readiness.
            </p>

            {/* ✅ BULLETS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mt-8 md:mt-10">

              {[
                "Farm design & layout",
                "Automation & climate control",
                "Polyhouse construction",
                "Crop planning & agronomy",
                "Hydroponics system installation",
                "Market linkages post-harvest",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>

                  {/* ✅ FIXED TEXT */}
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* ✅ GREEN STRIP (SEPARATE — LIKE FIGMA) */}
            <div className="mt-6 bg-[#E6F4D7] text-[14px] text-[#344054] px-4 py-2 rounded-md w-full">
              Minimum farm size: 2.5 acres and above
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[455px] lg:h-[396px] mt-10 lg:mt-0">
            <div className="relative w-full h-full overflow-hidden rounded-[16px]">
              <img 
                src="/TurnkeySolution/TkWhatsIncluded.jpg" 
                alt="Turnkey Hydroponics Farm" 
                className="w-full h-full object-cover rounded-[16px]"
                onError={(e) => { e.target.src = '/TurnkeySolution/ourSolutionCard3.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[16px]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TsWhatsIncluded;

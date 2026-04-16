import React from 'react';

const TsIncentives = () => {
  return (
    <section className="ts-incentives-container py-20 lg:py-32 bg-[#F7F7F7] px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Top part: Text and Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 lg:items-stretch mb-16 lg:mb-24">
          <div className="w-full lg:w-1/2 flex flex-col justify-between py-2 lg:py-6">
            <div>
              <h2 className="ts-incentives-text text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
                Government Incentives<br className="hidden md:block" /> Reduce Your Initial Investment
              </h2>
              <p className="ts-incentives-text text-[1.1rem] text-[#555] leading-[1.8] mb-8">
                Eligible hydroponics projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
              </p>
            </div>
            <p className="ts-incentives-text text-[0.85rem] text-[#888] italic mt-10 lg:mt-0">
              *Availability depends on project eligibility and applicable state or central government schemes.
            </p>
          </div>
          
          <div className="w-full lg:w-[45%] lg:ml-auto">
            {/* Split Image Card wrapper */}
            <div className="w-full flex flex-col rounded-[24px] overflow-hidden lg:h-[440px] xl:h-[480px] min-h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-black/5">
              <div className="w-full h-[60%] lg:h-[62%] relative bg-gray-100 ts-incentives-img">
                <img
                  src="/Shared/Agri_Infrastructure_Fund.jpg"
                  alt="Agri Infrastructure Fund"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[40%] lg:h-[38%] relative bg-white ts-incentives-img">
                <img
                  src="/Shared/National_Horticulture_Board.jpg"
                  alt="National Horticulture Board"
                  className="absolute inset-0 w-full h-full object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom part: Stats Grid */}
        <div className="ts-stats-grid grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative border-t border-gray-200 pt-16">
          {/* Divider lines conceptually visible on desktop */}
          <div className="hidden md:block absolute top-[4rem] bottom-[10%] left-[33%] w-[1px] bg-gray-200"></div>
          <div className="hidden md:block absolute top-[4rem] bottom-[10%] left-[66%] w-[1px] bg-gray-200"></div>

          {/* Feature 1 */}
          <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(1.8rem,2.2vw,2.2rem)] font-semibold text-text-primary mb-1">
              Up to 50%
            </h3>
            <p className="text-[clamp(1.2rem,1.5vw,1.5rem)] font-normal text-[#555] mb-6">Capital Subsidy</p>
            <p className="text-[0.95rem] text-[#666] leading-[1.6]">
              Government capital subsidies on eligible projects
            </p>
          </div>

          {/* Feature 2 */}
          <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(1.8rem,2.2vw,2.2rem)] font-semibold text-text-primary mb-1">
              3% <span className="font-normal text-[#555] text-[clamp(1.3rem,1.8vw,1.8rem)]">Interest Subsidy</span>
            </h3>
            <p className="text-[clamp(1.2rem,1.5vw,1.5rem)] font-normal text-[#555] mb-6">Available</p>
            <p className="text-[0.95rem] text-[#666] leading-[1.6]">
              Loan Interest subsidised by 3%
            </p>
          </div>

          {/* Feature 3 */}
          <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(1.8rem,2.2vw,2.2rem)] font-semibold text-text-primary mb-1">
              Tax-Free <span className="font-normal text-[#555] text-[clamp(1.3rem,1.8vw,1.8rem)]">Returns</span>
            </h3>
            <div className="h-[clamp(1.2rem,1.5vw,1.5rem)] mb-6 hidden md:block"></div> {/* spacer */}
            <p className="text-[0.95rem] text-[#666] leading-[1.6]">
              Agricultural income may qualify for tax exemptions under Indian law
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TsIncentives;

import React from 'react';

const PiHowItWorks = () => {
  return (
    <section className="py-[80px] md:py-[20px] lg:py-[20px] bg-[#F7F7F7] px-4 md:px-[68px]">
      <div className="mx-auto flex flex-col items-center">
        <div className="text-center w-full mx-auto mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary">
            We follow a clear, step-by-step process to set up your hydroponics farm. Farmcult manages each stage with clear timelines and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 relative w-full items-start">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[8%] right-[8%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                1
              </div>
              <img src="/passiveIncome/icons/17.png" alt="Step 1" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Site<br className="hidden lg:block" /> Feasibility</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Land and resource assessment</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                2
              </div>
              <img src="/passiveIncome/icons/12.png" alt="Step 2" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Capital<br className="hidden lg:block" /> Investment</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Client funds infrastructure setup</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                3
              </div>
              <img src="/passiveIncome/icons/13.png" alt="Step 3" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Farm<br className="hidden lg:block" /> Setup</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Farm built and commissioned</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                4
              </div>
              <img src="/passiveIncome/icons/14.png" alt="Step 4" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Operational<br className="hidden lg:block" /> Funding</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Working capital deployed by Farmcult</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                5
              </div>
              <img src="/passiveIncome/icons/15.png" alt="Step 5" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Full Farm<br className="hidden lg:block" /> Management</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Seed to sale operations handled</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                6
              </div>
              <img src="/passiveIncome/icons/16.png" alt="Step 6" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Profit Sharing<br className="hidden lg:block" /> & Returns</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">60:40 split with tax benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiHowItWorks;

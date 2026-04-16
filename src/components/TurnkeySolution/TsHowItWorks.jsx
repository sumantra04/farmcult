import React from 'react';

const TsHowItWorks = () => {
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
              <img src="/TurnkeySolution/icons/tkIcon1.svg" alt="Site Feasibility" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
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
              <img src="/TurnkeySolution/icons/tkIcon2.svg" alt="Paperwork & Planning" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Paperwork &<br className="hidden lg:block" /> Planning</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Documentation and farm planning</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                3
              </div>
              <img src="/TurnkeySolution/icons/tkIcon3.svg" alt="Construction & Installation" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Construction &<br className="hidden lg:block" /> Installation</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Greenhouse and system setup</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                4
              </div>
              <img src="/TurnkeySolution/icons/tkIcon4.svg" alt="Full Stack Crop Agronomy" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Full Stack Crop<br className="hidden lg:block" /> Agronomy</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Crop plantation begins</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                5
              </div>
              <img src="/TurnkeySolution/icons/tkIcon5.svg" alt="Standard Operating Procedure's" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Standard Operating<br className="hidden lg:block" /> Procedure's</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">SOPs taught and practiced on the farms</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border-[2px] border-dashed border-black bg-[#F7F7F7] flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                6
              </div>
              <img src="/TurnkeySolution/icons/tkIcon6.svg" alt="Market Linkage" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-inter font-bold text-[16px] md:text-[18px] leading-[24px] text-black mb-1 md:mb-2 px-1">Market<br className="hidden lg:block" /> Linkage</h3>
            <p className="font-inter font-normal text-[14px] md:text-[12px] leading-[24px] text-text-secondary px-2">Linking your produce to market</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TsHowItWorks;

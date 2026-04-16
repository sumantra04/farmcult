import React from 'react';

const RiseOfFarming = () => {
  return (
    <section className="rise-container w-full min-h-screen flex items-center justify-center bg-bg-color py-12 md:py-16 px-4 md:px-[5%]" id="technology">
      <div className="rise-content-wrapper w-full max-w-[1400px] flex flex-col gap-[40px] md:gap-16">

        {/* Top Split Area */}
        <div className="rise-top-split flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-[48px] lg:gap-16 items-start">

          {/* Left Text & Capsules */}
          <div className="rise-info-side flex flex-col gap-[28px] w-full max-w-[370px] md:max-w-[550px] mx-auto lg:mx-0">
            <h2 className="rise-title font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary w-full md:h-auto m-0">
              The Rise of Modern<br />Farming in India
            </h2>
            <p className="rise-desc font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary w-full md:h-auto m-0 md:w-[382px]">
              Rapid urban demand, water stress, and government support are accelerating hydroponics adoption across key Indian states.
            </p>

            <div className="states-capsule-grid flex flex-wrap gap-[10px] md:gap-4 md:mt-5 md:w-[362px] w-full">
              {['Maharashtra', 'Karnataka', 'Telangana', 'Punjab', 'Gujarat', 'Tamil Nadu', 'Haryana', 'Rajasthan'].map((state) => (
                <span key={state} className="state-capsule font-inter inline-flex items-center justify-center py-[2px] md:py-2 px-[12px] md:px-4 bg-accent/25 text-text-primary text-[15px] md:text-[0.95rem] leading-[29px] md:leading-normal rounded-[16px] md:rounded-full font-normal">
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Right Map Visual Area */}
          <div className="rise-map-side w-full flex justify-center lg:justify-end">
            <div className="impact-map-card w-[370px] h-[300px] md:w-[669px] md:h-[472px] md:aspect-video bg-[#8D8D8D] rounded-[16px] md:rounded-2xl relative overflow-hidden flex items-center justify-center">
              <img src="/Home/riseOfModernFarming.jpg" alt="India Hydroponics Impact Map" className="impact-map-img w-full h-full object-cover md:object-fill" />
            </div>
          </div>

        </div>

        {/* Bottom Stats Grid */}
        <div className="rise-stats-wrapper relative flex flex-col w-full max-w-[372px] md:max-w-none h-auto md:h-auto mx-auto">

          {/* The unifying vertical timeline bar for mobile - strictly 336px to not stick out past bottom dot */}
          <div className="absolute left-[3px] top-[16px] w-[2px] h-[336px] bg-[#8DC83A] block md:hidden z-0"></div>

          <div className="rise-stats-grid flex flex-col md:grid md:grid-cols-4 gap-[20px] md:gap-y-0 pt-0">

            {/* Card 1 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[53px] pl-[20px] sm:px-6 lg:px-8 md:border-l-2 border-[#DEDEDE] w-full md:h-auto bg-transparent z-10 md:border-r-2 overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              <h3 className="stat-value font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                Over 30%
              </h3>
              <p className="stat-label font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                ROI on projects with<br />hydroponics / modern farming
              </p>
            </div>

            {/* Card 2 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[53px] pl-[20px] sm:px-6 lg:px-8 border-l-0 lg:border-r border-[#DEDEDE] w-full md:h-auto bg-transparent z-10 md:border-r-2 overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              <h3 className="stat-value font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                80–90%
              </h3>
              <p className="stat-label font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Less water usage compared<br />to soil farming
              </p>
            </div>

            {/* Card 3 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[53px] pl-[20px] sm:px-6 lg:px-8 border-l-0 sm:border-r border-[#DEDEDE] w-full md:h-auto bg-transparent z-10 md:border-r-2 overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              <h3 className="stat-value font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                Up to 5x
              </h3>
              <p className="stat-label font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Higher yield per acre<br />in controlled systems
              </p>
            </div>

            {/* Card 4 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[53px] pl-[20px] sm:px-6 lg:px-8 w-full md:h-auto bg-transparent z-10 md:border-r-2 border-[#DEDEDE] overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              <h3 className="stat-value font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                Up to 50%
              </h3>
              <p className="stat-label font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Capital subsidy for<br />eligible projects
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RiseOfFarming;

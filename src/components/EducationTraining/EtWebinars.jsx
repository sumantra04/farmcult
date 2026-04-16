import React from 'react';

const EtWebinars = () => {
  return (
    <section className="et-webinars-container py-[80px] md:py-[100px] bg-[#FAFAFA] lg:py-[100px] px-4 md:px-[68px]">
      <div className="mx-auto et-webinars-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">

          {/* Left Column (Image) */}
          <div className="w-full lg:w-[455px] lg:h-[426px] mt-10 lg:mt-0">
            <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-[16px] group">
              <img
                src="/EducationTraining/Webinarsimage.jpg"
                alt="Webinars"
                className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105 saturate-110 transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/Shared/contactFromimg.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[16px]"></div>
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="w-full lg:w-[58%]">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
              Webinars
            </h2>

            <h4 className="font-inter text-[18px] md:text-[15px] font-normal text-text-primary mb-4 md:mb-6">
              Clearing the Air on Hydroponics.
            </h4>

            <p className="font-inter text-[16px] md:text-[15px] md:max-w-[80%] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-4 md:mb-6">
              Farmcult hosts live and virtual webinar sessions designed to simplify hydroponics and modern farming concepts. These sessions help participants understand the fundamentals before moving into hands on training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mt-8 md:mt-10 md:mb-10">
              {[
                "Hydroponics fundamentals",
                "Myths vs facts about modern farming",
                "Understanding costs and returns",
                "Technology in controlled farming",
                "Live Q and A with experts"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">{item}</span>
                </div>
              ))}
            </div>

            
            <p className="font-inter text-[15px] md:text-[14px] text-text-primary leading-[26px]">
              Equal depth and detail are ensured across both on-site and online workshops.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EtWebinars;

import React, { useState } from 'react';

const WfcRealStories = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="ts-content-container py-[80px] md:py-[100px] bg-white lg:py-[100px] px-4 md:px-[68px]">
      <div className="mx-auto ts-section-content">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-28 items-center">

          {/* CONTENT */}
          <div className="w-full lg:w-[58%]">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-8">
              Real Stories With Real Outcomes
            </h2>

            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
              From concept to execution, we ensure consistency and depth across every engagement. Here’s how our clients describe their experience with Farmcult.
            </p>

            {/* BULLETS */}
            <div className="flex flex-col gap-y-5 mt-8 md:mt-10">
              {[
                "Precision-led execution at every stage",
                "Built for scale and long-term viability",
                "Sustainability at the core of every solution",
                "Seamless journey from concept to execution",
                "Trusted partnerships built on transparency",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#89C74A] mt-[2px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-[#475467] font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* VIDEO */}
          <div className="w-full lg:w-[455px] lg:h-[500px] mt-10 lg:mt-0">
            <div className="relative w-full h-full min-h-[450px] lg:min-h-0 overflow-hidden rounded-[16px] group">
              <video
                src="/whyFarmCult/Wfcvideo.mp4"
                className="w-full h-full object-cover rounded-[16px]"
                autoPlay
                loop
                playsInline
                muted={isMuted}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[16px] pointer-events-none"></div>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center rounded-full text-white transition-all shadow-sm border border-white/20 opacity-80 group-hover:opacity-100"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WfcRealStories;

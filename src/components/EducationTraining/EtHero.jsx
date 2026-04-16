import React from 'react';

const EtHero = () => {
  return (
    <div className="w-full flex justify-center">
      <section className="pi-hero-container relative w-full min-h-[240px] md:min-h-[280px] md:h-[280px] px-[24px] py-[40px] md:pt-[24px] md:pr-[64px] md:pb-[24px] md:pl-[64px] flex flex-col justify-center overflow-hidden">
        <div
          className="pi-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/Shared/piTurnkeyC2.jpg')" }}
        ></div>

        <div className="relative z-10 w-full flex flex-col gap-[12px] md:gap-[6px] text-left">
          <h1 className="pi-hero-title text-white font-['Inter'] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[66px] tracking-normal m-0 max-w-full">
            Trainings & Education
          </h1>
          <p className="pi-hero-desc text-white/90 font-['Inter'] font-normal text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal m-0 w-full">
            From keen students to aspiring growers, Farmcult offers hands-on exposure to modern hydroponics farming.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EtHero;

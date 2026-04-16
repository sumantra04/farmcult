import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EtParticipantsSay = () => {
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Reveal heading and text
    gsap.fromTo('.et-participants-text',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
      }
    );

    // Reveal images
    gsap.fromTo('.et-participants-img-left',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-participants-img-left', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    gsap.fromTo('.et-participants-img-right',
      { x: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.et-participants-img-right', start: 'top 85%' },
        x: 0, autoAlpha: 1, duration: 1, delay: 0.2, ease: 'power3.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="et-participants-section w-full px-[5%] py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.35fr] gap-12 lg:gap-12 items-stretch">

        {/* Left Column: Text + Landscape Image */}
        <div className="flex flex-col w-full h-full">
          <div className="mb-10 lg:mb-16">
            <h2 className="et-participants-text text-[32px] md:text-[40px] font-medium text-text-primary mb-16 leading-[1.2]">
              What Participants Say
            </h2>
            <p className="et-participants-text text-[15px] md:text-[16px] text-text-secondary leading-[1.8] max-w-[600px]">
              Farmcult experiences are shaped by the people who take part in them. Across both on-site and online formats, we ensure every session offers the same depth, clarity, and hands-on exposure.
            </p>
          </div>

          <div className="w-full mt-auto et-participants-img-left grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <img
              src="/EducationTraining/Training1.jpg"
              alt="Participants on-site"
              className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-[16px] md:rounded-[24px]"
            />
            <img
              src="/EducationTraining/EducationalAndTraining.jpeg"
              alt="Participants training session"
              className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-[16px] md:rounded-[24px]"
            />
          </div>
        </div>

        {/* Right Column: Portrait Image/Video */}
        <div className="w-full h-[400px] md:h-[600px] lg:h-auto lg:max-h-[550px] et-participants-img-right relative group">
          <video
            src="/EducationTraining/Trainingvideo.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
          />

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
    </section>
  );
};

export default EtParticipantsSay;

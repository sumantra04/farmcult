import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, Navigate } from "react-router-dom";
import caseStudies from "../../data/case_studies.js";

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = ({ bgColor = "bg-white" }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Initial reveal of the card container
      gsap.fromTo(
        ".case-study-container",
        { scale: 0.95, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power2.out",
        },
      );

      // Slide in the white content card
      gsap.fromTo(
        ".case-study-card",
        { x: 40, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: ".case-study-container", start: "top 60%" },
          x: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        },
      );

      // Stagger elements inside the card
      gsap.fromTo(
        ".case-study-tag, .case-study-title, .case-study-desc, .case-study-footer",
        { y: 20, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: ".case-study-card", start: "top 80%" },
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.5,
          ease: "power3.out",
        },
      );
    },
    { scope: sectionRef },
  );
  const firstCaseStudy = caseStudies.find((caseStudy) => caseStudy.id === "2-acres-24000-plants");

  return (
    <section
      className={`case-study-section w-full py-10 md:py-16 lg:py-20 ${bgColor} md:px-[5%] flex justify-center`}
      ref={sectionRef}
    >
      {/* Edge-to-edge on mobile, rounded max-width on tablet/desktop */}
      <div className="case-study-container relative w-full max-w-9xl h-[550px] md:h-[500px] lg:h-[600px] rounded-none md:rounded-[16px] overflow-hidden shadow-none md:shadow-xl group">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={firstCaseStudy.image}
            alt={firstCaseStudy.title}
            className="case-study-bg w-full h-full object-cover"
          />
          {/* Subtle dark overlay for better depth */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Safe GSAP Flex Wrapper - Centers on mobile, right-aligns on desktop */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center md:justify-end p-5 lg:pr-16 z-10 pointer-events-none">
          <Link to={`/case-study/${firstCaseStudy.id}`}>
            {/* The Card - Fluid width on mobile, bounded max-width */}
            <div className="case-study-card pointer-events-auto bg-[#F7F7F7] md:bg-white/95 backdrop-blur-sm rounded-2xl p-7 md:p-24 lg:p-12 w-[92%] max-w-[380px] md:max-w-[420px] lg:max-w-[480px] min-h-[440px] md:min-h-[480px] lg:min-h-[520px] shadow-2xl flex flex-col justify-start items-start">
              {/* Capsule */}
              <div className="case-study-tag px-[16px] py-[6px] bg-[#E3F0D3] text-[#343434] rounded-full mb-6 md:mb-8">
                <span className="font-inter font-medium text-[14px] leading-none m-0">
                  Case Study
                </span>
              </div>

              {/* Heading - Fixed line heights to prevent vertical overlap */}
              <h2 className="case-study-title font-inter text-[32px] md:text-[32px] font-medium md:font-medium text-black leading-[1.2] md:leading-[48px] mb-8 tracking-tight m-0 w-full">
                {firstCaseStudy.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>

              {/* Paragraph */}
              <p className="case-study-desc font-inter text-[16px] md:text-[16px] font-normal text-black leading-[1.6] md:leading-[29px] mb-8 md:mb-2 opacity-90 m-0 w-full md:max-w-[90%]">
                {firstCaseStudy.description}
              </p>

              {/* Footer */}
              <div className="case-study-footer w-full flex justify-between items-center mt-auto">
                <span className="case-study-date font-inter text-[#81B622] font-bold text-[16px] m-0">
                  {firstCaseStudy.date}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

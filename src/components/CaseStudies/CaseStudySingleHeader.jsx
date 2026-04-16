import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CaseStudySingleHeader = ({
  tag = "CASE STUDY",
  title = "Real Farms. Real Results.",
  subtitle = "Every project is built with planning, technology, and long-term viability in mind. Explore how Farmcult transforms land into structured operations across India.",
}) => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cs-single-label, .cs-single-main-title, .cs-single-main-subtitle",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    },
    { scope: headerRef },
  );

  return (
    <section ref={headerRef} className="w-full overflow-hidden">
      <div className="text-center py-[60px] md:py-[80px] px-4 md:px-[5%] max-w-[1200px] mx-auto">
        <span className="cs-single-label block text-[14px] md:text-[16px] font-semibold text-[#8DC83A] mb-4 uppercase">
          {tag}
        </span>
        <h1 className="cs-single-main-title text-[32px] md:text-[48px] leading-[42px] md:leading-[66px] font-medium text-black mb-4">
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="cs-single-main-subtitle text-[16px] md:text-[18px] text-gray-600 max-w-[700px] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default CaseStudySingleHeader;

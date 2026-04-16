import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BlogsHeader = ({
  tag = "BLOGS",
  title = "Ideas Driving Modern Farming",
  subtitle = "Industry updates, hydroponics knowledge, and practical insights shaping modern agriculture in India.",
}) => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".blogs-label, .blogs-main-title, .blogs-main-subtitle",
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, { scope: headerRef });

  return (
    <section ref={headerRef} className="w-full overflow-hidden">
      {/* TEXT */}
      <div className="text-center py-[60px] md:py-[80px] px-4 md:px-[5%] max-w-[1200px] mx-auto">
        <span className="blogs-label block text-[14px] md:text-[16px] font-semibold text-[#8DC83A] mb-4 uppercase">
          {tag}
        </span>
        <h1 className="blogs-main-title text-[32px] md:text-[48px] leading-[42px] md:leading-[66px] font-medium text-black mb-4">
          {title}
        </h1>
        <p className="blogs-main-subtitle text-[16px] md:text-[18px] text-gray-600 max-w-[700px] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default BlogsHeader;

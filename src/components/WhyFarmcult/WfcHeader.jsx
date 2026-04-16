import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WfcHeader = ({
  tag = "WHY FARMCULT?",
  title = "Cultivating for Tomorrow",
  subtitle = "Not just growing crops. Building the future of modern farming.",
  image = "",
  variant = "light", // "light" | "dark"
}) => {
  const headerRef = useRef(null);
  const isDark = variant === "dark";

  useGSAP(() => {
    gsap.fromTo(
      ".wfc-label, .wfc-main-title, .wfc-main-subtitle",
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

      {/* ================= DARK VERSION (TECHNOLOGY) ================= */}
      {isDark && (
        <div className="relative w-full h-[368px]">

          {/* IMAGE */}
          <img
            src={image}
            alt="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
            <div className="max-w-[834px] text-center">

              <span className="wfc-label text-[14px] md:text-[16px] font-semibold uppercase text-[#8DC83A] block mb-3">
                {tag}
              </span>

              <h1 className="wfc-main-title text-[32px] md:text-[48px] leading-[42px] md:leading-[66px] font-medium text-white mb-4">
                {title}
              </h1>

              <p className="wfc-main-subtitle text-[14px] md:text-[16px] leading-[24px] text-white/90 max-w-[700px] mx-auto">
                {subtitle}
              </p>

            </div>
          </div>
        </div>
      )}

      {/* ================= LIGHT VERSION (WHY FARMCULT) ================= */}
      {!isDark && (
        <>
          {/* TEXT */}
          <div className="text-center py-[60px] md:py-[80px] px-4 md:px-[5%] max-w-[1200px] mx-auto">

            <span className="wfc-label block text-[14px] md:text-[16px] font-semibold text-[#8DC83A] mb-4 uppercase">
              {tag}
            </span>

            <h1 className="wfc-main-title text-[32px] md:text-[48px] leading-[42px] md:leading-[66px] font-medium text-black mb-4">
              {title}
            </h1>

            <p className="wfc-main-subtitle text-[16px] md:text-[18px] text-gray-600 max-w-[700px] mx-auto">
              {subtitle}
            </p>

          </div>

          {/* IMAGE BELOW */}
          <div className="w-full">
            <img
              src="/Shared/piHeader.jpg"
              alt="banner"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </>
      )}

    </section>
  );
};

export default WfcHeader;

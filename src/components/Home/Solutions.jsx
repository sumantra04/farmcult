import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Left text animations
      gsap.fromTo(
        ".solutions-title",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".solutions-desc",
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        },
      );

      // Cards staggered animation
      gsap.fromTo(
        ".solution-card",
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          scrollTrigger: {
            trigger: ".solutions-cards-wrapper",
            start: "top 85%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="solutions-section flex flex-col lg:flex-row bg-[#ECECEC] px-[16px] md:px-[5%] pt-[40px] pb-[16px] md:py-[80px] lg:py-[100px] min-h-[80vh] gap-[48px] md:gap-12 lg:gap-[5%] items-start w-full"
      ref={sectionRef}
    >
      <div className="solutions-left flex-1 lg:flex-none lg:w-[25%] lg:max-w-[350px] mb-0 text-left w-full flex flex-col gap-[24px]">
        <h2 className="solutions-title font-inter text-[32px] md:text-[32px] font-medium leading-[48px] md:leading-[48px] text-black m-0">
          Our Solutions
        </h2>
        <p className="solutions-desc font-inter text-[15px] md:text-[15px] font-normal leading-[29px] md:leading-[29px] text-text-primary m-0">
          From hands-free investing to <br className="hidden lg:block" />
          hands-on farming, we offer <br className="hidden lg:block" />
          flexible ways to work with <br className="hidden lg:block" />
          Farmcult based on your goals.
        </p>
      </div>

      <div className="solutions-right flex-1 w-full mt-0 lg:mt-0">
        <div className="solutions-cards-wrapper flex flex-col md:flex-row gap-[28px] md:gap-14 justify-between">
          {/* Card 1 */}
          <div
            className="solution-card flex-1 gap-24 relative bg-[#ECECEC] bg-cover bg-center rounded-[16px] md:rounded-[20px] h-[337px] md:h-auto md:min-h-[540px] w-full max-w-[370px] md:max-w-none mx-auto md:mx-0 flex flex-col justify-between p-[25px] md:py-10 md:px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/Shared/piHeader.jpg')",
            }}
          >
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10 w-full">
              <h3 className="solution-card-title font-inter text-[24px] md:text-[24px] font-bold leading-[29px] md:leading-[29px] m-0 w-full h-auto">
                Passive Income Model
              </h3>
            </div>
            <div className="solution-card-bottom relative z-10 w-full flex flex-col gap-[50px] md:gap-6 justify-end">
              <p className="solution-card-desc font-inter text-[15px] md:text-[15px] font-normal leading-[29px] text-[#F7F7F7] m-0 w-full h-auto">
                Invest in a hydroponics farm while Farmcult manages operations
                end-to-end.
              </p>
              <Link to="/passive-income">
                <button className="solution-btn w-full h-[40px] md:h-auto flex justify-between items-center bg-white text-text-primary border-none px-[24px] py-0 md:py-[12px] md:px-[18px] rounded-[40px] md:rounded-[30px] font-inter text-[15px] md:text-[0.9rem] font-medium md:font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group m-0">
                  <span className="text-[12px]">Learn More</span>{" "}
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="solution-card flex-1 gap-24 relative bg-[#ECECEC] bg-cover bg-center rounded-[16px] md:rounded-[20px] h-[337px] md:h-auto md:min-h-[540px] w-full max-w-[370px] md:max-w-none mx-auto md:mx-0 flex flex-col justify-between p-[25px] md:py-10 md:px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/Shared/piTurnkeyC1.jpg')",
            }}
          >
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10 w-full">
              <h3 className="solution-card-title font-inter text-[24px] md:text-[24px] font-bold leading-[29px] md:leading-[29px] m-0 w-[70%] h-auto">
                Turnkey Solution
              </h3>
            </div>
            <div className="solution-card-bottom relative z-10 w-full flex flex-col gap-[50px] md:gap-6 justify-end">
              <p className="solution-card-desc font-inter text-[15px] md:text-[15px] font-normal leading-[29px] text-[#F7F7F7] m-0 w-full h-auto">
                Farmcult will build a fully operational hydroponics
                farm on your land.
              </p>
              <Link to="/turnkey-solution">
                <button className="solution-btn w-full h-[40px] md:h-auto flex justify-between items-center bg-white text-text-primary border-none px-[24px] py-0 md:py-[12px] md:px-[18px] rounded-[40px] md:rounded-[30px] font-inter text-[15px] md:text-[0.9rem] font-medium md:font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group m-0">
                  <span className="text-[12px]">Learn More</span>{" "}
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="solution-card flex-1 gap-24 relative bg-[#ECECEC] bg-cover bg-center rounded-[16px] md:rounded-[20px] h-[337px] md:h-auto md:min-h-[540px] w-full max-w-[370px] md:max-w-none mx-auto md:mx-0 flex flex-col justify-between p-[25px] md:py-10 md:px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/Shared/piTurnkeyC2.jpg')",
            }}
          >
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10 w-full">
              <h3 className="solution-card-title font-inter text-[24px] md:text-[24px] font-bold leading-[29px] md:leading-[29px] m-0 w-full h-auto">
                Education & Training
              </h3>
            </div>
            <div className="solution-card-bottom relative z-10 w-full flex flex-col gap-[50px] md:gap-6 justify-end">
              <p className="solution-card-desc font-inter text-[15px] md:text-[15px] font-normal leading-[29px] text-[#F7F7F7] m-0 w-full h-auto">
                Learn hydroponics farming through practical training, workshops,
                and guidance.
              </p>
              <Link to="/education-and-training">
                <button className="solution-btn w-full h-[40px] md:h-auto flex justify-between items-center bg-white text-text-primary border-none px-[24px] py-0 md:py-[12px] md:px-[18px] rounded-[40px] md:rounded-[30px] font-inter text-[15px] md:text-[0.9rem] font-medium md:font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group m-0">
                  <span className="text-[12px]">Learn More</span>{" "}
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

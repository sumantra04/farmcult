import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParticipantsReviews = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const newActive = Math.round(scrollLeft / width);
      setActiveSlide(newActive);
    }
  };

  const reviews = [
    {
      id: 1,
      reviewer: 'Ramyata Aseri',
      time: '2 months ago',
      content: 'I attended a 4-day hydroponics training program and found it extremely well-structured and informative. The sessions were engaging, easy to understand, and packed with practical insights...',
      image: '/Home/icons/people1.png',
      stars: '/Home/icons/5star.png'
    },
    {
      id: 2,
      reviewer: 'Sandeep dhaliwal',
      time: '4 months ago',
      content: 'The hydroponics farming training was an incredibly valuable experience. It provided a perfect balance of theoretical knowledge and practical, hands-on skills. I learned how to set up and maintain a hydroponics system, as well...',
      image: '/Home/icons/people2.png',
      stars: '/Home/icons/5star.png'
    },
    {
      id: 3,
      reviewer: 'Aarav Sharma',
      time: '5 months ago',
      content: 'My hydroponics training at Farmcult was an excellent experience. The sessions were clear, practical, and very informative, giving me hands-on exposure to modern...',
      image: '/Home/icons/people3.png',
      stars: '/Home/icons/5star.png',
      isHorizontal: true
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.reviews-heading-area',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    gsap.fromTo('.review-card-item',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.reviews-content-grid', start: 'top 75%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="reviews-section w-full px-[5%] py-16 lg:py-24 bg-[#F9F9F9]" ref={sectionRef}>

      <div className="reviews-heading-area flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 md:gap-0">
        <div className="max-w-[700px]">
          <h2 className="text-[32px] font-medium text-text-primary leading-[48px] mb-4">
            What Participants Say
          </h2>
          <p className="text-[15px] text-text-secondary ">
            Real feedback from students, growers, and professionals who've trained with Farmcult.
          </p>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://www.google.com/search?sca_esv=41b0018ec147afb9&sxsrf=ANbL-n75FxexeXCztV-bthFSsZTdhLeTnQ:1775374564056&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOe_3IW_o05uxZJQyuYTh3TNlJqLOv3Il2tNtfIJ-SsYUCFtOk1f1FURIAEUlql5A7jRCF_tV_SQadvJvKXkFdrxdaEO_&q=Farmcult+Reviews&sa=X&ved=2ahUKEwjGiu_RmdaTAxX2WHADHYI1DwsQ0bkNegQIIBAH&biw=1512&bih=823&dpr=2",
              "_blank"
            )
          }
          className="bg-[#343434] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shrink-0 max-w-max"
        >
          Read More Reviews
        </button>
      </div>

      <div className="reviews-content-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        <div className="review-card-item lg:col-span-4 bg-white rounded-[24px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center text-center">
          <img src="/Home/icons/GoogleLogo.png" alt="Google" className="w-12 h-12 mb-6" />
          <h3 className="text-[2.8rem] font-bold text-text-primary leading-tight mb-2">Google</h3>
          <p className="text-lg text-text-secondary opacity-60 mb-8">average rating</p>
          <div className="text-[6rem] font-bold text-[#4285F4] leading-none mb-6">4.7</div>
          <img src="/Home/icons/4.5star.png" alt="4.7 Stars" className="h-10 mb-8" />
          <img src="/Home/icons/GoogleLogo.png" alt="Google" className="w-12" />
        </div>

        <div className="lg:col-span-8 w-full overflow-hidden lg:overflow-visible">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex lg:grid overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none lg:grid-cols-2 gap-4 lg:gap-8 -mx-[5%] px-[5%] lg:mx-0 lg:px-0 pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {reviews.filter(r => !r.isHorizontal).map((review) => (
              <div key={review.id} className="review-card-item bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col shrink-0 w-[85vw] sm:w-[50vw] snap-center lg:w-auto">

                <div className="flex justify-center mb-6">
                  <img src="/Home/icons/GoogleLogo.png" alt="Google" className="w-8 h-8" />
                </div>

                <div className="flex justify-center mb-6">
                  <img src={review.stars} alt="Rating" className="h-5" />
                </div>

                {/* ✅ ONLY CHANGE HERE */}
                <p className="text-[0.95rem] text-text-primary leading-[29px] opacity-90 text-center mb-8 flex-1 font-bold">
                  "{review.content}"
                </p>

                <div className="flex flex-col items-center mt-auto">
                  <span className="font-bold text-text-primary text-base mb-1">{review.reviewer}</span>
                  <span className="text-sm text-text-secondary opacity-60 mb-4">{review.time}</span>
                  <img src={review.image} alt={review.reviewer} className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                </div>
              </div>
            ))}

            {reviews.filter(r => r.isHorizontal).map((review) => (
              <div key={review.id} className="review-card-item lg:col-span-2 bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col lg:flex-row items-center lg:gap-6 shrink-0 w-[85vw] sm:w-[50vw] snap-center lg:w-auto p-8 lg:p-6 lg:px-8">

                <div className="flex flex-col lg:hidden w-full h-full align-center justify-between">

                  <div className="flex justify-center mb-6">
                    <img src="/Home/icons/GoogleLogo.png" alt="Google" className="w-8 h-8" />
                  </div>

                  <div className="flex justify-center mb-6">
                    <img src={review.stars} alt="Rating" className="h-5" />
                  </div>

                  {/* ✅ ONLY CHANGE */}
                  <p className="text-[0.95rem] text-text-primary leading-[29px] opacity-90 text-center mb-8 flex-1 font-bold">
                    "{review.content}"
                  </p>

                  <div className="flex flex-col items-center mt-auto">
                    <span className="font-bold text-text-primary text-base mb-1">{review.reviewer}</span>
                    <span className="text-sm text-text-secondary opacity-60 mb-4">{review.time}</span>
                    <img src={review.image} alt={review.reviewer} className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                  </div>
                </div>

                <div className="hidden lg:flex flex-row w-full items-center gap-6">
                  <img src={review.image} alt="Reviewer" className="w-14 h-14 rounded-full flex-shrink-0 object-cover" />
                  <div className="flex-1">

                    {/* ✅ ONLY CHANGE */}
                    <p className="text-[0.95rem] text-text-primary leading-[29px] opacity-90 mb-2 font-bold">
                      "{review.content}"
                    </p>

                    <img src={review.stars} alt="Rating" className="h-4" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="flex lg:hidden justify-center items-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <div
                key={idx}
                className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${activeSlide === idx ? 'bg-[#8DC83A]' : 'bg-[#D9D9D9]'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParticipantsReviews;

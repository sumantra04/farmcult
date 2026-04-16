import React from 'react';

const EtTrainingDifferent = () => {
  return (
    <section className="et-different-container py-[80px] md:py-[100px] lg:py-[100px] px-4 md:px-[68px] bg-[#F7F7F7]">
      <div className="mx-auto">
        {/* Header Row */}
        <div className="mb-10 lg:mb-16 et-different-header">
          <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
            What Makes Our Training Different
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 lg:gap-8">
            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary md:max-w-3xl">
              Our programs combine classroom learning with real farm exposure. We focus on practical skills, clear concepts, and hands-on understanding so participants leave confident, not confused.
            </p>
            <a href="/why-farmcult" className="text-text-primary border-b border-text-primary pb-0.5 font-medium hover:text-accent hover:border-accent transition-all flex items-center whitespace-nowrap lg:mb-1 text-[0.95rem]">
              Learn more about Farmcult <span className="ml-[6px]">→</span>
            </a>
          </div>
        </div>

        {/* Large Image with Overlaid Card */}
        <div className="relative w-full rounded-[16px] overflow-hidden bg-gray-100 min-h-[500px] lg:min-h-[640px] flex items-center justify-end et-different-image">
          <img
            src="/EducationTraining/Training.jpg"
            alt="Training Different"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.src = '/EducationTraining/ourSolutionCard2.jpg'; }}
          />

          {/* Overlaid Card */}
          <div className="relative z-10 bg-white rounded-[16px] p-8 lg:px-12 lg:py-14 w-[90%] lg:w-[460px] mx-auto lg:mx-0 lg:mr-[4%] my-8 lg:my-0 shadow-[0_10px_40px_rgba(0,0,0,0.08)] et-different-card flex flex-col justify-center">
            <div className="flex flex-col gap-10 lg:gap-12">
              {/* Feature 1 */}
              <div>
                <div className="text-accent mb-3 flex">
                  <img src="/EducationTraining/icons/practical-learning.svg" alt="Practical Learning" className="w-8 h-8 object-contain" />
                </div>
                <h4 className="font-bold text-text-primary text-[1.1rem] lg:text-[1.15rem] mb-2 leading-tight">Practical Learning</h4>
                <p className="text-[#555] text-[0.95rem] leading-[1.6]">
                  Hands-on demonstrations inside working hydroponics farms.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="text-accent mb-3 flex">
                  <img src="/EducationTraining/icons/beginner-friendly.svg" alt="Beginner-Friendly" className="w-8 h-8 object-contain" />
                </div>
                <h4 className="font-bold text-text-primary text-[1.1rem] lg:text-[1.15rem] mb-2 leading-tight">Beginner-Friendly</h4>
                <p className="text-[#555] text-[0.95rem] leading-[1.6]">
                  Complex concepts explained clearly
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="text-accent mb-3 flex">
                  <img src="/EducationTraining/icons/real-world-focused.svg" alt="Real-World Focused" className="w-8 h-8 object-contain" />
                </div>
                <h4 className="font-bold text-text-primary text-[1.1rem] lg:text-[1.15rem] mb-2 leading-tight">Real-World Focused</h4>
                <p className="text-[#555] text-[0.95rem] leading-[1.6]">
                  Learn with real case examples and live systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtTrainingDifferent;

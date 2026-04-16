import CaseStudySingleHeader from "../../components/CaseStudies/CaseStudySingleHeader";
import ContactSection from "../../components/Shared/ContactSection";
import Footer from "../../components/Shared/Footer";
import NotFound from "../NotFound.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import caseStudies from "../../data/case_studies.js";
import Content1 from "../../components/casestudiescontent/caseStudy1.jsx";
import Content2 from "../../components/casestudiescontent/caseStudy2.jsx";
import Content3 from "../../components/casestudiescontent/caseStudy3.jsx";

const componentMap = {
  "2-acres-24000-plants": Content1,
  "football-to-farming": Content2,
  "kids-explore-hydroponics": Content3,
};

const handleNavigate = () => {
  window.location.href = "/case-studies";
};

function DynamicRenderer({ type }) {
  const Component = componentMap[type];

  return Component ? <Component /> : <div>Not Found</div>;
}

const CaseStudy = () => {
  const { id } = useParams();

  const caseStudy = caseStudies.find((c) => c.id === id);

  if (!caseStudy) {
    return <NotFound />;
  }

  const selectedCaseStudies = caseStudies.filter((c) =>
    caseStudy.selectedIds.includes(c.id),
  );
  return (
    <div className="case-study-page">
      <CaseStudySingleHeader
        tag="CASE STUDY"
        title={caseStudy.title}
        subtitle={caseStudy.description}
      />
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${caseStudy.image})`,
        }}
      />
      <section className="flex justify-center px-6 md:px-[5%] lg:px-16 py-10 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-[300px] shrink-0 h-min bg-[#ECECEC] rounded-[16px] p-6 lg:p-[30px] flex flex-col gap-6">
            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">Location</h3>
              <p className="text-[16px] leading-[29px]">{caseStudy.location}</p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Project Size
              </h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.projectSize}
              </p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Client Profile
              </h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.clientProfile}
              </p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Project Type
              </h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.projectType}
              </p>
            </div>
          </div>
          {/* Article */}

          <div className="flex-1 w-full text-[15px] leading-[29px] text-[#343434] space-y-6 overflow-hidden">
            <DynamicRenderer type={caseStudy.id} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[300px] shrink-0 h-min lg:border-x border-[#DEDEDE] lg:px-5 flex flex-col gap-6">
            <h3 className="text-lg font-bold">Our Farms in Action</h3>

            <p className="text-sm leading-7">
              Follow real projects, site updates, and behind-the-scenes farm
              progress.
            </p>

            <div className="flex gap-4 text-[#8DC83A]">
              <a
                href="https://www.instagram.com/farmcult_?igsh=MWwxNDhteXM4N3YyaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/farmcult/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] px-6 md:px-[5%] lg:px-16 py-10 lg:py-16 flex justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left text */}
          <div className="w-full lg:w-[300px] shrink-0 flex flex-col lg:justify-between gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-medium">
                Real Farms.Real Results.
              </h2>

              <p className="text-sm leading-7">
                Every project is built with planning, technology, and long-term
                viability in mind. Explore how Farmcult transforms land into
                structured operations across India.
              </p>
            </div>

            <button className="bg-[#343434] text-white px-6 py-3 rounded-full w-fit"
              onClick={handleNavigate}>
              View All Case Studies
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:flex-1">
            {selectedCaseStudies.map((caseStudy, i) => (
              <Link to={`/case-study/${caseStudy.id}`} className="block h-full flex-1" key={i}>
                <div
                  className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full h-full flex flex-col gap-4 sm:gap-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                >
                  <span className="bg-[#8DC83A40] px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                    Case Study
                  </span>

                  <img
                    src={caseStudy.image}
                    className="rounded-xl h-[180px] sm:h-[200px] lg:h-[250px] object-cover w-full"
                  />

                  <h3 className="font-bold text-base sm:text-lg">{caseStudy.title}</h3>

                  <p className="text-sm leading-6 sm:leading-7">{caseStudy.description}</p>

                  <span className="text-[#8DC83A] font-bold text-sm sm:text-base mt-auto">
                    {caseStudy.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CaseStudy;

import React from 'react';

const WfcTeam = () => {
  return (
    <>
      <section className="wfc-team-section py-10 px-4 md:py-16 md:px-[5%] pb-16 md:pb-[8rem] max-w-[1600px] mx-auto">
        <div className="wfc-team-inner grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-12 lg:gap-[100px] items-stretch">
          <div className="wfc-team-image-col w-full h-[300px] sm:h-[400px] lg:h-[430px]">
            <img
              src="/whyFarmCult/icons/farmCultLogoPic.png"
              alt="Farmcult Team"
              className="w-full h-full object-cover rounded-2xl md:rounded-[32px]"
            />
          </div>
          <div className="wfc-team-text-col mt-4 lg:mt-0">
            <h2 className="wfc-section-heading text-[24px] md:text-[32px] font-medium mb-6 md:mb-8 md:leading-[48px] leading-[32px] text-black">
              The People Behind the Farms
            </h2>
            <div className="wfc-founder-tag inline-flex py-2 px-[1.2rem] bg-accent/25 text-black rounded-full font-primary text-[0.85rem] md:text-[0.9rem] mb-8 md:mb-10">
              <span className='font-normal text-[15px]'>Our Team</span>
            </div>
            <p className="wfc-foundation-desc text-[16px] md:text-[15px] text-text-primary leading-[1.8] md:leading-[29px] mb-6 md:mb-8">
              Behind every greenhouse is a team of planners, engineers, agronomists, and operators working together.
            </p>
            <p className="wfc-foundation-desc text-[16px] md:text-[15px] text-text-primary leading-[1.8] md:leading-[29px] mb-6 md:mb-8">
              From feasibility assessments to system installation and farm monitoring, our team ensures that every project runs with clarity and discipline.
            </p>
            <p className="wfc-foundation-desc text-[16px] md:text-[15px] text-text-primary leading-[1.8] md:leading-[29px] mb-0">
              We combine on-ground agricultural knowledge with modern technology systems to deliver consistent performance.
            </p>
          </div>
        </div>
      </section>

      <section className="wfc-team-cards-section px-4 md:px-[5%] pb-16 md:pb-[4rem] mx-auto">

        <div className="flex flex-col gap-y-16">

          {/* ROW 1 */}
          <div className="flex justify-center gap-20 flex-wrap">

            {[
              {
                name: 'Pritpal Singh',
                role: 'Founder & CEO',
                image: '/whyFarmCult/PritpalSingh.jpg',
                linkedin: 'https://www.linkedin.com/in/pritpalsingh2610'
              },
              {
                name: 'Sanampreet Singh',
                role: 'Manager: Projects & Business Development',
                image: '/whyFarmCult/teamSanampreet.jpg',
                linkedin: 'https://www.linkedin.com/in/sanam403'
              },
              {
                name: 'Harleen Alagh',
                role: 'Business Development Manager',
                image: '/whyFarmCult/Harleen.jpg',
                linkedin: 'https://www.linkedin.com/in/harleen-alagh-122271394'
              },
              {
                name: 'Dr Akshiptika Chandel',
                role: 'Head- Research and Training',
                image: '/whyFarmCult/DrAkshiptika.jpg',
                linkedin: 'https://www.linkedin.com/in/dr-akshiptika-chandel-2540a221b'
              },
            ].map((member, i) => (
              <div className="wfc-team-card flex flex-col items-center w-[250px]" key={i}>

                <div className="wfc-team-avatar-container w-full aspect-square rounded-full overflow-hidden mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <div className="wfc-team-info-box bg-white rounded-[24px] p-5 w-full flex flex-col items-center shadow-sm">
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="font-bold text-black">{member.name}</span>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/whyFarmCult/icons/linkedin.png"
                        className="w-5 h-5 cursor-pointer"
                        alt="LinkedIn"
                      />
                    </a>

                  </div>

                  <div className="w-full min-h-[52px] flex items-center py-2 px-4 bg-[#8DC83A]/25 rounded-[12px] text-left text-[14px] leading-[20px]">
                    {member.role}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex justify-center gap-20 flex-wrap">

            {[
              {
                name: 'Subhajit Mukherjee',
                role: 'Procurement Manager',
                image: '/whyFarmCult/SubhajitM.jpg',
                linkedin: 'https://www.linkedin.com/in/subhajit-mukherjee-917ab8290'
              },
              {
                name: 'Aman Chandra',
                role: 'Sr Agronomist',
                image: '/whyFarmCult/Aman.jpg',
                linkedin: 'https://www.linkedin.com/in/aman-chandra-%F0%9F%A5%AC%F0%9F%AB%91%F0%9F%8D%83-02083b221'
              },
              {
                name: 'Aditya Rathi',
                role: 'Jr Agronomist',
                image: '/whyFarmCult/AdityaRathi.jpg',
                linkedin: 'https://www.linkedin.com/in/aditya-rathi-2b6b80375'
              }
            ].map((member, i) => (
              <div className="wfc-team-card flex flex-col items-center w-[250px]" key={i}>

                <div className="wfc-team-avatar-container w-full aspect-square rounded-full overflow-hidden mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-fill" />
                </div>

                <div className="wfc-team-info-box bg-white rounded-[24px] p-5 w-full flex flex-col items-center shadow-sm">
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="font-bold text-black">{member.name}</span>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/whyFarmCult/icons/linkedin.png"
                        className="w-5 h-5 cursor-pointer"
                        alt="LinkedIn"
                      />
                    </a>

                  </div>

                  <div className="w-full py-2 px-4 bg-[#8DC83A]/25 rounded-[12px] text-left text-sm">
                    {member.role}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>
    </>
  );
};

export default WfcTeam;

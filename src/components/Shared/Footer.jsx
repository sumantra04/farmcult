import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'Passive Income', path: '/passive-income' },
        { label: 'Turnkey Solution', path: '/turnkey-solution' },
        { label: 'Education & Training', path: '/education-and-training' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blogs', path: '/blogs' },
        { label: 'Case-studies', path: '/case-studies' },
      ]
    },
    {
      title: 'Discover',
      links: [
        { label: 'Why Farmcult', path: '/why-farmcult' },
        { label: 'Technology', path: '/technology' },
      ]
    },
    {
      title: 'Social Media',
      links: [
        { label: 'Instagram', path: 'https://www.instagram.com/farmcult_?igsh=MWwxNDhteXM4N3YyaA==' },
        { label: 'Linked-in', path: 'https://www.linkedin.com/company/farmcult/' },
        { label: 'Facebook', path: 'https://www.facebook.com/share/18Fqqt1Gua/?mibextid=LQQJ4d' },
      ]
    }
  ];

  return (
    <footer className="footer-section bg-[#F7F7F7] pt-20 flex flex-col min-h-[50vh]">
      <div className="container mx-auto px-[2%] flex-1 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Logo and Tagline Section */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-block mb-10">
              <img src="/Shared/Farmcult_Logo.png" alt="Farmcult Logo" className="h-10 lg:h-12" />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-15">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="footer-col">
                <span className="block text-[14px] font-normal text-[#343434] mb-8 uppercase tracking-wider font-inter">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-6">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.path.startsWith('http') ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[18px] md:text-[18px] font-normal text-[#343434] hover:text-accent transition-colors font-inter "
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-[18px] md:text-[18px] font-normal text-[#343434] hover:text-accent transition-colors font-inter"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-accent py-6 px-[5%] w-full">
        <p className="text-[#343434] font-medium text-base">
          © Farmcult {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

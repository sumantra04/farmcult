import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useGSAP(() => {
    // Initial entrance animation
    gsap.fromTo('.nav-logo, .nav-link, .btn-outline',
      { y: -12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: 'expo.out', delay: 0.1 }
    );
  }, { scope: navRef, dependencies: [] });

  useGSAP(() => {
    // Visibility toggle animation - Refined for "fluidity"
    gsap.to(navRef.current, {
      y: isVisible || mobileMenuOpen ? 0 : -110, // Hide a bit further to ensure shadow is gone, don't hide if menu open
      duration: 0.6,
      ease: 'expo.out', // Premium, decelerating feel
      overwrite: true
    });
  }, { dependencies: [isVisible, mobileMenuOpen] });

  return (
    <>
      <nav
        className={`nav-container fixed top-0 w-full z-[110] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] left-0 bg-white/95 backdrop-blur-md shadow-sm py-4 px-4 md:px-[5%]`}
        ref={navRef}
      >
        {/* Wrapper to maintain max-width behavior on fixed element */}
        <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto relative z-[110]">
          {/* Logo Column */}
          <div className="nav-col nav-logo-col flex-1 flex justify-start">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/Shared/Farmcult_Logo.png" alt="Farmcult Logo" className="nav-logo h-8 md:h-12 relative -top-1 md:-top-1.5" />
            </Link>
          </div>

          {/* Links Column - Desktop Only */}
          <div className="nav-col nav-links-col hidden lg:flex flex-1 justify-center">
            <div className="nav-links flex gap-10 items-center">
              <div className="nav-item group relative py-4">
                <button type="button" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent block cursor-pointer">
                  Solutions
                </button>
                <div className="absolute top-full left-0 w-[220px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <Link to="/passive-income" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Passive Income</Link>
                  <Link to="/turnkey-solution" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Turnkey Solution</Link>
                  <Link to="/education-and-training" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Education & Training</Link>
                </div>
              </div>
              <Link to="/why-farmcult" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent block cursor-pointer">
                Why Farmcult
              </Link>
              <Link to="/technology" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent block cursor-pointer">
                Technology
              </Link>
              <div className="nav-item group relative py-4">
                <button type="button" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent block cursor-pointer">
                  Resources
                </button>
                <div className="absolute top-full left-0 w-[220px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <Link to="/blogs" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Blogs</Link>
                  <Link to="/case-studies" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Case Studies</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Button Column - Desktop Only */}
          <div className="nav-col nav-btn-col hidden lg:flex flex-1 justify-end items-center gap-6">
            <a
              href="https://wa.me/919041104230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8DC83A] hover:text-[#8DC83A] transition-all duration-300 transform hover:scale-110 flex items-center justify-center nav-link"
              aria-label="WhatsApp Contact"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.55 4.185 1.595 6.007L0 24l6.108-1.602c1.761.968 3.738 1.48 5.923 1.48 6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm6.657 17.15c-.282.795-1.636 1.492-2.274 1.543-.59.048-1.353.155-3.92-1.026-3.13-1.442-5.115-4.66-5.267-4.862-.152-.202-1.259-1.68-1.259-3.208 0-1.528.796-2.28 1.08-2.585.284-.305.617-.382.82-.382.203 0 .406 0 .584.009.186.009.435-.07.662.48.236.574.81 1.983.882 2.135.071.152.12.33.02.533-.102.203-.153.33-.306.51-.153.18-.316.38-.45.506-.144.136-.296.284-.131.57.165.286.736 1.218 1.583 1.976 1.096.977 2.012 1.282 2.298 1.417.286.136.452.11.62-.085.168-.195.727-.845.92-1.137.193-.292.385-.245.645-.148.26.097 1.645.776 1.926.917.281.14.468.21.536.326.068.116.068.67-.214 1.465z" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.lenis?.scrollTo('#contact');
              }}
              className="btn-outline group border border-border-color rounded-[40px] py-[0.6rem] px-6 font-medium text-[0.95rem] text-text-primary bg-transparent whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-text-primary hover:text-bg-color hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(52,52,52,0.15)]"
            >
              <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
                <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                  Free Consultation
                </span>
                <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                  Free Consultation
                </span>
              </span>
            </a>
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <div className="lg:hidden flex justify-end flex-1 items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-primary z-[120] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-[100vh]'}`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-medium w-full px-6 text-center">
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => {
                setMobileSolutionsOpen(!mobileSolutionsOpen);
                if (!mobileSolutionsOpen) setMobileResourcesOpen(false);
              }}
              className="nav-link-mobile outline-none transition-colors hover:text-accent w-full py-2 flex items-center justify-center gap-2"
            >
              Solutions
              <svg className={`w-6 h-6 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex flex-col items-center w-full overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-[200px] opacity-100 mt-4 gap-4' : 'max-h-0 opacity-0'}`}>
              <Link to="/passive-income" onClick={() => setMobileMenuOpen(false)} className="text-xl text-text-primary hover:text-accent transition-colors w-full py-1">Passive Income</Link>
              <Link to="/turnkey-solution" onClick={() => setMobileMenuOpen(false)} className="text-xl text-text-primary hover:text-accent transition-colors w-full py-1">Turnkey Solution</Link>
              <Link to="/education-and-training" onClick={() => setMobileMenuOpen(false)} className="text-xl text-text-primary hover:text-accent transition-colors w-full py-1">Education & Training</Link>
            </div>
          </div>
          <Link to="/why-farmcult" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Why Farmcult</Link>
          <Link to="/technology" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Technology</Link>
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => {
                setMobileResourcesOpen(!mobileResourcesOpen);
                if (!mobileResourcesOpen) setMobileSolutionsOpen(false);
              }}
              className="nav-link-mobile outline-none transition-colors hover:text-accent w-full py-2 flex items-center justify-center gap-2"
            >
              Resources
              <svg className={`w-6 h-6 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex flex-col items-center w-full overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? 'max-h-[200px] opacity-100 mt-4 gap-4' : 'max-h-0 opacity-0'}`}>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-xl text-text-primary hover:text-accent transition-colors w-full py-1">Blogs</Link>
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-xl text-text-primary hover:text-accent transition-colors w-full py-1">Case Studies</Link>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://wa.me/919041104230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8DC83A] hover:text-[#8DC83A] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="WhatsApp Contact"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.55 4.185 1.595 6.007L0 24l6.108-1.602c1.761.968 3.738 1.48 5.923 1.48 6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm6.657 17.15c-.282.795-1.636 1.492-2.274 1.543-.59.048-1.353.155-3.92-1.026-3.13-1.442-5.115-4.66-5.267-4.862-.152-.202-1.259-1.68-1.259-3.208 0-1.528.796-2.28 1.08-2.585.284-.305.617-.382.82-.382.203 0 .406 0 .584.009.186.009.435-.07.662.48.236.574.81 1.983.882 2.135.071.152.12.33.02.533-.102.203-.153.33-.306.51-.153.18-.316.38-.45.506-.144.136-.296.284-.131.57.165.286.736 1.218 1.583 1.976 1.096.977 2.012 1.282 2.298 1.417.286.136.452.11.62-.085.168-.195.727-.845.92-1.137.193-.292.385-.245.645-.148.26.097 1.645.776 1.926.917.281.14.468.21.536.326.068.116.068.67-.214 1.465z" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => window.lenis?.scrollTo('#contact'), 300); // Wait for menu to close
              }}
              className="inline-block border border-border-color rounded-[40px] py-[0.6rem] px-5 text-base font-medium text-text-primary bg-transparent whitespace-nowrap transition-transform active:scale-95"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

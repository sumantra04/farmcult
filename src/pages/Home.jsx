import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import RiseOfFarming from '../components/Home/RiseOfFarming';
import Solutions from '../components/Home/Solutions';
import SmartTechnology from '../components/Home/SmartTechnology';
import CaseStudy from '../components/Home/CaseStudy';
import FarmcultMedia from '../components/Home/FarmcultMedia';
import ParticipantsReviews from '../components/Home/ParticipantsReviews';
import FAQ from '../components/Home/FAQ';
import ContactSection from '../components/Shared/ContactSection';
import Footer from '../components/Shared/Footer';

// FIX 1: Removed 'y' offset from pageTransition. 
// Framer Motion translating the wrapper while GSAP translates the children 
// creates nested transform conflicts (stuttering) on load.
const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      // Define breakpoints
      isDesktop: "(min-width: 1024px)",
      isTablet: "(min-width: 768px) and (max-width: 1023px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isTablet, isMobile } = context.conditions;

      // Adjust animation values based on breakpoint
      let yVal = isMobile ? 15 : isTablet ? 25 : 30;
      let heroYVal = isMobile ? 30 : isTablet ? 45 : 60;
      let durationVal = isMobile ? 0.8 : 1.1;
      let staggerVal = isMobile ? 0.08 : 0.12;
      let staggerFast = isMobile ? 0.1 : 0.15;

      // Hero text — begins as navbar finishes its stagger for a seamless 2nd beat
      gsap.fromTo('.hero-title, .hero-subtitle, .btn-filled', 
        { y: yVal, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: durationVal, stagger: staggerVal, ease: 'power3.out', delay: 0.4 }
      );

      // Hero image — 3rd beat, rises as the text settles
      gsap.fromTo('.hero-image-wrapper',
        { y: heroYVal, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: isMobile ? 1 : 1.4, ease: 'power3.out', delay: 0.65 }
      );

      // Parallax Effect on Hero Image
      // Scale down parallax on mobile or simplify it for better performance
      if (!isMobile) {
        gsap.to('.hero-bg-img', {
          scrollTrigger: {
            trigger: '.hero-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
          y: isTablet ? 100 : 150,
          scale: 1.05,
          ease: 'none', // FIX 2: Added ease: 'none' so the parallax doesn't lag behind the scrollbar
        });
      }

      // About Section Animations
      gsap.fromTo('.about-header-text, .about-header-link',
        { y: yVal, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: '.about-container', start: 'top 80%' },
          y: 0, autoAlpha: 1, duration: isMobile ? 0.8 : 1, stagger: staggerVal, ease: 'power3.out'
        }
      );

      gsap.fromTo('.feature-item',
        { y: isMobile ? 15 : 20, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: '.about-features-panel', start: 'top 85%' },
          y: 0, autoAlpha: 1, duration: isMobile ? 0.6 : 0.8, stagger: staggerFast, ease: 'power2.out'
        }
      );

      // Rise of Farming Animations
      gsap.fromTo('.rise-title, .rise-desc',
        { y: yVal, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: '.rise-container', start: 'top 75%' },
          y: 0, autoAlpha: 1, duration: isMobile ? 0.8 : 1, stagger: staggerVal, ease: 'power3.out'
        }
      );

      gsap.fromTo('.state-capsule',
        { scale: isMobile ? 0.9 : 0.8, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: '.states-capsule-grid', start: 'top 85%' },
          scale: 1, autoAlpha: 1, duration: isMobile ? 0.4 : 0.6, stagger: isMobile ? 0.03 : 0.05, ease: 'back.out(1.5)'
        }
      );

      gsap.fromTo('.stat-card',
        { y: heroYVal, autoAlpha: 0 },
        {
          scrollTrigger: { trigger: '.rise-stats-grid', start: 'top 90%' },
          y: 0, autoAlpha: 1, duration: isMobile ? 0.6 : 0.8, stagger: staggerFast, ease: 'power3.out'
        }
      );
    });
  }, { scope: homeRef });

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={homeRef}
      className="relative w-full overflow-hidden" // Prevents horizontal scrolling across components
      // FIX 3: Accurately recalculates trigger positions once the entrance fade is totally finished
      onAnimationComplete={() => ScrollTrigger.refresh()}
    >
      <Hero />
      <About />
      <RiseOfFarming />
      <Solutions />
      <SmartTechnology />
      <CaseStudy />
      <FarmcultMedia />
      <ParticipantsReviews />
      <FAQ />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WfcHeader from '../components/WhyFarmcult/WfcHeader';
import WfcHero from '../components/WhyFarmcult/WfcHero';
import WfcFeatures from '../components/WhyFarmcult/WfcFeatures';
import WfcFoundation from '../components/WhyFarmcult/WfcFoundation';
import WfcRealStories from "../components/WhyFarmcult/WfcRealStories";
import ParticipantsReviews from '../components/Home/ParticipantsReviews';
/*import WfcBanner from '../components/WhyFarmcult/WfcBanner';*/
import WfcTeam from '../components/WhyFarmcult/WfcTeam';
import ContactSection from '../components/Shared/ContactSection';
import Footer from '../components/Shared/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

const WhyFarmcult = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero image reveal on scroll
    gsap.fromTo('.wfc-hero-image',
      { clipPath: 'inset(10% 20% 10% 20% round 0px)', autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.wfc-hero-image-section', start: 'top 85%' },
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        autoAlpha: 1,
        duration: 1.5,
        ease: 'power4.inOut'
      }
    );

    // Feature cards
    gsap.fromTo('.wfc-feature-card',
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.wfc-features-grid', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power2.out'
      }
    );

    // Foundation text
    gsap.fromTo('.wfc-section-heading, .wfc-founder-tag, .wfc-foundation-desc',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.wfc-foundation-section', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
      }
    );

    // Team cards
    gsap.fromTo('.wfc-team-card',
      { scale: 0.9, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.wfc-team-cards-grid', start: 'top 85%' },
        scale: 1, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out'
      }
    );


    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, { scope: containerRef });

  return (
    <motion.div 
      className="why-farmcult-page w-full" 
      ref={containerRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => ScrollTrigger.refresh()}
    >
      <WfcHeader />
      <WfcHero />
      <WfcFeatures />
      <WfcFoundation />
      <WfcRealStories />
      <ParticipantsReviews/>
      <WfcTeam />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default WhyFarmcult;

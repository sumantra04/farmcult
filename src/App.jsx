import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Shared/Navbar';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const WhyFarmcult = lazy(() => import('./pages/WhyFarmcult'));
const Technology = lazy(() => import('./pages/Technology'));
const PassiveIncome = lazy(() => import('./pages/PassiveIncome'));
const TurnkeySolution = lazy(() => import('./pages/TurnkeySolution'));
const EducationTraining = lazy(() => import('./pages/EducationTraining'));
const Blogs = lazy(() => import('./pages/Blogs'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blog = lazy(() => import('./pages/[...Blog]'));
const CaseStudy = lazy(() => import('./pages/[...CaseStudy]'));
const NotFound = lazy(() => import('./pages/NotFound'));

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component to manage scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if not navigating via back/forward browser buttons
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);

      // Instantly reset Lenis scroll position if it exists
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }

      ScrollTrigger.refresh();
    }
  }, [pathname, navigationType]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const showBanner = location.pathname !== '/';

  return (
    <>
      {showBanner && (
        <div className="w-full pt-[75px] md:pt-[80px] z-50 relative bg-white">
          {/* <TopBanner /> */}
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<div className="min-h-screen w-full bg-transparent"></div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/passive-income" element={<PassiveIncome />} />
            <Route path="/turnkey-solution" element={<TurnkeySolution />} />
            <Route path="/education-and-training" element={<EducationTraining />} />
            <Route path="/why-farmcult" element={<WhyFarmcult />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

function App() {
  const containerRef = useRef();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    window.lenis = lenis;

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <div className="overflow-clip min-h-screen relative" ref={containerRef}>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

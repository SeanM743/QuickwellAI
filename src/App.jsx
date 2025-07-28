import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useScroll } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WhyQuickBindSection from '@/components/sections/WhyQuickBindSection';
import PipelineDeepDiveSection from '@/components/sections/PipelineDeepDiveSection';
import AnimationStrip from '@/components/sections/AnimationStrip';
import UseCaseCarousel from '@/components/sections/UseCaseCarousel';
import PlatformRoadmap from '@/components/sections/PlatformRoadmap';
import TeamSection from '@/components/sections/TeamSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsNavShrunk(window.scrollY > 100);
      
      const elements = document.querySelectorAll('.scroll-fade-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Antibody Design | QuickwellAI</title>
        <meta name="description" content="Accelerate human health by shrinking antibody discovery from years to <4 weeks through intelligent automation and precision biotechnology with QuickBind™ engine." />
        <meta name="keywords" content="AI antibody design, in-silico antibodies, machine learning biotech, QuickBind, diagnostic antibodies" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Navbar 
          isNavShrunk={isNavShrunk} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
        
        <HeroSection scrollY={scrollY} />
        
        <WhyQuickBindSection />
        
        <PipelineDeepDiveSection />
        
        <AnimationStrip />
        
        <UseCaseCarousel />
        
        <PlatformRoadmap />
        
        <TeamSection />
        
        <ResourcesSection />
        
        <ContactSection />
        
        <Footer />

        <Toaster />
      </div>
    </>
  );
}

export default App;
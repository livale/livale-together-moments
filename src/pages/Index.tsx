
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import FeatureSection1 from '@/components/FeatureSection1';
import FeatureSection2 from '@/components/FeatureSection2';
import FeatureSection3 from '@/components/FeatureSection3';
import WaitlistSection from '@/components/WaitlistSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <WaitlistSection />
    </div>
  );
};

export default Index;

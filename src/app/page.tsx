'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('@/components/LandingPage'), { ssr: false });
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigateToPortfolioAction = () => {
    setShowLanding(false);
  };

  const handleBackToLandingAction = () => {
    setShowLanding(true);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showLanding ? (
        <LandingPage onNavigateToPortfolioAction={handleNavigateToPortfolioAction} />
      ) : (
        <>
          <Navigation onBackToLandingAction={handleBackToLandingAction} />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          {/* <ProjectsSection /> */}
          {/* <StatsSection /> */}
          {/* <CertificatesSection /> */}
          {/* <BlogSection /> */}
          <ContactSection />
        </>
      )}
    </>
  );
}
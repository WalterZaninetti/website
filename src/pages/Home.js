import React from "react";

import NavigationBar from "../components/layouts/navigation/NavigationBar";
import Footer from "../components/layouts/navigation/Footer";
import FeatureSection from "../components/homepage/FeatureSection";
import CtaSection from "../components/homepage/CtaSection";
import HeroSection from "../components/homepage/HeroSection";
import BioSection from "../components/homepage/BioSection";

export default function Home() {
  return (
    <div className="bg-walter-light">
      <NavigationBar />
      <main>
        <HeroSection />
        <BioSection />
        <FeatureSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

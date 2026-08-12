import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionStatement from '../components/MissionStatement';
import ComingUp from '../components/ComingUp';
import TwoProducts from '../components/TwoProducts';
import WhyIvish from '../components/WhyIvish';
import FAQ from '../components/Faq';
import ClosingCTA from '../components/ClosingCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: The Vision */}
      <MissionStatement />

      {/* Section 3: The Layers of Industry 6.0 */}
      <ComingUp />

      {/* Section 4: Two Products */}
      <TwoProducts />

      {/* Section 5: Why IvishAI */}
      <WhyIvish />

      {/* Section 6: FAQ */}
      <FAQ />

      {/* Section 7: Closing CTA */}
      <ClosingCTA />

      <Footer />
    </div>
  );
};

export default Home;

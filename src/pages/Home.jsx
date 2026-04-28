import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionStatement from '../components/MissionStatement';
import ComingUp from '../components/ComingUp';
import TwoProducts from '../components/TwoProducts';
import WhyIvish from '../components/WhyIvish';
import WhoWeHaveMet from '../components/WhoWeHaveMet';
import FAQ from '../components/Faq';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Who We Are */}
      <MissionStatement />

      {/* Section 3: The 6 Pillars of Industry 6.0 */}
      <ComingUp />

      {/* Section 4: Two Products */}
      <TwoProducts />

      {/* Section 5: Why IvishAI Quantum */}
      <WhyIvish />

      {/* Section 6: Who We Have Met */}
      <WhoWeHaveMet />

      {/* Section 7: FAQ */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ComingUp from '../components/ComingUp';
import MissionStatement from '../components/MissionStatement';

import WhyIvish from '../components/WhyIvish';
import Footer from '../components/Footer';

import FAQ from '../components/Faq';


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F4F8] to-[#FFFFFF] min-h-screen text-[#1E293B]">
      <Header /> 

 
      <HeroSection />


      

      <MissionStatement />

      <ComingUp />

       
      <WhyIvish />





      <FAQ />
      
      <Footer />
    </div>
  );
};

export default Home;

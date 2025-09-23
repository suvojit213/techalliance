import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleGetStartedClick = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 rounded-3xl p-8 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="h-5 w-5 text-accent-300" />
          <span className="text-primary-100 font-medium">Featured Post</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Welcome to Tech Alliance! 🚀
        </h2>
        <p className="text-xl text-primary-100 mb-6 leading-relaxed">
          Your ultimate hub for apps, tech updates, and website guides. Whether you're a tech enthusiast, 
          a gadget lover, or someone looking to explore the digital world, you're in the right place!
        </p>
        <button 
          onClick={handleGetStartedClick}
          className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
        >
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  );
};

export default HeroSection;

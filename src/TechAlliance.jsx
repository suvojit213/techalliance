import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Categories from './components/Categories.jsx';
import MainContent from './components/MainContent.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import { Smartphone, Laptop, Gamepad2, Headphones } from 'lucide-react';

const TechAlliance = () => {
  const categories = [
    { name: 'Smartphones', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Laptops', icon: Laptop, color: 'text-purple-500' },
    { name: 'Gaming', icon: Gamepad2, color: 'text-green-500' },
    { name: 'Audio', icon: Headphones, color: 'text-red-500' }
  ];

  const trendingTopics = [
    'iPhone 16 Pro Review',
    'Best Gaming Laptops 2025',
    'AI Apps for Productivity',
    'Smart Home Gadgets',
    'Wireless Earbuds Guide'
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <HeroSection />
            <Categories categories={categories} />
            <MainContent />
          </div>
          <Sidebar trendingTopics={trendingTopics} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechAlliance;

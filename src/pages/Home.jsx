import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import { Smartphone, Laptop, Gamepad2, Headphones } from 'lucide-react';

const Home = () => {
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
  );
};

export default Home;

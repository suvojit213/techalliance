import React from 'react';
import { TrendingUp, Smartphone, Laptop, Star, Clock, Eye } from 'lucide-react';

const MainContent = () => {
  return (
    <div className="lg:col-span-3 space-y-8">
      {/* Main Post */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Our Main Goals</h3>
            <p className="text-gray-500 dark:text-gray-400">What Tech Alliance offers to the community</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Latest Apps & Tools</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Stay updated with the newest apps and digital tools.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tech News & Updates</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">From smartphones to software updates, get it all in one place.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <Laptop className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Website Guides & Tutorials</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Learn how to make the most out of apps, websites, and tech services.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <Star className="h-5 w-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Grow & Stay Ahead</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Tips, tricks, and guides to help you stay smart and tech-savvy.</p>
          </div>
        </div>
      </div>

      {/* First Post Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">First Post Sneak Peek</h3>
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Coming Soon
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
          <h4 className="text-xl font-bold mb-3">Top 5 Apps to Boost Productivity in 2025</h4>
          <p className="text-blue-100 mb-4">
            This is just a glimpse of the quality guides and tech updates you'll find regularly on Tech Alliance.
          </p>
          <div className="flex items-center space-x-4 text-blue-200 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </div>
          </div>
        </div>
      </div>

      {/* Development Notice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">⚠️</span>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Under Development</h4>
            <p className="text-amber-600 dark:text-amber-300">
              The website is under development, so stay tuned for more exciting updates, articles, and tech insights!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

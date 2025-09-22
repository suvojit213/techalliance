import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Calendar, User, ArrowRight, Smartphone, Laptop, Gamepad2, Headphones, Star, TrendingUp, Clock, Eye } from 'lucide-react';

const TechAlliance = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tech Alliance
                </h1>
                <p className="text-xs text-gray-500">Tech lovers + gadgets + knowledge hub</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">News</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Guides</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Apps</a>
            </nav>

            {/* Search & Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search tech news..." 
                  className="bg-transparent border-none outline-none text-sm w-48"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">News</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Guides</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Apps</a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="text-blue-100 font-medium">Featured Post</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  Welcome to Tech Alliance! 🚀
                </h2>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Your ultimate hub for apps, tech updates, and website guides. Whether you're a tech enthusiast, 
                  a gadget lover, or someone looking to explore the digital world, you're in the right place!
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-4 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 group"
                  >
                    <div className={`w-12 h-12 ${category.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-500 text-sm">Latest updates & reviews</p>
                  </div>
                );
              })}
            </div>

            {/* Main Post */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Main Goals</h3>
                  <p className="text-gray-500">What Tech Alliance offers to the community</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Latest Apps & Tools</h4>
                  <p className="text-gray-600 text-sm">Stay updated with the newest apps and digital tools.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tech News & Updates</h4>
                  <p className="text-gray-600 text-sm">From smartphones to software updates, get it all in one place.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Laptop className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Website Guides & Tutorials</h4>
                  <p className="text-gray-600 text-sm">Learn how to make the most out of apps, websites, and tech services.</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Grow & Stay Ahead</h4>
                  <p className="text-gray-600 text-sm">Tips, tricks, and guides to help you stay smart and tech-savvy.</p>
                </div>
              </div>
            </div>

            {/* First Post Preview */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">First Post Sneak Peek</h3>
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
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚠️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Under Development</h4>
                  <p className="text-amber-600">
                    The website is under development, so stay tuned for more exciting updates, articles, and tech insights!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Time Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4">Current Time</h4>
              <div className="text-2xl font-bold text-blue-600">
                {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
              <div className="text-gray-500 text-sm mt-1">
                {currentTime.toLocaleDateString([], {weekday: 'long', month: 'short', day: 'numeric'})}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4">Trending Topics</h4>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-purple-100 text-sm">Posts Published</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-purple-100 text-sm">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-purple-100 text-sm">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tech Alliance</h3>
                  <p className="text-gray-400 text-sm">Tech lovers + gadgets + knowledge hub</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for the latest tech news, gadget reviews, and digital guides.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 Tech Alliance. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2 text-gray-400">
                <div>Smartphones</div>
                <div>Laptops</div>
                <div>Gaming</div>
                <div>Audio</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <div>Reviews</div>
                <div>News</div>
                <div>Guides</div>
                <div>Apps</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechAlliance;
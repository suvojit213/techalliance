import React, { useState, useEffect } from 'react';

const Sidebar = ({ trendingTopics }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
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
  );
};

export default Sidebar;

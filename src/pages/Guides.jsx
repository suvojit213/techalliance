import React from 'react';
import guidesData from '../data/guides.json';
import { Clock } from 'lucide-react';

const Guides = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Guides</h1>
      <div className="grid gap-8">
        {guidesData.map((guide) => (
          <div key={guide.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/3">
              <img src={guide.image} alt={guide.title} className="rounded-lg object-cover w-full h-48 sm:h-full" />
            </div>
            <div className="sm:w-2/3">
              <span className="text-sm font-medium text-green-600 bg-green-100 py-1 px-3 rounded-full">{guide.category}</span>
              <h2 className="text-xl font-bold text-gray-800 my-2">{guide.title}</h2>
              <p className="text-gray-600 mb-4">{guide.excerpt}</p>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>{guide.readTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;

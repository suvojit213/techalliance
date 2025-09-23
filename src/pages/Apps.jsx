import React from 'react';
import appsData from '../data/apps.json';
import { Download } from 'lucide-react';

const Apps = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Apps</h1>
      <div className="grid gap-8">
        {appsData.map((app) => (
          <div key={app.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/3">
              <img src={app.image} alt={app.title} className="rounded-lg object-cover w-full h-48 sm:h-full" />
            </div>
            <div className="sm:w-2/3">
              <span className="text-sm font-medium text-red-600 bg-red-100 py-1 px-3 rounded-full">{app.category}</span>
              <h2 className="text-xl font-bold text-gray-800 my-2">{app.title}</h2>
              <p className="text-gray-600 mb-4">{app.excerpt}</p>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Download className="h-4 w-4" />
                <span>{app.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;

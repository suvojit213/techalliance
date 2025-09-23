import React from 'react';
import newsData from '../data/news.json';
import { Clock, Eye } from 'lucide-react';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tech News</h1>
      <div className="grid gap-8">
        {newsData.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/3">
              <img src={article.image} alt={article.title} className="rounded-lg object-cover w-full h-48 sm:h-full" />
            </div>
            <div className="sm:w-2/3">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 py-1 px-3 rounded-full">{article.category}</span>
              <h2 className="text-xl font-bold text-gray-800 my-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/news.json';

const SingleNews = () => {
  const { id } = useParams();
  const article = newsData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 text-sm mb-8">
          <span>By {article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime} min read</span>
        </div>
        <img src={article.image} alt={article.title} className="rounded-lg object-cover w-full h-96 mb-8" />
        <div className="prose max-w-none">
          <p>{article.excerpt}</p>
          {/* Full content will be added later */}
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

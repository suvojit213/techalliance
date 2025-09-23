import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';
import SocialShare from '../components/SocialShare';
import BookmarkButton from '../components/BookmarkButton';
import Comments from '../components/Comments';
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime';

const SingleNews = () => {
  const { id } = useParams();
  const article = newsData.find((article) => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/news" 
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to News</span>
          </Link>
        </div>
      </div>
    );
  }

  const readingTime = calculateReadingTime(article.excerpt + ' ' + (article.content || ''));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link 
          to="/news" 
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to News</span>
        </Link>
      </div>

      {/* Article */}
      <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <BookmarkButton item={article} type="news" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 leading-tight">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatReadingTime(article.readTime || readingTime)}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.image && (
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title} 
              className="rounded-lg object-cover w-full h-96 shadow-md" 
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{article.excerpt}</p>
          {article.content && (
            <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SocialShare 
              url={window.location.href}
              title={article.title}
              excerpt={article.excerpt}
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published on {new Date(article.date).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </article>

      {/* Comments Section */}
      <div className="mt-12">
        <Comments className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default SingleNews;

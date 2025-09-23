import React from 'react';
import reviewsData from '../data/reviews.json';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Reviews</h1>
      <div className="grid gap-8">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/3">
              <img src={review.image} alt={review.title} className="rounded-lg object-cover w-full h-48 sm:h-full" />
            </div>
            <div className="sm:w-2/3">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 py-1 px-3 rounded-full">{review.category}</span>
              <h2 className="text-xl font-bold text-gray-800 my-2">{review.title}</h2>
              <p className="text-gray-600 mb-4">{review.excerpt}</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

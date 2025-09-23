import React from 'react';
import { useParams } from 'react-router-dom';
import reviewsData from '../data/reviews.json';
import { Star } from 'lucide-react';

const SingleReview = () => {
  const { id } = useParams();
  const review = reviewsData.find((review) => review.id === parseInt(id));

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{review.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 text-sm mb-8">
          <span>By {review.author}</span>
          <span>{review.date}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <img src={review.image} alt={review.title} className="rounded-lg object-cover w-full h-96 mb-8" />
        <div className="prose max-w-none">
          <p>{review.excerpt}</p>
          {/* Full content will be added later */}
        </div>
      </div>
    </div>
  );
};

export default SingleReview;

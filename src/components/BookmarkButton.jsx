import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { addBookmark, removeBookmark, isBookmarked } from '../utils/bookmarks';

const BookmarkButton = ({ item, type, className = '' }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(item.id, type));
  }, [item.id, type]);

  const handleBookmark = async () => {
    setLoading(true);
    
    try {
      if (bookmarked) {
        const success = removeBookmark(item.id, type);
        if (success) {
          setBookmarked(false);
        }
      } else {
        const success = addBookmark({ ...item, type });
        if (success) {
          setBookmarked(true);
        }
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBookmark}
      disabled={loading}
      className={`p-2 rounded-lg transition-colors ${bookmarked 
        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark 
        className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} 
      />
    </button>
  );
};

export default BookmarkButton;
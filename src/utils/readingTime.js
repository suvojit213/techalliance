export const calculateReadingTime = (text) => {
  if (!text) return 0;
  
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  return readingTime;
};

export const formatReadingTime = (minutes) => {
  if (minutes <= 1) return '1 min read';
  return `${minutes} min read`;
};
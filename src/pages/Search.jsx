import React from 'react';
import { useSearchParams } from 'react-router-dom';
import allData from '../data/all.json';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const allContent = [
    ...allData.news,
    ...allData.reviews,
    ...allData.guides,
    ...allData.apps,
  ];

  const filteredResults = allContent.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Search Results for "{query}"
      </h1>
      <div className="grid gap-8">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.excerpt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default Search;

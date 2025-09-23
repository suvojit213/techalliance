import React from 'react';

const Categories = ({ categories }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 group"
          >
            <div className={`w-12 h-12 ${category.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <Icon className={`h-6 w-6 ${category.color}`} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-500 text-sm">Latest updates & reviews</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tech Alliance</h3>
                <p className="text-gray-400 text-sm">Tech lovers + gadgets + knowledge hub</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for the latest tech news, gadget reviews, and digital guides.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Tech Alliance. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2 text-gray-400">
              <div>Smartphones</div>
              <div>Laptops</div>
              <div>Gaming</div>
              <div>Audio</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <div>Reviews</div>
              <div>News</div>
              <div>Guides</div>
              <div>Apps</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

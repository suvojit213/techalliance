import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-16">
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
            <p className="text-gray-400 mb-6">
              Your ultimate destination for the latest tech news, gadget reviews, and digital guides.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@techalliance.com" 
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Tech Alliance. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <div className="space-y-2 text-gray-400">
              <div className="hover:text-white transition-colors cursor-pointer">Smartphones</div>
              <div className="hover:text-white transition-colors cursor-pointer">Laptops</div>
              <div className="hover:text-white transition-colors cursor-pointer">Gaming</div>
              <div className="hover:text-white transition-colors cursor-pointer">Audio</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/reviews" className="block hover:text-white transition-colors">Reviews</Link>
              <Link to="/news" className="block hover:text-white transition-colors">News</Link>
              <Link to="/guides" className="block hover:text-white transition-colors">Guides</Link>
              <Link to="/apps" className="block hover:text-white transition-colors">Apps</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

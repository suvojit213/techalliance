import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  <Link to="/">Tech Alliance</Link>
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Tech lovers + gadgets + knowledge hub</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Home</Link>
              <Link to="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Reviews</Link>
              <Link to="/news" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">News</Link>
              <Link to="/guides" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Guides</Link>
              <Link to="/apps" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Apps</Link>
            </nav>

            {/* Search & Menu */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search tech news..." 
                  className="bg-transparent border-none outline-none text-sm w-48 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="relative z-50 h-full overflow-y-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/reviews" className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link to="/news" className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>News</Link>
            <Link to="/guides" className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Guides</Link>
            <Link to="/apps" className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Apps</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

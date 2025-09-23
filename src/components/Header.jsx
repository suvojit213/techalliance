import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">TA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <Link to="/">Tech Alliance</Link>
                </h1>
                <p className="text-xs text-gray-500">Tech lovers + gadgets + knowledge hub</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
              <Link to="/news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">News</Link>
              <Link to="/guides" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Guides</Link>
              <Link to="/apps" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Apps</Link>
            </nav>

            {/* Search & Menu */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search tech news..." 
                  className="bg-transparent border-none outline-none text-sm w-48"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600 font-medium">News</Link>
            <Link to="/guides" className="text-gray-700 hover:text-blue-600 font-medium">Guides</Link>
            <Link to="/apps" className="text-gray-700 hover:text-blue-600 font-medium">Apps</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Reviews from './pages/Reviews.jsx';
import Guides from './pages/Guides.jsx';
import Apps from './pages/Apps.jsx';
import Search from './pages/Search.jsx';
import SingleNews from './pages/SingleNews.jsx';
import SingleReview from './pages/SingleReview.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <Router basename="/techalliance">
        <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950 transition-colors pt-5">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:id" element={<SingleReview />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

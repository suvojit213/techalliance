import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Guides from './pages/Guides';
import Apps from './pages/Apps';
import Search from './pages/Search';
import SingleNews from './pages/SingleNews';
import SingleReview from './pages/SingleReview';

const App = () => {
  return (
    <ThemeProvider>
      <Router basename="/techalliance">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors">
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

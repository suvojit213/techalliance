import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

const NewsletterSubscription = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    // Simulate API call (replace with actual newsletter service)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      }
      
      setStatus('success');
      setMessage('Successfully subscribed to our newsletter!');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Stay Updated</h3>
          <p className="text-blue-100 text-sm">Get the latest tech news and reviews</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            disabled={status === 'loading'}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {status === 'loading' && (
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          )}
          {status === 'success' && <Check className="h-4 w-4" />}
          <span>
            {status === 'loading' ? 'Subscribing...' : 
             status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </span>
        </button>
        
        {message && (
          <div className={`flex items-center space-x-2 text-sm ${
            status === 'error' ? 'text-red-200' : 'text-green-200'
          }`}>
            {status === 'error' ? (
              <AlertCircle className="h-4 w-4" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterSubscription;
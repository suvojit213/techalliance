import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Comments = ({ 
  repo = 'suvojit213/techalliance', // Replace with your GitHub repo
  repoId = 'R_kgDOP02bNQ', // Replace with your repo ID
  category = 'General',
  categoryId = 'DIC_kwDOP02bNc4Cvy3I', // Replace with your category ID
  mapping = 'pathname',
  strict = '0',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  loading = 'lazy',
  className = ''
}) => {
  const { isDark } = useTheme();
  const commentsRef = useRef(null);

  useEffect(() => {
    const currentRef = commentsRef.current;

    if (!currentRef) return;

    // Clear existing comments
    currentRef.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', strict);
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', loading);
    script.crossOrigin = 'anonymous';
    script.async = true;

    currentRef.appendChild(script);

    return () => {
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, [isDark, repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, loading]);

  // Show setup instructions if repo details are not configured
  if (!repo || repo === 'username/repository' || !repoId) {
    return (
      <div className={`bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 ${className}`}>
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">ℹ️</span>
          </div>
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">Comments Setup Required</h3>
        </div>
        <div className="text-amber-700 dark:text-amber-300 text-sm space-y-2">
          <p>To enable comments, please:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Enable GitHub Discussions in your repository</li>
            <li>Get your repository ID from the Giscus app</li>
            <li>Update the Comments component with your repo details</li>
          </ol>
          <p className="mt-3">
            <a 
              href="https://giscus.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
            >
              Configure Giscus →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Comments</h3>
      <div ref={commentsRef} className="giscus-container" />
    </div>
  );
};

export default Comments;
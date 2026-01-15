
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            {/* GitHub Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            {/* Instagram Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.483.011-4.692.068-2.61.118-3.962 1.468-4.08 4.08-.057 1.208-.068 1.574-.068 4.692s.011 3.483.068 4.692c.118 2.61 1.47 3.962 4.08 4.08 1.208.057 1.574.068 4.692.068s3.483-.011 4.692-.068c2.61-.118 3.962-1.468 4.08-4.08.057-1.208.068-1.574.068-4.692s-.011-3.483-.068-4.692c-.118-2.61-1.47-3.962-4.08-4.08-1.208-.057-1.574-.068-4.692-.068zM12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.27A3.135 3.135 0 1115.135 12 3.135 3.135 0 0112 15.135zM16.965 6.405a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            {/* LinkedIn Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">&copy; 2022-2026 Shuvendu Singha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Home, User, Heart, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="backdrop-blur-sm bg-black/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-white">🏥DermaAi</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-white bg-black/40' 
                  : 'text-gray-200 hover:text-white hover:bg-black/30'
              }`}
            >
              Home
            </Link>
            
            <a 
               href="https://www.healthline.com/health/skin-disorders" 
               target="_blank"
               rel="noopener noreferrer"
               className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-200 hover:text-white hover:bg-black/30"
             >
               Analyze
             </a>

             <a 
               href="https://www.mayoclinic.org/diseases-conditions/skin-care/symptoms-causes/syc-20377869" 
               target="_blank"
               rel="noopener noreferrer"
               className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-200 hover:text-white hover:bg-black/30"
             >
               Skin Care
             </a>

            <Link 
              to="/login" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/login') 
                  ? 'text-white bg-black/40' 
                  : 'text-gray-200 hover:text-white hover:bg-black/30'
              }`}
            >
              Login
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-white bg-black/40' 
                  : 'text-gray-200 hover:text-white hover:bg-black/30'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
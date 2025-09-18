import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Home, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
             
              <span className="font-bold text-xl text-black">DermaAi</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 {
                isActive('/') 
                  ? 'text-black bg-white' 
                  : 'text-white '
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/analyze" 
              className={`flex items-center  px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 {
                isActive('/analyze')
                  ? 'text-black bg-white'
                  : 'text-black bg-white'
              }`}
            >
            
              <span>Analyze</span>
            </Link>

            <Link 
              to="/login" 
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-black "
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
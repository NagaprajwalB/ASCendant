import React from 'react';
import { useNavigate } from 'react-router-dom';

const SkinCare = () => {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Skincare Solutions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => handleRedirect('/product-analysis')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Product Analysis</h2>
            <p className="text-gray-600">
              Analyze your skincare product ingredients
            </p>
          </div>
          
          <div 
            onClick={() => handleRedirect('/routine-builder')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Routine Builder</h2>
            <p className="text-gray-600">
              Create a personalized skincare routine
            </p>
          </div>

          <div 
            onClick={() => handleRedirect('/skin-type-quiz')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Skin Type Quiz</h2>
            <p className="text-gray-600">
              Discover your skin type and concerns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;

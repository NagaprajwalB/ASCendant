import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, Zap, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: null,
      image: "/images/patient-1.jpg",
      title: "Patient: Rahul Biradar",
      description: "Helped with acne prevention"
    },
    {
      icon: null,
      image: "/images/patient-2.jpg",
      title: "Patient: Arfath",
      description: "early detection for 2nd stage cancer"
    },
    {
      icon: null,
      image: "/images/patient-3.jpg",
      title: "Patient: Anushka",
      description: "Treatment for mole removal"
    },
    {
      icon: null,
      image: "/images/patient-4.jpg",
      title: "Patient: NagaPrajwal",
      description: "Early detection of Psoriasis"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="min-h-screen">
      {}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Future of Mankind
              <span className="text-black block">Deep Analysis</span>
            </h1>
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto ">
              Identify specific concern and get high quailty recommendation. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="" 
                className="bg-black text-white btn-solid px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <span>Start Analysis</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/signup" 
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                sign up free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DermaAi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Decade of Researh Meets Medcial Advancement
            </p>
          </div>
          
          <div className="relative">
            {}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 max-w-md mx-auto">
                        <div className="w-32 h-24 rounded-lg flex items-center justify-center mx-auto mb-6 overflow-hidden">
                          {feature.image ? (
                            <img 
                              src={feature.image} 
                              alt={feature.title}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          {feature.icon && (
                            <div className={`w-full h-full rounded-full flex items-center justify-center ${feature.image ? 'hidden' : 'flex'}`} style={{backgroundColor: feature.image ? 'transparent' : 'black'}}>
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next feature"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, Zap, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-teal-50">
      {}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Convolutional Neural Network 
              <span className="text-black block">Skin Doctor Mankinds future  </span>
            </h1>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              Analyize and understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/analyze" 
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                <span>lets do it</span>
              </Link>
              <Link 
                to="/signup" 
                className=""
              >
              </Link>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose DermaAi?
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Advanced Nueral Netwok, makes you understand everything.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white hover:bg-white ">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">basic</h3>
              <p className="text-black">
                Bot1.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white ">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">medium</h3>
              <p className="text-black">
                bot2.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white ">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Expert </h3>
              <p className="text-black">
                bot3.
              </p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="py-24 bg-white from-black to-teal-600">
        <div className="">
          <h2 className="">
            Ready
          </h2>
          
          <Link 
            to="/signup" 
            className="bg-white text-black "
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Coins } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Head & Tail App
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our interactive Head & Tail game and learn more about our application.
          Navigate through different sections using the links below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          to="/about"
          className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
        >
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">About</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Learn more about our application, its features, and the technology behind it.
              Discover what makes this Head & Tail game special.
            </p>
            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link
          to="/head-tail"
          className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-300"
        >
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                <Coins className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Head & Tail Game</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Experience our interactive Head & Tail game with dynamic column creation.
              Select H or T and watch as columns build organically based on your choices.
            </p>
            <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
              <span>Start Playing</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Choose your path and explore what our application has to offer. Whether you want to learn more
            about us or jump straight into the game, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Info className="w-4 h-4 mr-2" />
              About Us
            </Link>
            <Link
              to="/head-tail"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Coins className="w-4 h-4 mr-2" />
              Play Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
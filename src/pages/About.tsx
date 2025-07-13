import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Application</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to our Head & Tail application! This project demonstrates modern web development
          practices while providing an engaging interactive experience through a unique take on the
          classic coin flip concept.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Makes This Special</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our Head & Tail game goes beyond simple coin flipping. Instead of random outcomes, you have
          complete control over your choices. The innovative column-based display system creates
          dynamic patterns based on your selections, making each session unique and visually interesting.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The application features a sophisticated routing system that allows seamless navigation
          between different sections. Whether you're exploring the game mechanics or learning about
          the technology behind it, the experience is designed to be smooth and intuitive.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Built with performance and accessibility in mind, this application showcases how modern
          web technologies can be used to create engaging user experiences while maintaining
          clean, maintainable code architecture.
        </p>
      </div>

    </div>
  );
};

export default About;
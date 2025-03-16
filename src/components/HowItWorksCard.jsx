import React from 'react';

const HowItWorksCard = ({ step, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-blue-500 font-bold">{step}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
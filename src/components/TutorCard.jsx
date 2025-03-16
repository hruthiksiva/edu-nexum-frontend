import React from 'react';

const TutorCard = ({ name, subject, rating, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{subject}</p>
      <div className="flex justify-center items-center mt-2">
        <span className="text-yellow-500">★ {rating}</span>
      </div>
      <p className="mt-2 text-gray-800">₹{price}/hr</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Try Now
      </button>
    </div>
  );
};

export default TutorCard;
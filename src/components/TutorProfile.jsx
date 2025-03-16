import React from 'react'

const TutorProfile = ({ image, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt="Tutor Profile" className="w-full h-48 object-cover mb-4 rounded" />
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
        View Profile
      </button>
    </div>
  );

export default TutorProfile
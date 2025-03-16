import React from 'react'

const TutorCard2 = ({ name, image, description, price, onBook }) => {
  return (
    <div>
        <div className="bg-blue-700 text-white p-4 rounded-lg shadow-md">
            <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-center">{name}</h3>
            <p className="text-sm text-center mb-2">{description}</p>
            <p className="text-center font-bold mb-2">₹{price}</p>
            <button
            onClick={onBook}
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
            >
            Book Now
            </button>
        </div>
    </div>
  )
}

export default TutorCard2
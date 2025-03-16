import React from 'react'

const SearchBar = () => {
  return (
    <div>
  <div className="p-6">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">ONLINE ENGLISH TUTORS & TEACHERS FOR PRIVATE LESSONS</h2>
        <div>
            <span>Filters applied: Status - 3 selected | Sender - 2 selected</span>
            <button className="ml-2 text-blue-600">Clear all filters</button>
        </div>
        </div>
        <input
        type="text"
        placeholder="Type search"
        className="w-full p-2 border rounded"
        />
    </div>
    </div>
  )
}

export default SearchBar
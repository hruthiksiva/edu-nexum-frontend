import React from 'react'

const HeroSection2 = () => {
  return (
    <div>
        <section className="bg-blue-600 text-white p-6 flex items-center justify-between">
    <div>
      <h2 className="text-3xl font-bold">Online English Tutors & Teachers for Private Lessons</h2>
      <p className="mt-2">Struggling with a Subject? Need Expert Guidance? EduNexum Online Tutors in Academic, Technology, Finance, Life Skills, and More!</p>
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
        Learn Anytime, Anywhere at Your Own Pace
      </button>
    </div>
    <div className="relative">
      <img src="https://via.placeholder.com/150" alt="Tutor" className="rounded-full" />
      <div className="absolute top-0 right-0 bg-blue-500 rounded-full p-2">
        <span>Icon</span>
      </div>
    </div>
  </section>
    </div>
  )
}

export default HeroSection2
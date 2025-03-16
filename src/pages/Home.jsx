import React from 'react';
import TutorCard from '../components/TutorCard';
import HowItWorksCard from '../components/HowItWorksCard';

const Home = () => {
  // Placeholder images (replace with actual URLs or import from assets)
  const tutorImage = 'https://via.placeholder.com/100';
  const testimonialImage = 'https://via.placeholder.com/100';

  return (
    <div className="min-h-screen bg-gray-100 pt-7">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 mt-16 pt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome To EduNexum – Learn, Teach, And Grow!</h2>
          <p className="text-lg mb-6">
            EduNexum connects students with expert tutors for personalized learning whether you want to learn or teach. We provide the best resources, interactive tools, and a seamless platform to empower you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">Find a Tutor</button>
            <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-gray-800">Become a Tutor</button>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <img src={tutorImage} alt="Tutor" className="w-32 h-32 rounded-full" />
            <div className="flex flex-col justify-center">
              <p className="text-sm">School & College (Math, Science, English, etc)</p>
              <p className="text-sm">Finance & Business (Stock Market, Investing, Accounting)</p>
              <p className="text-sm">Life & Hobbies (Art, Photography, Language Learning)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Tutor Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">THE BEST TUTOR FOR YOU</h2>
          <p className="text-gray-600 mb-6">
            EduNexum connects with top educators across subjects & guides you with expert tutors.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <img src={tutorImage} alt="Student" className="w-32 h-32 rounded-full" />
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Find a Tutor
            </button>
          </div>
        </div>
      </section>

      {/* Become a Tutor Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">BECOME A TUTOR & EARN WITH YOUR KNOWLEDGE</h2>
          <p className="text-gray-600 mb-6">
            Turn your expertise into income by teaching students worldwide. EduNexum empowers tutors with:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 mb-6">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Flexible Teaching (Set your schedule)</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Guaranteed payments, hidden fees</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Support & Manage classes, track progress, interact with students</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Join as a Tutor Today
          </button>
          <img src={tutorImage} alt="Tutor" className="w-32 h-32 rounded-full mx-auto mt-4" />
        </div>
      </section>

      {/* Featured Tutors Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">FEATURED TUTORS</h2>
          <p className="text-gray-600 mb-6">Tutors teaching worldwide by EduNexum empowers tutors with.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TutorCard name="Manisha" subject="English" rating="4.5" price="500" image={tutorImage} />
            <TutorCard name="Manohar" subject="Math" rating="4.8" price="600" image={tutorImage} />
            <TutorCard name="Manisha" subject="Science" rating="4.7" price="550" image={tutorImage} />
            <TutorCard name="Miyako" subject="Art" rating="4.6" price="450" image={tutorImage} />
          </div>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Browse All Tutors
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-around text-center">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Teachers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">4.5+</h3>
            <p className="text-gray-600">Ratings</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Cities</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Students</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">HOW EDUNEXUM WORKS</h2>
          <p className="text-gray-600 mb-6">Turn your expertise into income by teaching students worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <HowItWorksCard step="1" title="Sign Up" description="Create a free student or tutor account, set your challenges, and get motivated." />
            <HowItWorksCard step="2" title="Find or be a Tutor" description="Browse tutors or set up with who you want to take each week and get ready." />
            <HowItWorksCard step="3" title="Book Classes" description="Schedule lessons that suit your needs and get to know your first session." />
            <HowItWorksCard step="4" title="Start Learning" description="Join a tutor, track your way through your first and help your plan." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join EduNexum today and take the first step towards success!!</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">Find a Tutor</button>
          <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-gray-800">Become a Tutor</button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">WHAT OUR USERS SAY</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <img src={testimonialImage} alt="Sophia L" className="w-32 h-32 rounded-full" />
            <div className="text-left max-w-md">
              <h3 className="text-lg font-semibold">Sophia L - Teacher</h3>
              <p className="text-gray-600">
                EduNexum completely changed the way I found students on interactive sessions I engaged on and saw progress in just a few weeks. That’s amazing!
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
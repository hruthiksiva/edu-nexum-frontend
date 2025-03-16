import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import TutorCard2 from '../components/TutorCard2';
import SearchBar from '../components/SearchBar';
import TutorProfile from '../components/TutorProfile';

const FindTutor = () => {
  
  // Moved the tutors array outside of the return statement
  const tutors = [
    { name: "Gopi Krishna", image: "https://via.placeholder.com/100", description: "English tutoring to boost speaking skills", price: 500 },
    { name: "Gopi Krishna", image: "https://via.placeholder.com/100", description: "English tutoring to boost speaking skills", price: 500 },
    // Add more tutor objects as needed
  ];

  const handleBook = (tutor) => {
    console.log(`Booked ${tutor.name}`);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <HeroSection2 />
      <SearchBar />
      <div className="container mx-auto p-6 flex flex-wrap gap-6">
        {tutors.map((tutor, index) => (
          <TutorCard2
            key={index}
            name={tutor.name}
            image={tutor.image}
            description={tutor.description}
            price={tutor.price}
            onBook={() => handleBook(tutor)}
          />
        ))}
        <TutorProfile
          image="https://via.placeholder.com/300x200"
          description="Learn with expert tutors offering customized lessons tailored to your needs."
        />
      </div>
    </div>
  );
}

export default FindTutor
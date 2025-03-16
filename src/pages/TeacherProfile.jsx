import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TutorProfile = () => {
  const { teacher_id } = useParams(); // Get teacher_id from URL params
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated fetch from JSON (replace with actual API call in a real app)
  useEffect(() => {
    const fetchTutorData = async () => {
      // Simulated JSON data (replace with API fetch)
      const tutorsData = {
        tutors: [
          {
            teacher_id: '1',
            name: 'Dr. John Smith',
            bio: 'Dr. John Smith is a passionate educator with a Ph.D. in Mathematics. He specializes in making complex concepts simple and engaging for students of all levels.',
            phone: '+1-555-123-4567',
            years_of_experience: 10,
            classes_provided: ['Algebra', 'Calculus', 'Geometry', 'SAT Math Prep'],
            availability: [
              { day: 'Monday', time: '2:00 PM - 5:00 PM' },
              { day: 'Wednesday', time: '3:00 PM - 6:00 PM' },
              { day: 'Friday', time: '1:00 PM - 4:00 PM' },
            ],
            profile_photo: 'https://via.placeholder.com/150',
            classes_conducted: 150,
            reviews: [
              { student_name: 'Alice Johnson', rating: 5, comment: 'Dr. Smith made calculus so easy to understand! Highly recommend.' },
              { student_name: 'Bob Carter', rating: 4, comment: 'Great tutor, very patient and knowledgeable.' },
            ],
            certifications: ['Ph.D. in Mathematics', 'Certified SAT Instructor', 'Teaching Excellence Award 2023'],
            youtube_link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            social_links: {
              linkedin: 'https://linkedin.com/in/johnsmith',
              twitter: 'https://twitter.com/johnsmith',
              instagram: 'https://instagram.com/johnsmith',
            },
          },
          {
            teacher_id: '2',
            name: 'Ms. Emily Davis',
            bio: 'Ms. Emily Davis is an experienced English tutor with a focus on literature and writing skills. She helps students excel in their exams and creative writing.',
            phone: '+1-555-987-6543',
            years_of_experience: 7,
            classes_provided: ['English Literature', 'Creative Writing', 'IELTS Prep'],
            availability: [
              { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
              { day: 'Thursday', time: '2:00 PM - 5:00 PM' },
            ],
            profile_photo: 'https://via.placeholder.com/150',
            classes_conducted: 90,
            reviews: [{ student_name: 'Sarah Lee', rating: 5, comment: 'Amazing teacher! My writing skills improved so much.' }],
            certifications: ['M.A. in English Literature', 'Certified IELTS Trainer'],
            youtube_link: 'https://www.youtube.com/embed/abc123xyz',
            social_links: {
              linkedin: 'https://linkedin.com/in/emilydavis',
              twitter: 'https://twitter.com/emilydavis',
            },
          },
        ],
      };

      // Find the tutor by teacher_id
      const selectedTutor = tutorsData.tutors.find((tutor) => tutor.teacher_id === teacher_id);
      setTutor(selectedTutor);
      setLoading(false);
    };

    fetchTutorData();
  }, [teacher_id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!tutor) {
    return <div className="flex items-center justify-center min-h-screen">Tutor not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header Section with Profile Photo and Basic Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={tutor.profile_photo}
            alt={`${tutor.name}'s profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{tutor.name}</h1>
            <p className="text-gray-600 mt-1">{tutor.years_of_experience} Years of Experience</p>
            <p className="text-gray-600">{tutor.classes_conducted} Classes Conducted</p>
            <a
              href={`tel:${tutor.phone}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Call: {tutor.phone}
            </a>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-2 text-gray-600">{tutor.bio}</p>
        </div>

        {/* Classes Provided */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Classes Provided</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {tutor.classes_provided.map((className, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {className}
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Availability</h2>
          <ul className="mt-2 space-y-2">
            {tutor.availability.map((slot, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-medium">{slot.day}:</span> {slot.time}
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {tutor.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* YouTube Video */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction Video</h2>
          <div className="mt-2">
            <iframe
              width="100%"
              height="315"
              src={tutor.youtube_link}
              title="Tutor Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
          {tutor.reviews.length > 0 ? (
            <div className="mt-2 space-y-4">
              {tutor.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-800">{review.student_name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No reviews yet.</p>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Connect with Me</h2>
          <div className="mt-2 flex space-x-4">
            {tutor.social_links.linkedin && (
              <a
                href={tutor.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                🔗 LinkedIn {/* Replace with LinkedIn icon */}
              </a>
            )}
            {tutor.social_links.twitter && (
              <a
                href={tutor.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                🐦 Twitter {/* Replace with Twitter icon */}
              </a>
            )}
            {tutor.social_links.instagram && (
              <a
                href={tutor.social_links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                📸 Instagram {/* Replace with Instagram icon */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
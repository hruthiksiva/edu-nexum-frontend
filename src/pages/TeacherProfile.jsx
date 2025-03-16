import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import { getTeacher, addReview } from "../services/api";

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    getTeacher(id).then((res) => setTeacher(res.data));
  }, [id]);

  const handleReviewSubmit = (review) => {
    addReview(id, review).then(() => {
      getTeacher(id).then((res) => setTeacher(res.data));
    });
  };

  if (!teacher) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={teacher.profilePicture}
            alt={teacher.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold text-center mt-4">{teacher.name}</h1>
          <p className="text-center text-gray-600">{teacher.email}</p>
          <p className="text-center">Contact: {teacher.contactNumber}</p>
          <p className="text-center text-yellow-500">
            Rating: {teacher.averageRating.toFixed(1)} / 5
          </p>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold">Details</h2>
          <p>Languages: {teacher.languages.join(", ")}</p>
          <p>Domains: {teacher.domains.join(", ")}</p>
          <h3 className="mt-4 font-semibold">Education</h3>
          {teacher.educationalQualification.map((edu, idx) => (
            <p key={idx}>{`${edu.degree} - ${edu.institution} (${edu.year})`}</p>
          ))}
          <h3 className="mt-4 font-semibold">Past Works</h3>
          {teacher.pastWorks.map((work, idx) => (
            <p key={idx}>
              {work.title} - {work.description}{" "}
              {work.link && (
                <a href={work.link} className="text-blue-500">
                  Link
                </a>
              )}
            </p>
          ))}
          <h3 className="mt-4 font-semibold">Reviews</h3>
          {teacher.reviews.map((review, idx) => (
            <div key={idx} className="p-2 border-b">
              <p>Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
          <ReviewForm teacherId={id} onSubmit={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
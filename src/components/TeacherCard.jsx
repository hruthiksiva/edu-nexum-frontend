import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => (
  <div className="p-4 border rounded-md shadow-md hover:shadow-lg transition">
    <img
      src={teacher.profilePicture}
      alt={teacher.name}
      className="w-24 h-24 rounded-full mx-auto"
    />
    <h3 className="text-lg font-bold mt-2">{teacher.name}</h3>
    <p className="text-gray-600">{teacher.domains.join(", ")}</p>
    <p className="text-yellow-500">Rating: {teacher.averageRating.toFixed(1)} / 5</p>
    <Link to={`/teacher/${teacher._id}`} className="text-blue-500 hover:underline">
      View Profile
    </Link>
  </div>
);

export default TeacherCard;
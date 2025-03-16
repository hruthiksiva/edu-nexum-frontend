import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div className="p-4 border rounded-md shadow-md">
    <h3 className="text-lg font-bold">{job.title}</h3>
    <p className="text-gray-600">{job.description}</p>
    <p className="text-sm text-gray-500">Tags: {job.tags.join(", ")}</p>
    <Link to={`/job/${job._id}`} className="text-blue-500 hover:underline">
      View Applicants
    </Link>
  </div>
);

export default JobCard;
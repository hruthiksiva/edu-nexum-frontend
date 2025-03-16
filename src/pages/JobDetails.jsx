import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJobApplicants, applyForJob } from "../services/api";

const JobDetails = () => {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    getJobApplicants(id).then((res) => setApplicants(res.data));
  }, [id]);

  const handleApply = () => {
    applyForJob(id).then(() => {
      getJobApplicants(id).then((res) => setApplicants(res.data));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Applicants</h1>
      <button
        onClick={handleApply}
        className="mb-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Apply for this Job
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {applicants.map((applicant) => (
          <div key={applicant.teacherId._id} className="p-4 border rounded-md">
            <h3 className="font-semibold">{applicant.teacherId.name}</h3>
            <p>Email: {applicant.teacherId.email}</p>
            <p>Contact: {applicant.teacherId.contactNumber}</p>
            <p>Applied: {new Date(applicant.appliedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
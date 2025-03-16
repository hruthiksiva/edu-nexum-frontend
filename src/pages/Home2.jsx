import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TeacherCard from "../components/TeacherCard";
import JobCard from "../components/JobCard";
import { searchTeachers, getJobs } from "../services/api";

const Home2 = () => {
  const [teachers, setTeachers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => setJobs(res.data));
  }, []);

  const handleSearch = (query) => {
    searchTeachers(query).then((res) => setTeachers(res.data));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edu Nexum</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Top Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher._id} teacher={teacher} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Open Tutor Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home2;
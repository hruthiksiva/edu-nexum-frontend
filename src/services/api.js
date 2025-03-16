import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Add token to requests if available (Google Auth token stored in localStorage)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (token) => localStorage.setItem("token", token); // Simulate login
export const logout = () => localStorage.removeItem("token");

export const searchTeachers = (query) => api.get(`/search?query=${query}`);
export const getTeacher = (id) => api.get(`/teacher/${id}`);
export const updateTeacherProfile = (data) => api.put("/teacher/profile", data);
export const addReview = (teacherId, data) => api.post(`/teacher/${teacherId}/review`, data);

export const postJob = (data) => api.post("/job", data);
export const getJobs = () => api.get("/job");
export const applyForJob = (jobId) => api.post(`/job/${jobId}/apply`);
export const getJobApplicants = (jobId) => api.get(`/job/${jobId}/applicants`);

export const createWebinar = (data) => api.post("/webinar", data);
export const getWebinars = () => api.get("/webinar");
export const getTeacherWebinars = () => api.get("/webinar/my-webinars");

export const getStudentRatings = () => api.get("/student/ratings");
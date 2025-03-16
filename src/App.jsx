import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import TeacherProfile from "./pages/TeacherProfile";
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";
import Webinars from "./pages/Webinars";
import CreateWebinar from "./pages/CreateWebinar";
import { logout } from "./services/api";

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-lg font-bold">
            Edu Nexum
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/webinars" className="hover:underline">
              Webinars
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/post-job" className="hover:underline">
                  Post Job
                </Link>
                <Link to="/create-webinar" className="hover:underline">
                  Create Webinar
                </Link>
                <button onClick={logout} className="hover:underline">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher/:id" element={<TeacherProfile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/create-webinar" element={<CreateWebinar />} />
      </Routes>
    </Router>
  );
};

export default App;
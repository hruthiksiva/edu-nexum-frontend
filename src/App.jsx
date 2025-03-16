import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import FindTutor from './pages/FindTutor';
import ErrorPage from './pages/ErrorPage';
import BecomeATutor from './pages/BecomeATutor';
import About from './pages/About.jsx'
import SignUpPage from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import TutorProfile from './pages/TeacherProfile.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/find-tutor' element={<FindTutor/>}/>
      <Route path='/become-a-tutor' element={<BecomeATutor/>}/>
      <Route path="/teacher-profile/:teacher_id" element={<TutorProfile/>}/>
    </Route>
  )
)

const App = () => {
return (
  <RouterProvider router={router}/>
)
}

export default App;
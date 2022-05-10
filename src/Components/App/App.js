import './App.css';
import Home from './../Home/Home';
import React, {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import FirstNavbar from '../FirstNavbar/FirstNavbar';
import Carousel from './../Carousel/Carousel';
import Footer from './../Footer/Footer';
import Notice from './../Notice/Notice';
import Research from './../Research/Research';
import Scholarship from '../Scholarship/Scholarship';
import About from './../About/About';
import Courses from './../Courses/Courses';
import Events from './../Events/Events';
import News from './../News/News';
import Register from './../Register/Register';
import Login from './../Login/Login';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Contact from './../Contact/Contact';
import Teachers from './../Teachers/Teachers';
function App() {
  const[userData, setUserData]= useState(null);
  let navigate= useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('userToken'))
    {
      getUserData();
    }

  }, []);
  function getUserData()
  {
    let decodedToken = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decodedToken);
  }
  function logOut()
  {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('./login');
  }
  function ProtectedRoute({children})
  {
    if(!localStorage.getItem('userToken'))
    {
     return <Navigate to='/login'/>
    }
    else
    {
      return children;
    }
  }
  return (
    <div className='w-100'>
      <FirstNavbar userData={userData} logOut={logOut}/>
      <Carousel userData={userData}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='notice' element={<Notice/>}/>
      <Route path='research' element={<Research/>}/>
      <Route path='scholarship' element={<Scholarship/>}/>
      <Route path='about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
      <Route path='courses' element={<ProtectedRoute><Courses/></ProtectedRoute>}/>
      <Route path='events' element={<ProtectedRoute><Events/></ProtectedRoute>}/>
      <Route path='news' element={<ProtectedRoute><News/></ProtectedRoute>}/>
      <Route path='contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
      <Route path='teachers' element={<ProtectedRoute><Teachers/></ProtectedRoute>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login getUserData={getUserData}/>}/>
    </Routes>
    <Footer userData={userData}/>
    </div>
  );
}

export default App;

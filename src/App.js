import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactusPage from './pages/ContactusPage'
import React from 'react'
import "./App.css";
import "./index.css";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />
        <Route path='/contactus' element={ <ContactusPage /> } />
      </Routes>
    </>

  );
}

export default App

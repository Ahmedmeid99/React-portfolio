import React from "react";
import Header from '../components/Header'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
const HomePage = () => {
  return (
    <>
      <div className="section">
        <Header />
        <Landing />
      </div>
      <Projects />
    </>
  )
};
export default HomePage
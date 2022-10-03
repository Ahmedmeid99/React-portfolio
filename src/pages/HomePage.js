import React from "react";
import Header from '../layout/Header'
import Landing from '../layout/Landing'
import Projects from '../components/projects/Projects'
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
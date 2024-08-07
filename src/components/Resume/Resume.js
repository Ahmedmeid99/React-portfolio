import React from "react";
import { useSelector } from 'react-redux'
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import "./Resume.css";
import Skills from "./Skills/Skills";
function Resume() {
  const them = useSelector((state) => state.them.them)
  return (
    <div className={ `about ${them}` }>
      <div className={ `about-title ${them}` }>
        <div className="container">
          <h2 className="resume-title">Resume</h2>
          <span>3 Years of Experience</span>
        </div>
      </div>
      <div class="about_content container">
        <Education />
        <Experience />
      </div>
        <Skills/>
    </div>
  );
}

export default Resume;

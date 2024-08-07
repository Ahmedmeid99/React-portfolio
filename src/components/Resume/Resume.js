import React from "react";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import "./Resume.css";
import Skills from "./Skills/Skills";
function Resume() {
  return (
    <div class="about">
      <div class="about-title ">
        <div class="container">
          <h2 class="resume-title">Resume</h2>
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

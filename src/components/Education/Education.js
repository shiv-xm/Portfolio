import React from "react";
import "./EducationCSS.css";

const Education = () => {
  return (
    <>
      <div id="Education" className="education-section">
        <h2>
          <i className="fa-solid fa-user-graduate"></i> Education
        </h2>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">
              Rajiv Gandhi Institute of Petroleum Technology, Amethi, India
            </span>
            <span className="location">Amethi, India</span>
          </div>
          <div className="education-row">
            <span className="degree">B.Tech in Computer Science and Engineering</span>
            <span className="year">2022 – 2026</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Cleared JEE Advanced</span>
            <span className="location">Patna, India</span>
          </div>
          <div className="education-row">
            <span className="degree">Admission at RGIPT</span>
            <span className="year"> AIR – 18,000</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Patna Collegiate School</span>
            <span className="location">Dariyapur, Patna, India</span>
          </div>
          <div className="education-row">
            <span className="degree">12th Grade</span>
            <span className="year">Intermediate – 83.6%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

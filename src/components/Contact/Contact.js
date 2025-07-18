import React from "react";
import "./ContactCSS.css";
import ViewCounter from "../ViewCounter/ViewCounter";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/sudhanshu-shivam-205105258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin footer-icon"></i>
            </a>
            <a
              href="https://github.com/shiv-xm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github footer-icon"></i>
            </a>
            <a href="mailto:sudhanshushivam1@gmail.comm">
              <i className="fa-solid fa-envelope footer-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/sudhanshu_shivm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram footer-icon"></i>
            </a>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2024 ❤️ © Designed and built by Sudhanshu Shivam.
          </p>
        </div>
        <ViewCounter />
      </div>
    </>
  );
};

export default Contact;

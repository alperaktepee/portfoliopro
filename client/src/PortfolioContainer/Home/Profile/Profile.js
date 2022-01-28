import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.youtube.com/channel/UCePACcDZL9bPZlt_6evVW2Q"
                target="_blank"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alper-aktepe-903a92208/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/alpeeraktepee/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/alperaktepee" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hi! I am{" "}
              <span className="highlighted-text">Alper Aktepe</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-end Developer 💻  ",
                    3000,
                    "Data Scientist 💻  ",
                    3000,
                    "HTML-CSS 🟠",
                    3000,
                    "Bootstrap 🟣",
                    3000,
                    "JavaScript 🟡",
                    3000,
                    "React JS 🔵",
                    3000,
                    "Python 🔵",
                    3000,
                    "Machine Learning 📈",
                    3000,
                    "Image Processing 📷",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
               You can contact me for web developing and machine learning projects
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="Alper Aktepe - CV.pdf" download="Alper Aktepe - CV.pdf">
              <button className="btn highlighted-btn">See My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

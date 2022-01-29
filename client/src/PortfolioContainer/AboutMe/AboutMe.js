import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css';
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I'm Alper Aktepe. I graduated from Kocaeli University Computer Engineering Department in 2022. You can review my thesis by clicking the button below. In the process of improving myself in various fields of computer science, I decided that the areas I enjoyed most were the web, machine learning and image processing, and therefore I decided to develop myself more in this direction. As a front-end web developer and data scientist, my goal is to follow constantly developing technologies, work with quality teams in the React ecosystem and contribute to successful projects.",
    highlights: {
      bullets: [
        "Front-end Web Development",
        "Figma-HTML-CSS-Bootstrap-JavaScript-React",
        "Database Management",
        "Python - Data Science - Machine Learning - Image Processing",
        "C# Windows Form Application Development",
      ],
      heading: "Skills",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Who am I ?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <a href="Alper Aktepe - Thesis.pdf" download="Alper Aktepe - Thesis.pdf">
                <button className="btn highlighted-btn">View My Thesis</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

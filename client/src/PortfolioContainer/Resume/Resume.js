import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setcarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Figma" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Bootstrap" },
    { skill: "React JS" },
    { skill: "Python" },
    { skill: "Data Science" },
    { skill: "Machine Learning" },
    { skill: "Image Processing" },
    { skill: "C#" },
    { skill: "Form Applications" },
    { skill: "T-SQL" },
    { skill: "Microsoft SQL Server" },
  ];

  const projectsDetails = [
    {
      
      title: "Weather Application",
      description: "Weather application implemented using API.",
      subHeading: "React JS",
    },
    {
      title: "Fingerprint Recognition with SVM",
      description:
        "I developed a fingerprint recognition system developed with image processing and SVM algorithm. ",
      subHeading: "MATLAB, Machine Learning",
    },
    {
      title: "Expense Application",
      description:
        "A project created with React, which can storage and filter your added expenses.",
      subHeading: "React JS",
    },
    // {
    //   title: "Maaş Tahmini",
    //   description:
    //     "Yaş ve deneyime göre maaş tahmini yapan multiple linear algoritması ile oluşturulmuş proje. ",
    //   subHeading: "Python, Makine Öğrenmesi",
    // },
   {
     title: "Hospital Automation",
      description:
        "Hospital management system desktop application developed with C#",
      subHeading: "C#, SQL Server",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <div className="education-description">
        <ResumeHeading
          heading={"Kocaeli University, Turkey"}
          subHeading={"Computer Engineering"}
          fromDate={"2016"}
          toDate={"2022"}
        />
      </div>
      <div className="education-description">
        <ResumeHeading
          heading={"Fatih Anatolian High School, Turkey"}
          subHeading={"Math"}
          fromDate={"2012"}
          toDate={"2016"}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-description">
        <ResumeHeading
          heading={"ALFA DONANIM ÇÖZÜMLERİ"}
          subHeading={"Internship Engineer - React Developer"}
          fromDate={"2021"}
          toDate={"2021"}
        />
      </div>
      <div className="experience-description">
        <ResumeHeading
          heading={"VİZYONEKS BİLGİ TEKNOLOJİLERİ"}
          subHeading={"Internship Engineer - Form Application Developer"}
          fromDate={"2018"}
          toDate={"2018"}
        />
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
 

      <ResumeHeading heading="Chess : I have many medals in chess" />
      <ResumeHeading heading="Team Sports : I like to watch and play football, basketball and volleyball" />
      <ResumeHeading heading="Learning Languages : I speak English and basic level Spanish" />
      <ResumeHeading heading="Singing : I like to sing" />
      <ResumeHeading heading="Playing Guitar and Piano : I like to play some instruments" />
      <ResumeHeading heading="Writing Articles : You can check my articles from LinkedIn profile" />
 

    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setcarouselOffSetStyle(newCarouselOffSet);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="İnternet bağlantısı yok"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"Informations About Me"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"> </div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}

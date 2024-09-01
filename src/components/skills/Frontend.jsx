import React from "react";
import SkillsGroup from "./SkillsGroup";

const frontendSkills = [
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
  { name: "Bootstrap", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Material UI", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <SkillsGroup skills={frontendSkills.slice(0, 3)} />
        <SkillsGroup skills={frontendSkills.slice(3)} />
      </div>
    </div>
  );
};

export default Frontend;

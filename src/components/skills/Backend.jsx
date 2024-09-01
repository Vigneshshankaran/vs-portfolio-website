import React from "react";
import SkillsGroup from "./SkillsGroup";

const backendSkills = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "npm", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <SkillsGroup skills={backendSkills.slice(0, 3)} />
        <SkillsGroup skills={backendSkills.slice(3)} />
      </div>
    </div>
  );
};

export default Backend;

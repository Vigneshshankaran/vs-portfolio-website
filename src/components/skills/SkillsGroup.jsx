import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const SkillsGroup = ({ skills }) => {
  return (
    <div className="skills__group">
      {skills.map((skill) => (
        <div className="skills__data" key={skill.name}>
          <HiCheckBadge className="skills__icon" />
          <div>
            <h3 className="skills__name">{skill.name}</h3>
            <span className="skills__level">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGroup;

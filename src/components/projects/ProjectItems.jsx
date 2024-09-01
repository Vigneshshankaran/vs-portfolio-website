import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card">
      <img 
        className="project__img" 
        src={item.image} 
        alt={`Screenshot of ${item.title}`} 
      />
      <h3 className="project__title">{item.title}</h3>
      <div className="project__links">
        <a href={item.repoLink} target="_blank" rel="noopener noreferrer" className="project__button">
          Github Repo <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="project__button">
          Live Link <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;

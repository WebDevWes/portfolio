import React from "react";
import "./style.css";
import Collapsible from "react-collapsible";

export default function ProjectCard(props) {
  return (
    <div className="card-body">
      <div className="imageContainer">
        <a href={props.deploy} target="_blank" rel="noopener noreferrer">
          <img className="logo" src={props.logo} alt={props.title} />
        </a>
      </div>
      <p className="app-name">{props.title}</p>
      <Collapsible trigger="Details">
        <p className="descriptionContainer" >{props.description}</p>
      </Collapsible>
      <a href={props.repo} target="_blank" rel="noopener noreferrer">
        <p className="repo-link">Repository</p>
      </a>
    </div>
  );
}

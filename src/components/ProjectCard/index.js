import React from "react";
import "./style.css";

export default function ProjectCard(props) {
  return (
    <div className="card-body col-sm-4">
      <a href={props.deploy} target="_blank" rel="noopener noreferrer">
        <img className="logo" src={props.logo} alt={props.title} />
      </a>
      <p className="app-name">{props.title}</p>
      <a href={props.repo} target="_blank" rel="noopener noreferrer">
        <p className="repo-link">Repository</p>
      </a>
    </div>
  );
}

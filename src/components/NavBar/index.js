import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <a className="disabled">
        <strong>WebDevWes</strong>
      </a>
      <a className="navi" href="/">Home</a>
    </nav>
  );
}

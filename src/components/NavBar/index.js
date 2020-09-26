import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <a href="foo" className="disabled">
        <strong>WebDevWes</strong>
      </a>
      <a className="navi" href="/">About</a>
      <a className="navi" href="/project">Projects</a>
      <a className="navi" href="/contact">Contact</a>
    </nav>
  );
}

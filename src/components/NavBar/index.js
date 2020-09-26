import React from "react";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <a href="foo" className="disabled appleFont">
        <strong>WebDevWes</strong>
      </a>
      <a className="navi appleFont" href="/">About</a>
      <a className="navi appleFont" href="/project">Projects</a>
      <a className="navi appleFont" href="/contact">Contact</a>
    </nav>
  );
}

import React from "react";
import "./style.css";
import NavBarDropdown from "../NavBarDropdown";
import DropdownItem from "../DropdownItem";
import ContactDropdown from "../ContactDropdown";
import ContactForm from "../ContactForm";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <a href="foo" className="logo">
        <strong>WebDevWes</strong>
      </a>
      <NavBarDropdown value="About Me">
        <DropdownItem value="Information" />
      </NavBarDropdown>
      <NavBarDropdown value="Projects">
        <DropdownItem value="Password Generator" />
      </NavBarDropdown>
      <ContactDropdown value="Contact Me">
        <ContactForm/>
      </ContactDropdown>
    </nav>
  );
}

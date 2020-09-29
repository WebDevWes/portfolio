import React from "react";
import "./style.css";
import NavBarDropdown from "../NavBarDropdown";
import DropdownItem from "../DropdownItem";
import ContactDropdown from "../ContactDropdown";
import ContactForm from "../ContactForm";
import Time from "../Time";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <a href="foo" className="logo">
        <strong>Logo</strong>
      </a>
      <NavBarDropdown value="About Me">
        <DropdownItem value="Information" />
      </NavBarDropdown>
      <NavBarDropdown value="Projects">
        <DropdownItem value="Password Generator" />
      </NavBarDropdown>
      <ContactDropdown value="Contact Me">
        <ContactForm />
      </ContactDropdown>
      <a href="foo" className="WebDevWes">
        <strong>WebDevWes</strong>
      </a>
      <Time />
    </nav>
  );
}

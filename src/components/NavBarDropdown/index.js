import React from "react";
import "./style.css";

export default function NavBarDropdown(props) {
  return (
    <span>
      <input
        type="button"
        className="NavBarDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        value={props.value}
      />
      {props.children}
    </span>
  );
}

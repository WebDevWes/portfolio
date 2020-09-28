import React from "react";
import "./style.css";

export default function ContactDropdown(props) {
  return (
    <span>
      <input
        type="button"
        className="ContactDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        value={props.value}
      />
      {props.children}
    </span>
  );
}

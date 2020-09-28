import React from "react";
import "./style.css";

export default function DropdownItem(props) {
  return (
    <div className="dropdown-menu DropdownItem" aria-labelledby="dropdown">
      <button className="dropdown-item DropdownItemButton" type="button">
        {props.value}
      </button>
    </div>
  );
}
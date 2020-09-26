import React from "react";
import "./style.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="Footer-container"
      data-toggle="collapse"
      data-target=".Footer"
      aria-expanded="true"
      aria-controls="collapseOne"
    >
      <div className="Footer">
        Copyright &#169; {currentYear}, WebDevWes. All rights reserved.
      </div>
      <input className="Footer-button" type="button" value="=" />
    </div>
  );
}

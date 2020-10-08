import React from "react";
import "./style.css";

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="SimpleFooter" >Copyright &#169; {currentYear}, WebDevWes</div>
  );
}

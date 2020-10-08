import React from "react";
import "./style.css";

export default function Sidebar() {
  const toggleCollapse = () => {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sidebar-background fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none font-black">Wesley Tran</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={process.env.PUBLIC_URL + "/images/profilePic.jpg"}
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link font-black"
              href="#about"
              onClick={toggleCollapse}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-black"
              href="#interest"
              onClick={toggleCollapse}
            >
              Interest
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-black"
              href="#skills"
              onClick={toggleCollapse}
            >
              Skills
            </a>
          </li>
          {/* <li className="nav-item">
              <a className="nav-link font-black" href="#certification" onClick={toggleCollapse}>
                Certifications
              </a>
            </li> */}
          <li className="nav-item">
            <a
              className="nav-link font-black"
              href="#projects"
              onClick={toggleCollapse}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-black"
              href="#contact"
              onClick={toggleCollapse}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
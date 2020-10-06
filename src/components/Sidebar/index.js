import React from "react";
import "./style.css";

export default function Sidebar() {

  return (
      <nav
        className="navbar navbar-expand-lg navbar-light sidebar-background fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none font-black">Wesley Tran</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src= {process.env.PUBLIC_URL+ "/images/profilePic.jpg"}
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
              <a className="nav-link js-scroll-trigger font-black" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger font-black" href="#interest">
                Interest
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger font-black" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger font-black" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

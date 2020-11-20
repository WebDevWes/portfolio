import React from "react";
import "./style.css";
import SimpleContactForm from "../SimpleContactForm";
import ProjectCard from "../ProjectCard";
import projects from "../../utils/projects";

export default function ProfileBody() {
  return (
    <div className="container-fluid ProfileBody">
      <section className="bodySection" id="about">
        <div className="bodySection-content">
          <h1 className="mb-0">
            Wesley
            <span className="text-secondary">Tran</span>
          </h1>
          <div className="subheading mb-5">
            Hayward, CA 94541 · (510) 825-7359 ·
            <a href="mailto:WebDevWes89@gmail.com">WebDevWes89@gmail.com</a>
          </div>
          <p className="lead mb-5">
            New and passionate Full Stack Web Developer with certification from
            UC Berkeley Coding Bootcamp; skill sets include Javascript, CSS,
            ReactJS for the front-end, NodeJS, Express, MongoDB, and MySQL for
            the back-end. Created my first MERN app developing a job search app
            that takes into account the cost of living in a given area, with a
            team of four. I’m a quick learner and very easy to get along with in
            a team environment. I have worked with a SQL database at my job as a
            distribution supervisor for quite a couple years now and am
            currently leveraging what I have learned as a Web Developer in order
            to automate a couple of daily tasks.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/wesley-tran-1333b81a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fab fa-linkedin"></div>
            </a>
            <a
              className="social-icon"
              href="https://github.com/WebDevWes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fab fa-github-square"></div>
            </a>
            <a
              className="social-icon"
              href={process.env.PUBLIC_URL + "/WesleyResume.pdf"}
              download
            >
              <div className="fab fas fa-file"></div>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />

      <section className="bodySection" id="interest">
        <div className="bodySection-content">
          <h2 className="mb-5">Interests</h2>
          <p className="lead mb-5">
            At the risk of sounding generic, I do love food. The only reason why
            I bother to weight lift is to gain muscle mass for the sole purpose
            of the higher calorie consumption that I'm allowed. Even during
            hikes, I place more emphasis on the snacks that I bring over the
            activity itself.
          </p>
          <p className="lead mb-5">
            My other interest lies in PC gaming and all the technologies that
            follows it. I started building my first PC in pursuit of gaming, and
            this has led me to tinker with arduino units and has now led me to
            coding.
          </p>
        </div>
      </section>
      <hr className="m-0" />

      <section className="bodySection" id="skills">
        <div className="bodySectionContent">
          <h2 className="mb-5">Tech Stack</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline techIcons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git-square"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Databases</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <img
                  className="databaseIcon"
                  src={process.env.PUBLIC_URL + "/images/mysql.png"}
                  alt="mySQL"
                />
              </span>
              MySQL
            </li>
            <br />
            <li>
              <span className="fa-li">
                <img
                  className="databaseIcon"
                  src={process.env.PUBLIC_URL + "/images/mongodb.png"}
                  alt="MongoDB"
                />
              </span>
              MongoDB
            </li>
          </ul>
          <br />
          <div className="subheading mb-3">
            <u>Interested in learning:</u>
          </div>
          <ul className="list-inline techIcons">
            <li className="list-inline-item">
              <img
                className="typescriptIcon"
                src={process.env.PUBLIC_URL + "/images/typescript.png"}
                alt="MongoDB"
              />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />

      {/* <section className="bodySection" id="certification">
        <div className="bodySection-content">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check text-warning"></i>
              </span>
              Full Stack Web Developer Certification from UC Berekely Ext.
            </li>
          </ul>
        </div>
      </section> */}

      <section className="bodySection" id="projects">
        <div className="bodySection-content">
          <h2 className="mb-5">Projects</h2>
          <div className="card-container">
            {projects.map(
              ({ id, title, src, description, deployed_link, repo_link }) => (
                <ProjectCard
                  key={id}
                  logo={src}
                  title={title}
                  deploy={deployed_link}
                  repo={repo_link}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section className="bodySection" id="contact">
        <div className="bodySection-content">
          <h2 className="mb-5">Contact Me</h2>
          <SimpleContactForm />
        </div>
      </section>
    </div>
  );
}

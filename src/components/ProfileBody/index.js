import React from "react";
import "./style.css";
import SimpleContactForm from "../SimpleContactForm";
import ProjectCard from "../ProjectCard";
import projects from "../../utils/projects";

export default function ProfileBody() {
  console.log(projects);
  return (
    <div className="container-fluid ProfileBody">
      <section className="bodySection" id="about">
        <div className="bodySection-content">
          <h1 className="mb-0">
            Wesley
            <span className="text-secondary">Tran</span>
          </h1>
          <div className="subheading mb-5">
            Hayward, CA 94541 · (510) 918-2481 ·
            <a href="mailto:WebDevWes89@gmail.com">WebDevWes89@gmail.com</a>
          </div>
          <p className="lead mb-5">
            I'm a new and upcoming Full-Stack Web Developer, language of choice
            is Javascript and I am currently picking up Typescript. I have
            always loved to tinker with things since a young age and that has
            led me towards coding.
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
          <p>
            At the risk of sounding generic, I do love food. The only reason why
            I bother to weight lift is to gain muscle mass for the sole purpose
            of the higher calorie consumption that I'm allowed. Even during
            hikes, I place more emphasis on the snacks that I bring over the
            activity itself.
          </p>
          <p className="mb-0">
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
              ({ id, title, src, deployed_link, repo_link }) => (
                <ProjectCard
                key={id}
                logo={src}
                title={title}
                deploy={deployed_link}
                repo={repo_link}
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

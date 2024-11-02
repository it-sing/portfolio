import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/it-sing/mbanking-REST_API.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/it-sing/mbanking-REST_API.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Mobile Banking REST API.</h3>
              <p>A simple REST API designed to manage core banking operations. This project was developed as part of a Spring Boot course with my instructor. The API allows for efficient management of users, accounts, account types, card types, and transactions. It provides endpoints to create, update, and retrieve banking data, supporting essential financial interactions and services. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Spring Boot</li> <li>Gradle</li> <li>PostgrestSQL</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/it-sing/ELearning_REST_API.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://github.com/it-sing/ELearning_REST_API.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>ELearning REST API</h3>
              <p>
              This project is an ELearning REST API, built as a mini-project for our Full Stack Web Development course. Our team developed this API using Spring Boot, PostgreSQL, and Gradle to manage and support e-learning functionality. The API includes features for managing courses, instructors, students, user profiles, and enrollments.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>Gradle</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/it-sing/Java_MS_CS.git" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/it-sing/Java_MS_CS.git" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Desktop Java Management Systems - Point of Computer  Science Students</h3>
              <p>
              This is a Java Desktop Application designed as a management system to streamline administrative tasks and data handling for computer science students. Built with Java and Gradle and using Microsoft Access as the database, the project includes various features tailored to support administrative roles, student management, data organization, and report generation.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>java</li>
                <li>Gradle</li>
                <li>Miscrosoft Access</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
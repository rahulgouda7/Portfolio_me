import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IMDb App clone"
              description="IMDb App clone—a dynamic project crafted with HTML, CSS, JavaScript, and React.js. This immersive experience combines my passion for web development with a user-friendly interface, bringing movie enthusiasts an interactive taste of the cinema world."
              ghLink="https://github.com/rahulgouda7/imdb_reactApp"
              demoLink="https://imdb-reactapp.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Super Mario Game"
              description="I crafted an engaging Super Mario game using HTML, CSS, and JavaScript, seamlessly blending creativity with technical prowess. From responsive design to interactive gameplay, this project showcases my ability to bring nostalgic experiences to life through web development."
              ghLink="https://github.com/rahulgouda7/Super-mario"
              demoLink="https://super-mario-rahulgoudas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/rahulgouda7/Chatify"
              demoLink="https://chatifynew.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TODO List App"
              description="In my Todo List app, I seamlessly blend HTML for structure, CSS for sleek design, and JavaScript for dynamic functionality. Users can easily add, edit, and remove tasks, while responsive design ensures a seamless experience across devices. This project showcases my proficiency in front-end development and user-centric design principles."
              ghLink="https://github.com/rahulgouda7/ToDo-List.github.io"
              demoLink="https://rahulgouda7.github.io/ToDo-List.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Fake News Detection"
              description="Developed a robust Fake News Detection system using Logistic Regression, leveraging data analytics and machin  learning. Successfully identified and flagged misinformation, showcasing my expertise in data-driven solutions and algorithmic accuracy."
              ghLink="https://github.com/rahulgouda7/FakeNewsDetection"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tic-Tac-Toe Game"
              description="In my portfolio, I showcase a dynamic Tic Tac Toe game crafted with HTML, CSS, and JavaScript, powered by React. This project demonstrates my proficiency in front-end development, emphasizing responsive design and interactive user experiences. The combination of these technologies highlights my ability to create engaging and functional web applications."
              ghLink="https://github.com/rahulgouda7/Tic-Tac-Toe"
               demoLink="https://tic-tac-toe-xi-six.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

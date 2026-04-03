import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>

      <div className="project-section climb-finder-section">
        <h3>Climb Finder</h3>
        <div className="project-sub-section">
          <img src="/climb-finder-1.png" alt="Climb Finder Screenshot" />
          <div className="link-and-text">
            <Link to="projects/ClimbFinder" className="project-link">
              See more about this project
            </Link>
            <p>
              Climb finder is a full stack web app for finding climbing
              routes/mountains. It is made with vanilla javascript for the
              frontend, Node.js for the backend, and mysql for the database. It
              has login and registration functionality, with encrypted
              passwords, input validation and error handling.
            </p>
          </div>
        </div>
      </div>

      <div className="project-section daintree-section">
        <h3>Daintree</h3>
        <div className="project-sub-section">
          <img src="/daintree-1.png" alt="Daintree Screenshot" />
          <div className="link-and-text">
            <Link to="projects/daintree" className="project-link">
              See more about this project
            </Link>
            <p>
              Daintree is an e commerce website, originally built following a
              tutorial, this project has been modified. It includes features
              like product listings, shopping cart, and checkout functionality.
            </p>
          </div>
        </div>
      </div>

      <div className="project-section video-stream-section">
        <h3>Video Stream</h3>
        <div className="project-sub-section">
          <img src="/video-stream.png" alt="Video Stream Screenshot" />
          <div className="link-and-text">
            <Link to="projects/video-stream" className="project-link">
              See more about this project
            </Link>
            <p>
              Video Stream is a mockup video streaming app made with only HTML
              and CSS. This was also originally created following a tutorial,
              and has been modified.
            </p>
          </div>
        </div>
      </div>

      <div className="project-section small-js-projects-section">
        <h3>Small JavaScript Projects</h3>
        <div className="project-sub-section">
          <div className="images-container">
            <img
              src="/rock-paper-scissors.png"
              alt="Small JavaScript Projects Screenshot"
            />
            <img
              src="/text-editor.png"
              alt="Small JavaScript Projects Screenshot"
            />
          </div>
          <div className="link-and-text small-js-link-and-text">
            <Link to="projects/small-js-projects" className="project-link">
              Click here to view more about these projects
            </Link>
            <p>
              These are simple javascript projects. The Rock, Paper, Scissors
              game, and To Do list were built following a tutorial, whereas the
              text editor was built from scratch.
            </p>
            <img
              src="/to-do-list.png"
              alt="Small JavaScript Projects Screenshot"
              className="to-do-list-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

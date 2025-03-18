import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="outer-container">
      <section>
        <h1>Project 1</h1>
        <img
          className="second-image"
          src="../public/first-example-image.png"
          alt="image here"
        />
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit!
          Quo saepe et, consequuntur blanditiis labore quia, ab, hic dolores
          alias possimus totam ad! Quidem exercitationem ipsam placeat vel
          asperiores.
        </div>
      </section>

      <section>
        <h1>Project 2</h1>
        <img
          className="second-image"
          src="../public/second-example-image.png"
          alt="image here"
        />
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit!
          Quo saepe et, consequuntur blanditiis labore quia, ab, hic dolores
          alias possimus totam ad! Quidem exercitationem ipsam placeat vel
          asperiores.
        </div>
      </section>
    </div>
  );
};

export default Projects;

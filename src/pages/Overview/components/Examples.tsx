import React from "react";
import "./Examples.css";

const Examples = () => {
  return (
    <>
      <section className="first-example-section">
        <div>
          <img
            className="first-image"
            src="../public/first-example-image.png"
            alt="a food website"
          />
        </div>
        <div className="link-container">
          <a href="/projects">Take a closer look</a>
        </div>
      </section>

      <section className="second-example-section">
        <div>
          <img
            className="second-image"
            src="../public/second-example-image.png"
            alt="a trading website"
          />
        </div>
        <div className="link-container">
          <a href="/projects">Take a closer look</a>
        </div>
      </section>
    </>
  );
};

export default Examples;

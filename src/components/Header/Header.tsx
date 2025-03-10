import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Nathan Walker Portfolio</h1>
        <nav>
          <Link to="/">Overview</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

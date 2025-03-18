import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Portfolio Website</h1>
        <nav>
          <Link className="link" to="/">
            Overview
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/skills">
            Skills
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

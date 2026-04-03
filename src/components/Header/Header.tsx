import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Portfolio Website</h1>
        <nav>
          <Link className="link" to="/">
            Projects
          </Link>
        </nav>
        <a
          href="https://github.com/Nath643/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../Octicons-mark-github.svg"
            alt="GitHub logo, clickable link"
            className="github-link"
          />
        </a>
      </header>
    </>
  );
};

export default Header;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <header>
        <h1>Nathan Walker Portfolio</h1>
        <nav>
          <a href="">Overview</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </nav>
      </header>

      <section>
        <div>
          <img src="../public/IMG_5762.JPG" alt="" />
        </div>
        <div>
          <p>
            I am capable of web development. Primarily, I am familiar with HTML,
            CSS, and JavaScript. I also have basic knowledge of reactjs,
            typescript, and nodejs. I can build front-end applications, and I
            can build basic back-ends.
          </p>
        </div>
      </section>

      <main>
        <section>
          <div>page 1</div>
          <div>code 1</div>
          <div>page 2</div>
          <div>code 2</div>
        </section>
      </main>

      <footer>
        <p>Copyright &copy; 2025 Nathan Walker.</p>
      </footer>
    </>
  );
}

export default App;

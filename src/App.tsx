import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import ClimbFinder from "./pages/Projects/components/climb-finder";
import Daintree from "./pages/Projects/components/Daintree";
import VideoStream from "./pages/Projects/components/VideoStream";
import SmallJsProjects from "./pages/Projects/components/SmallJsProjects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Projects />} />
            <Route path="projects/climb-finder" element={<ClimbFinder />} />
            <Route path="projects/daintree" element={<Daintree />} />
            <Route path="projects/video-stream" element={<VideoStream />} />
            <Route
              path="projects/SmallJsProjects"
              element={<SmallJsProjects />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

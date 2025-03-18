import React from "react";
import Photo from "./components/Photo";
import Summary from "./components/Summary";
import Examples from "./components/Examples";
import "./Overview.css";

const Overview = () => {
  return (
    <>
      <div className="summary-section">
        <Photo></Photo>
        <Summary></Summary>
      </div>
      <div className="examples-section">
        <Examples></Examples>
      </div>
    </>
  );
};

export default Overview;

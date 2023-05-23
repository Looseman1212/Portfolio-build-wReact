import Landing from "./Components/Landing";
import Experiences from "./Components/Experiences";
import Drawers from "./Components/Drawers";
import Photography from "./Components/Photography";
import Moreme from "./Components/Moreme";

// import { useState } from "react";
import "./scss/App.scss";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Landing />
      <Experiences />
      <Drawers />
      <Projects />
      <Photography />
      <Moreme />
      {/* <div className="drawer-testing">
        <div className="app-testing-above"></div>
        <div className="app-testing-below"></div>
      </div> */}
    </>
  );
}

export default App;

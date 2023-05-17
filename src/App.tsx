// import Landing from "./Components/Landing";
// import Experiences from "./Components/Experiences";
import Drawers from "./Components/Drawers";

// import { useState } from "react";
import "./scss/App.scss";

function App() {
  return (
    <>
      {/* <Landing />
      <Experiences /> */}
      <div className="drawer-testing">
        <div className="app-testing-above"></div>
        <Drawers />
        <div className="app-testing-below"></div>
      </div>
    </>
  );
}

export default App;

import Landing from "./Components/Landing";
import Experiences from "./Components/Experiences";
import Drawers from "./Components/Drawers";
import Photography from "./Components/Photography";
import Moreme from "./Components/Moreme";

import "./scss/App.scss";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Landing />
      <Experiences id="experiences" />
      <Drawers />
      <Projects id="projects" />
      <Photography id="photography" />
      <Moreme id="moreme" />
    </>
  );
}

export default App;

import Landing from "./Components/Landing";
import Experiences from "./Components/Experiences";
import Drawers from "./Components/Drawers";
import Projects from "./Components/Projects";
import Photography from "./Components/Photography";
import Moreme from "./Components/Moreme";

import "./scss/App.scss";
import favicon from "./assets/favicon-32x32.png";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Max Reid</title>
        <meta
          name="Max Reid Portfolio"
          content="Portfolio for web developer Max Reid"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
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

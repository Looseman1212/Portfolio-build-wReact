// import Landing from "./Components/Landing";
// import Experiences from "./Components/Experiences";
import Drawer from "./Components/Drawer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Landing />
      <Experiences /> */}
      <div className="app">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Trigger Drawer
        </button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <button type="button" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <p>The drawer content!</p>
          <input type="text" />
        </Drawer>
      </div>
    </>
  );
}

export default App;

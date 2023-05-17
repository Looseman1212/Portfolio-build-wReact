import SkillsPullup from "./SkillsPullup";
import ExpPullup from "./ExpPullup";
import "../scss/Drawer.scss";
import { useState } from "react";

function Drawers() {
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isExpOpen, setExpOpen] = useState(false);

  return (
    <div className="drawers-box">
      <div
        className={`Skills-button-content-container ${
          isSkillsOpen && "SkillsPullup-isOpen"
        }`}
      >
        <div
          className="Skills-btn"
          onClick={() => {
            setSkillsOpen(!isSkillsOpen);
          }}
        >
          Click 4 skillz
        </div>
        <SkillsPullup />
      </div>
      <div
        className={`Exp-button-content-container ${
          isExpOpen && "ExpPullup-isOpen"
        }`}
      >
        <div
          className="Exp-btn"
          onClick={() => {
            setExpOpen(!isExpOpen);
          }}
        >
          Click 4 experience
        </div>
        <ExpPullup />
      </div>
    </div>
  );
}

export default Drawers;

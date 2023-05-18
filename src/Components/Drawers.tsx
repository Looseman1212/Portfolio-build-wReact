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
        onClick={() => {
          setSkillsOpen(!isSkillsOpen);
        }}
      >
        <div className="Skills-btn">Technical Skills</div>
        <SkillsPullup />
      </div>
      <div
        className={`Exp-button-content-container ${
          isExpOpen && "ExpPullup-isOpen"
        }`}
        onClick={() => {
          setExpOpen(!isExpOpen);
        }}
      >
        <div className="Exp-btn">Development Experience</div>
        <ExpPullup />
      </div>
    </div>
  );
}

export default Drawers;

import "./ToggleMenuIcon.css";
import { useState } from "react";
const ToggleMenuIcon = () => {
  const [changeMenuColor, setChangeMenuColor] = useState(false);
  const toggleMenu = () => {
    changeMenuColor ? setChangeMenuColor(false) : setChangeMenuColor(true);
  };
  return (
    <div
      className={`toggle_menu ${changeMenuColor ? "toggle_menu-light" : ""}`}
      onClick={toggleMenu}
    >
      <div className="menu-icon">
        <div
          className={`dot dot1 ${changeMenuColor ? "dot1-black" : ""}`}
        ></div>

        <div className="dot dot2"></div>
        <div
          className={`dot dot1 ${changeMenuColor ? "dot1-black" : ""}`}
        ></div>
      </div>
      <div className="menu-icon">
        <div className="dot dot2"></div>
        <div
          className={`dot dot1 ${changeMenuColor ? "dot1-black" : ""}`}
        ></div>
        <div className="dot dot2"></div>
      </div>
      <div className="menu-icon">
        <div
          className={`dot dot1 ${changeMenuColor ? "dot1-black" : ""}`}
        ></div>
        <div className="dot dot2"></div>
        <div
          className={`dot dot1 ${changeMenuColor ? "dot1-black" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleMenuIcon;

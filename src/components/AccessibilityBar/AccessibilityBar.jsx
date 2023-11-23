import { Button } from "@mui/base";
import { useState } from "react";
import "./AccessibilityBar.css";

import { RxLetterCaseToggle, RxLetterCaseCapitalize } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";

const AccessibilityBar = () => {
  const [invertColors, setInvertColors] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const toggleColors = () => {
    setInvertColors(!invertColors);
    if (!invertColors) {
      document.documentElement.style.filter = "invert(1)";
      document.documentElement.style.backgroundColor = "black";
    } else {
      document.documentElement.style.filter = "none";
      document.documentElement.style.backgroundColor = "white";
    }
  };
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 10);
    document.documentElement.style.fontSize = `${fontSize}%`;
  };
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => Math.max(prevFontSize - 10, 50));
    document.documentElement.style.fontSize = `${fontSize}%`;
  };
  return (
    <div className="accessibility-bar">
      <Button onClick={toggleColors} id="btns-side">
        <MdOutlineLightMode className="icon" />
      </Button>
      <Button onClick={increaseFontSize} id="btns-side">
        <div className="btn-sidebar">
          + <RxLetterCaseToggle className="icon" />
        </div>
      </Button>
      <Button onClick={decreaseFontSize} id="btns-side">
        <div className="btn-sidebar">
          - <RxLetterCaseCapitalize className="icon" />
        </div>
      </Button>
    </div>
  );
};

export default AccessibilityBar;

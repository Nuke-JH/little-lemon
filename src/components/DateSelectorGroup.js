import React from "react";
import { useState } from "react";
import "./button.css";

const DateButtonGroup = ({ buttons, action, buttonType, valueName }) => {
  const [clickedId, setClickedId] = useState(null);
  const [mouseOver, setMouseOver] = useState(null);
  const handleClick = (event, id) => {
    setClickedId(id);
    action(event, id);
  };
  const handleMouseEnter = (event, id) => {
    setMouseOver(id);
  };
  const handleMouseLeave = (event, id) => {
    setMouseOver(null);
  };
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          type={buttonType}
          key={i}
          name={valueName}
          value={buttonLabel}
          onMouseEnter={(event) => handleMouseEnter(event, i)}
          onMouseLeave={(event) => handleMouseLeave(event, i)}
          onClick={(event) => handleClick(event, i)}
          aria-label="On Click"
          className={
            i === clickedId
              ? "active"
              : i === mouseOver
              ? "hoverButtonStyle"
              : "defaultButtonStyle"
          }
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
export default DateButtonGroup;

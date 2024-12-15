import React from "react";
import { useState } from "react";
import "./button.css";

const LocationButtonGroup = ({ buttons, action, buttonType, selectedDate }) => {
  const [clickedId, setClickedId] = useState(null);
  const [mouseOver, setMouseOver] = useState(null);
  const handleClick = (event, id) => {
    setClickedId(id);
    action(id);
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
          name={buttonLabel}
          onMouseEnter={(event) => handleMouseEnter(event, i)}
          onMouseLeave={(event) => handleMouseLeave(event, i)}
          onClick={(event) => {
            selectedDate === null
              ? alert("Please Select a Date First")
              : handleClick(event, i);
          }}
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
export default LocationButtonGroup;

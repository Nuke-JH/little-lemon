import React from "react";
import { useState } from "react";
import "./button.css";

const TimeButtonGroup = ({
  buttons,
  action,
  buttonType,
  selectedDate,
  selectedLocation,
  availableReservations,
}) => {
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
          //   onClick={(event) => checkAvailable(i)}
          onClick={(event) => {
            selectedDate === null
              ? alert("Please Select a Date and Location First")
              : selectedLocation === null
              ? alert("Please Select a Location First")
              : handleClick(event, i);
          }}
          //   className={
          //     selectedDate === null
          //       ? "disabledButtonStyle"
          //       : selectedLocation === null
          //       ? "disabledButtonStyle"
          //       : availableReservations[selectedDate][selectedLocation][i] ===
          //         true
          //       ? "defaultButtonStyle"
          //       : i === clickedId
          //       ? "active"
          //       : i === mouseOver
          //       ? "hoverButtonStyle"
          //       : "defaultButtonStyle"
          //   }
          className={
            selectedDate === null
              ? "disabledButtonStyle"
              : selectedLocation === null
              ? "disabledButtonStyle"
              : availableReservations[selectedDate][selectedLocation][i] ===
                false
              ? "disabledButtonStyle"
              : i === clickedId
              ? "active"
              : i === mouseOver
              ? "hoverButtonStyle"
              : "defaultButtonStyle"
          }
          //   className={
          //     i === clickedId
          //       ? "active"
          //       : i === mouseOver
          //       ? "hoverButtonStyle"
          //       : "defaultButtonStyle"
          //   }
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
export default TimeButtonGroup;

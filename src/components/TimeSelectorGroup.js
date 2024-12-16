import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./button.css";

const TimeButtonGroup = ({
  buttons,
  action,
  buttonType,
  selectedDate,
  selectedLocation,
  availableReservations,
  valueName,
  selectedTime,
}) => {
  const [clickedId, setClickedId] = useState(null);
  const [mouseOver, setMouseOver] = useState(null);

  useEffect(() => {
    selectedTime === null ? setClickedId(null) : console.log();
  }, [selectedTime, clickedId]);

  const handleClick = (event, id) => {
    if (availableReservations[selectedDate][selectedLocation][id] === true) {
      setClickedId(id);
      action(event, id);
    }
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
          //   onClick={(event) => checkAvailable(i)}
          onClick={(event) => {
            selectedDate === null
              ? alert("Please Select a Date and Location First")
              : selectedLocation === null
              ? alert("Please Select a Location First")
              : handleClick(event, i);
          }}
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
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
export default TimeButtonGroup;

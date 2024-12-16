import React from "react";
import { useState } from "react";
import DateButtonGroup from "./DateSelectorGroup";
import LocationButtonGroup from "./LocationSelectorGroup";
import TimeButtonGroup from "./TimeSelectorGroup";
import { availableReservations } from "./constants";
import { dates } from "./constants";
import { locations } from "./constants";
import { times } from "./constants";

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const handleChange = (event, id) => {
    const name = event.target.name;
    const value = event.target.value;
    // alert(name + " : " + value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const formValidation = (event, id) => {
    if (inputs.resDate === undefined) {
      alert("Please Select a Date");
      event.preventDefault();
    } else if (inputs.resDate === null) {
      alert("Please Select a Date");
      event.preventDefault();
    } else if (inputs.resLocation === undefined) {
      alert("Please Select a Location");
      event.preventDefault();
    } else if (inputs.resLocation === null) {
      alert("Please Select a Location");
      event.preventDefault();
    } else if (inputs.resTime === undefined) {
      alert("Please Select a Time");
      event.preventDefault();
    } else if (inputs.resTime === null) {
      alert("Please Select a Time");
      event.preventDefault();
    } else {
      handleSubmit(event, id);
    }
  };

  const handleSubmit = (event, id) => {
    let currentDate = new Date();
    let output =
      "resDate: " +
      inputs.resDate +
      ", resLocation: " +
      inputs.resLocation +
      ", resTime: " +
      inputs.resTime +
      ", partySize: " +
      inputs.partySize +
      ", fname: " +
      inputs.fname +
      ", lname: " +
      inputs.lname +
      ", phone: " +
      inputs.phone +
      ", occasion: " +
      inputs.occasion +
      ", comments: " +
      inputs.comments +
      ", date: " +
      currentDate.toLocaleDateString() +
      ", time: " +
      currentDate.toLocaleTimeString();
    alert(output);
  };
  const setDate = (event, id) => {
    setSelectedDate(id);
    handleChange(event, id);
    setSelectedLocation(null);
    setInputs((values) => ({ ...values, ["resLocation"]: null }));
    setSelectedTime("blank");
    setInputs((values) => ({ ...values, ["resTime"]: null }));
  };
  const setLocation = (event, id) => {
    setSelectedLocation(id);
    handleChange(event, id);
    setSelectedTime(null);
    setInputs((values) => ({ ...values, ["resTime"]: null }));
  };
  const setTime = (event, id) => {
    setSelectedTime(id);
    handleChange(event, id);
  };
  return (
    <>
      <form>
        <section
          className="reservation-selection"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="side-margin" style={{ width: "10%" }} />
          <div
            className="center-column"
            style={{
              display: "flex",
              width: "80%",
              lineHeight: "40px",
              marginTop: "40px",
              marginBottom: "40px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="buttongroup">
              {
                <DateButtonGroup
                  buttons={dates}
                  action={setDate}
                  buttonType={"button"}
                  valueName={"resDate"}
                />
              }
            </ul>
            <div className="party-size">
              <label htmlFor="party-size" style={{ paddingRight: "20px" }}>
                Party Size
              </label>
              <select
                name="partySize"
                id="partySize"
                value={inputs.partySize || ""}
                onChange={handleChange}
                placeholder={"Select Size"}
                required
              >
                <option value="" disabled selected hidden>
                  Select Size
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">More</option>
              </select>
            </div>
            <ul className="buttongroup">
              {
                <LocationButtonGroup
                  buttons={locations}
                  action={setLocation}
                  buttonType={"button"}
                  selectedDate={selectedDate}
                  selectedLocation={selectedLocation}
                  valueName={"resLocation"}
                />
              }
            </ul>
            <ul className="time-selection">
              {
                <TimeButtonGroup
                  buttons={times}
                  action={setTime}
                  buttonType={"button"}
                  selectedDate={selectedDate}
                  selectedLocation={selectedLocation}
                  selectedTime={selectedTime}
                  availableReservations={availableReservations}
                  valueName={"resTime"}
                />
              }
            </ul>
          </div>
          <div className="side-margin" style={{ width: "10%" }} />
        </section>
        <section
          className="reservation-submission"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="side-margin" style={{ width: "10%" }} />
          <div
            className="center-column"
            style={{
              display: "flex",
              width: "80%",
              lineHeight: "40px",
              marginTop: "40px",
              marginBottom: "40px",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <div className="reservation">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={inputs.fname || ""}
                onChange={handleChange}
                required={true}
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={inputs.lname || ""}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
                required={true}
              />
              <label htmlFor="occasion">Occasion</label>
              <select
                name="occasion"
                id="occasion"
                value={inputs.occasion || "because"}
                onChange={handleChange}
              >
                <option value="because">Just Because!</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
              <label htmlFor="comments">Comments</label>
              <textarea
                type="freeform"
                rows="4"
                cols="35"
                id="comments"
                name="comments"
                placeholder="If this is for a future date, please include the date here"
              />
            </div>
            <div style={{ padding: "25px" }} />
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
              {
                <DateButtonGroup
                  buttons={["Make Your Reservation!"]}
                  action={formValidation}
                  buttonType={"submit"}
                  valueName={"submitted"}
                />
              }
            </div>
          </div>
          <div className="side-margin" style={{ width: "10%" }} />
        </section>
      </form>
    </>
  );
};

export default ReservationForm;

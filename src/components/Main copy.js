import { useState } from "react";
import DateButtonGroup from "./DateSelectorGroup";
import LocationButtonGroup from "./LocationSelectorGroup";
import TimeButtonGroup from "./TimeSelectorGroup";
import { availableReservations } from "./constants";

function Main() {
  const dates = ["Today", "Tomorrow", "Future Date"];
  const locations = ["Inside", "Outside", "Either"];
  const times = [
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
    "5:15 pm",
    "5:30 pm",
    "5:45 pm",
    "6:00 pm",
    "6:15 pm",
    "6:30 pm",
    "6:45 pm",
    "7:00 pm",
    "7:15 pm",
    "7:30 pm",
    "7:45 pm",
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  const setDate = (id) => {
    setSelectedDate(id);
  };
  const setLocation = (id) => {
    setSelectedLocation(id);
    // console.log(selectedDate);
    // console.log("location: " + id);
  };
  const setTime = (id) => {
    // console.log(selectedDate);
    // console.log(selectedLocation);
    setSelectedTime(id);
    // console.log("time: " + id);
  };

  return (
    <main className="main" style={{ display: "flex", flexDirection: "column" }}>
      <section
        className="top-bar"
        style={{
          backgroundColor: "#495E57",
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>We Cannot Wait to See You!</h1>
            <h2>Little Lemon Reservations</h2>
            <ul>
              The experience is just a few clicks away
              <li>Pick the day you want to join us</li>
              <li>
                Tell us your party size (for parties over 6, please call so we
                can best serve you)
              </li>
              <li>
                Indicate if you prefer to sit inside, outside, or if it does not
                matter
              </li>
              <li>Pick an available time</li>
              <li>Let us know how to get a hold of you</li>
              <li>
                Feel free to share how we can make this visit perfect for you!
              </li>
            </ul>
          </div>
          <img
            src="images/restaurant chef b.jpg"
            alt="Chef at work"
            style={{
              width: "384px",
              height: "256px",
              objectFit: "cover",
              objectPosition: "10%",
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="side-margin" style={{ width: "10%" }} />
      </section>
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
                />
              }
            </ul>
            <div className="party-size">
              <label htmlFor="party-size" style={{ paddingRight: "20px" }}>
                Party Size
              </label>
              <select name="party-size" id="party-size">
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
                  availableReservations={availableReservations}
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
                  action={handleSubmit}
                  buttonType={"submit"}
                />
              }
            </div>
          </div>
          <div className="side-margin" style={{ width: "10%" }} />
        </section>
      </form>
      <section
        className="chefs-quote"
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
            backgroundColor: "#FBDAB6",
            borderRadius: "16px",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              color: "#000000",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Chef's Quote of the Day
          </h2>
          <h3
            style={{
              color: "#000000",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A quote will eventually appear here and change daily.
          </h3>
        </div>
        <div className="side-margin" style={{ width: "10%" }} />
      </section>
    </main>
  );
}

export default Main;

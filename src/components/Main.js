function Main() {
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
          clasName="center-column"
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
      <section
        className="reservation-selection"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="side-margin" style={{ width: "10%" }} />
        <div
          clasName="center-column"
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
          <ul
            className="day-selection"
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              gap: "0px 45px",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <li className="day">
              <button type="button" className="button" id="today">
                Today
              </button>
            </li>
            <li className="day">
              <button type="button" className="button" id="tomorrow">
                Tomorrow
              </button>
            </li>
            <li className="day">
              <button type="button" className="button" id="future">
                Future Date
              </button>
            </li>
          </ul>
          <div className="party-size">
            <label for="party-size" style={{ paddingRight: "20px" }}>
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
          <ul
            className="location"
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              gap: "0px 45px",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <li className="location">
              <button className="button" type="button" id="inside">
                Inside
              </button>
            </li>
            <li className="location">
              <button className="button" type="button" id="outside">
                Outside
              </button>
            </li>{" "}
            <li className="location">
              <button className="button" type="button" id="either">
                Either
              </button>
            </li>
          </ul>
          <div
            className="time-selection"
            style={{ padding: "45px", backgroundColor: "#333333" }}
          >
            <button className="button" id="4:00 pm">
              4:00 pm
            </button>
            <button className="button" id="4:15 pm">
              4:15 pm
            </button>
            <button className="button" id="4:30 pm">
              4:30 pm
            </button>
            <button className="button" id="4:45 pm">
              4:45 pm
            </button>
            <button className="button" id="5:00 pm">
              5:00 pm
            </button>
            <button className="button" id="5:15 pm">
              5:15 pm
            </button>
            <button className="button" id="5:30 pm">
              5:30 pm
            </button>
            <button className="button" id="5:45 pm">
              5:45 pm
            </button>
            <button className="button" id="6:00 pm">
              6:00 pm
            </button>
            <button className="button" id="6:15 pm">
              6:15 pm
            </button>
            <button className="button" id="6:30 pm">
              6:30 pm
            </button>
            <button className="button" id="6:45 pm">
              6:45 pm
            </button>
          </div>
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
          clasName="center-column"
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
          <form className="reservation">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" />
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" />
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
            <label for="occasion">Occasion</label>
            <select name="occasion" id="occasion">
              <option value="because">Just Because!</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
            <label for="comments">Comments</label>
            <textarea
              type="freeform"
              rows="4"
              cols="35"
              id="comments"
              name="comments"
            />
          </form>
          <button
            type="button"
            className="button"
            id="submit"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "45px",
            }}
          >
            Submit
          </button>
        </div>
        <div className="side-margin" style={{ width: "10%" }} />
      </section>
      <section
        className="chefs-quote"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="side-margin" style={{ width: "10%" }} />
        <div
          clasName="center-column"
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

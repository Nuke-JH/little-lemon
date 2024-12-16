import ReservationForm from "./ReservationForm";

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
      <section>
        <ReservationForm />
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

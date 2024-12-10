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
          }}
        ></div>
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
          }}
        ></div>
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
          }}
        ></div>
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
          }}
        ></div>
        <div className="side-margin" style={{ width: "10%" }} />
      </section>
    </main>
  );
}

export default Main;

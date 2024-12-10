function Nav() {
  const stylesLink = {
    color: "#000000",
    textDecoration: "none",
    fontFamily: "Markazi Text",
    fontSize: "24px",
  };
  return (
    <nav className="main-nav" style={{ display: "flex" }}>
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
      >
        <a href="index.html">
          <img
            src="images/LittleLemon.jpg"
            alt="Logo"
            width="148"
            height="40"
          />
        </a>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            margin: 0,
            gap: "0px 25px",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <li>
            <a href="index.html" style={stylesLink}>
              Home
            </a>
          </li>
          <li>
            <a href="about.html" style={stylesLink}>
              About
            </a>
          </li>
          <li>
            <a href="menu.html" style={stylesLink}>
              Menu
            </a>
          </li>
          <li>
            <a href="reservations.html" style={stylesLink}>
              Reservations
            </a>
          </li>
          <li>
            <a href="order.html" style={stylesLink}>
              Order Online
            </a>
          </li>
          <li>
            <a href="login.html" style={stylesLink}>
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="side-margin" style={{ width: "10%" }} />
    </nav>
  );
}

export default Nav;

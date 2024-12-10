function Footer() {
  const stylesLink = {
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "Markazi Text",
    fontSize: "24px",
  };
  return (
    <footer
      className="footer"
      style={{ display: "flex", backgroundColor: "#333333" }}
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
      >
        <img
          src="images/restaurant.jpg"
          alt="Interior of Restaurant"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            objectPosition: "10%",
            borderRadius: "16px",
          }}
        />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            paddingLeft: 25,
            gap: "0px 25px",
            flexGrow: 1,
            justifyContent: "flex-start",
            color: "#ffffff",
            textDecoration: "none",
            fontFamily: "Markazi Text",
            fontSize: "32px",
            lineHeight: "normal",
            margin: 0,
          }}
        >
          <ul style={{ listStyle: "none" }}>
            Doormat <br />
            Navigation <hr></hr>
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
          <ul style={{ listStyle: "none" }}>
            Contact Info <hr></hr>
            <li>
              <a href="address.html" style={stylesLink}>
                Address
              </a>
            </li>
            <li>
              <a href="phone.html" style={stylesLink}>
                Phone Number
              </a>
            </li>
            <li>
              <a href="email.html" style={stylesLink}>
                Email
              </a>
            </li>
          </ul>
          <ul style={{ listStyle: "none" }}>
            Social Media <hr></hr>
            <li>
              <a href="https://www.instagram.com" style={stylesLink}>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" style={stylesLink}>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com" style={stylesLink}>
                X
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="side-margin" style={{ width: "10%" }} />
    </footer>
  );
}

export default Footer;

import {Link} from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "15px",
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

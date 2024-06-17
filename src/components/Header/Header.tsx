import { Link } from "react-router-dom";

const Header = () => {
  const navStyle = {
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #e0e0e0",
    padding: "10px 20px",
  };

  const linkStyle = {
    marginRight: "12px",
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
  };

  return (
    <div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Level One
        </Link>
        <Link to="/LevelTwo" style={linkStyle}>
          Level Two
        </Link>
        <Link to="/LevelThree" style={linkStyle}>
          Level Three
        </Link>
      </nav>
    </div>
  );
};

export default Header;

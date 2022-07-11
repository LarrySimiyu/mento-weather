import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="linkContainer">
        <Link to="/" className="link" style={{ textDecoration: "none" }}>
          {" "}
          Home{" "}
        </Link>
      </div>
      <div className="linkContainer">
        <Link
          to="/hotAndNot"
          className="link"
          style={{ textDecoration: "none" }}
        >
          HOTnNOT
        </Link>
      </div>
    </div>
  );
};

export { NavBar };

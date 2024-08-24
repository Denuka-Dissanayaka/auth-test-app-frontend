import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: "10px" }}>
        <Link to={"/"}>
          <li style={{ margin: "5px" }}>home</li>
        </Link>
        <Link to={"/dashboard"}>
          <li style={{ margin: "5px" }}>dashboard</li>
        </Link>
      </ul>
      <Link to={"/"}>
        <button>Signup</button>
      </Link>
      <Link to={"/login"}>
        <button>login</button>
      </Link>
      <button>logout</button>
    </div>
  );
}

export default Navbar;

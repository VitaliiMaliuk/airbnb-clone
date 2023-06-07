import React from "react";
import logo from "/assets/airbnb-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo"/>
    </nav>
  );
}

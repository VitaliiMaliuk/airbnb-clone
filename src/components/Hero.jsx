import React from "react";
import hero from "/assets/photo-grid.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} className="hero--photo"/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

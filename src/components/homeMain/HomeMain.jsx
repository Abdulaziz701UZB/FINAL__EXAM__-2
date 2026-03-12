import React from "react";
import { main } from "../../data/Home";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <section className="hero-banner-container">
      <div className="hero-content-left">
        <span className="hero-top-label">{main.topSub}</span>
        <h1 className="hero-main-headline">{main.title}</h1>
        <p className="hero-bottom-info">{main.botSub}</p>

        <figure className="pagination-indicator">
          <img src={main.pages} />
        </figure>
      </div>

      <div className="hero-visual-right">
        <img className="hero-primary-image" src={main.img} />
      </div>
    </section>
  );
};

export default HomeMain;

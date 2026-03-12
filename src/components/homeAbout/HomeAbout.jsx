import React from "react";
import { about } from "../../data/Home";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="features-showcase-bar">
      {about.map((feature, idx) => (
        <article className="feature-card" key={`feat-${idx}`}>
          <figure className="feature-icon-box">
            <img src={feature.img} />
          </figure>
          <div className="feature-content">
            <h3 className="feature-title">{feature.text}</h3>
            <p className="feature-description">{feature.subtitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomeAbout;

import React from "react";
import { electronics_top, electronics__cont } from "../../data/Home";
import "./HomeElectronics.css";

const HomeElectronics = () => {
  return (
    <section className="tech-showcase-container">
      <header className="tech-header">
        <h2 className="tech-title">
          {electronics_top.title}{" "}
          <span className="highlight-word">{electronics_top.titleSpan}</span>
        </h2>
        <button className="tech-action-btn">{electronics_top.btn}</button>
      </header>

      <div className="tech-grid-layout">
        {electronics__cont.map((item, idx) => (
          <article
            key={`tech-${idx}`}
            style={{ backgroundColor: item.bg }}
            className="tech-promo-card"
          >
            <div className="tech-card-details">
              <span
                className="category-tag"
                style={{ backgroundColor: item.nameCol }}
              >
                {item.name}
              </span>
              <img src={item.logo} className="brand-icon" />
              <h3 className="promo-heading">{item.title}</h3>
            </div>

            <figure className="promo-image-wrapper">
              <img src={item.img} className="main-product-img" />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeElectronics;

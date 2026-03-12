import React from "react";
import { frequently_top, frequently_cont } from "../../data/Home";
import "./HomeFrequently.css";

const HomeFrequently = () => {
  return (
    <section className="trending-showcase-container">
      <header className="showcase-header">
        <h2 className="showcase-main-title">{frequently_top.title}</h2>
        <button className="showcase-action-btn">{frequently_top.btn}</button>
      </header>

      <main className="product-listing-grid">
        {frequently_cont.map((item, idx) => (
          <article key={`frequent-${idx}`} className="listing-card">
            <figure className="listing-image-wrapper">
              <img src={item.img} className="listing-thumb" />
            </figure>

            <div className="listing-info-block">
              <h3 className="listing-name">{item.text}</h3>
              <p className="listing-price-tag">{item.price}</p>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};

export default HomeFrequently;

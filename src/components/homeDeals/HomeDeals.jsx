import React from "react";
import { deals_cont } from "../../data/Home";
import "./HomeDeals.css";

const HomeDeals = () => {
  return (
    <section className="flash-deals-section">
      <header className="deals-header">
        <h2 className="deals-main-title">Today’s Deals of the day</h2>
        <div className="deals-timer-wrapper">
          <p className="countdown-text">
            Deals ends in{" "}
            <time className="time-badge">16d : 21h : 57m : 23s</time>
          </p>
          <button className="view-all-trigger">VIEW ALL</button>
        </div>
      </header>

      <div className="deals-products-grid">
        {deals_cont.map((product, idx) => (
          <article className="deal-item-card" key={`deal-${idx}`}>
            <figure className="deal-image-holder">
              <img src={product.img} className="deal-thumbnail" />
            </figure>

            <h3 className="deal-product-name">{product.title}</h3>

            <button className="deal-action-btn">
              {product.button}{" "}
              <span className="price-tag">{product.buttonSpan}</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeDeals;

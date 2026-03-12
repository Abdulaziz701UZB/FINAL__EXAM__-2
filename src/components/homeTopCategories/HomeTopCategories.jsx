import React from "react";
import { categorialar_top, categorialar_cont } from "../../data/Home";
import "./HomeTopCategories.css";

const HomeTopCategories = () => {
  return (
    <section className="top-categories-section">
      <header className="categories-header">
        <h2 className="categories-title">
          {categorialar_top.title}{" "}
          <span className="title-highlight">{categorialar_top.titleSpan}</span>
        </h2>
        <button className="explore-all-btn">{categorialar_top.button}</button>
      </header>

      <div className="categories-grid-wrapper">
        {categorialar_cont.map((item, idx) => (
          <div key={`cat-${idx}`} className="category-item-card">
            <figure className="category-circle-box">
              <img src={item.img} className="category-thumb" />
            </figure>
            <h4 className="category-label">{item.text}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTopCategories;

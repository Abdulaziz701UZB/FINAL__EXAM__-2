import React from "react";
import { c__C } from "../../data/Categorialar";
import "./AllCategories.css";

const AllCategories = () => {
  return (
    <main className="categories-page-container">
      <header className="categories-toolbar">
        <div className="toolbar-stats">
          <h2 className="toolbar-title">All Categories</h2>
          <p className="items-counter">Showing 1 - 40 of 145 items</p>
        </div>

        <div className="toolbar-filters">
          <div className="filter-group">
            <label className="filter-label">Show:</label>
            <input type="number" className="show-input" placeholder="9" />
          </div>
          
          <div className="filter-group">
            <select className="sort-select" defaultValue="default">
              <option value="default" disabled>Sort by Position</option>
              <option value="price">Price: Low to High</option>
              <option value="name">A - Z</option>
            </select>
          </div>
        </div>
      </header>

      <section className="categories-main-grid">
        {c__C.map((item, index) => (
          <div key={`full-cat-${index}`} className="category-item-tile">
            <div className="category-image-wrapper">
              <img src={item.img} className="category-img" />
            </div>
            <h4 className="category-name-text">{item.text}</h4>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AllCategories;
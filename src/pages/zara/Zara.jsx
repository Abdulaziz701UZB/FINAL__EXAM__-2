import React from "react";
import { Link } from "react-router-dom";
import { zara_cont } from "../../data/Zara";
import "./Zara.css";

import cartImgIcon1 from "../../assets/zara__c--i1.png";
import cartImgIcon2 from "../../assets/zara__c--i2.png";

const Zara = () => {
  const brands = [
    "Nike",
    "Rebook",
    "Zara",
    "Gearo",
    "Indi",
    "Aei",
    "Lulu",
    "Beast",
  ];

  return (
    <main className="zara-page-container">
      <header className="zara-toolbar">
        <div className="toolbar-info">
          <h2 className="brand-title">ZARA</h2>
          <p className="item-stats">Showing 1 - 40 of 145 items</p>
        </div>
        <div className="toolbar-actions">
          <div className="action-item">
            <span>To Show:</span>
            <input type="number" placeholder="9" className="qty-input" />
          </div>
          <select className="sort-dropdown">
            <option>Position</option>
            <option>Price: Low to High</option>
            <option>Newest First</option>
          </select>
        </div>
      </header>

      <div className="zara-layout">
        <aside className="zara-sidebar">
          <section className="filter-group">
            <button className="filter-toggle-btn">
              Size <span>+</span>
            </button>

            <button className="filter-toggle-btn active">
              Brand <span>−</span>
            </button>
            <form className="brand-checklist">
              {brands.map((brand) => (
                <div key={brand} className="checkbox-item">
                  <input type="checkbox" id={brand} />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </form>

            <button className="filter-toggle-btn">
              Price Range <span>+</span>
            </button>
            <button className="filter-toggle-btn">
              Discount <span>+</span>
            </button>
            <button className="filter-toggle-btn">
              Availability <span>+</span>
            </button>
          </section>
        </aside>

        <section className="zara-products-grid">
          {zara_cont.map((product, index) => (
            <article key={index} className="zara-product-card">
              <div className="product-image-container">
                <img src={product.img} className="product-main-img" />

                <div className="product-hover-actions">
                  <Link to="/product" className="hover-icon-btn">
                    <img src={cartImgIcon1} />
                  </Link>
                  <button className="hover-icon-btn">
                    <img src={cartImgIcon2} />
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-rating">
                  <img src={product.stars} />
                  <span className="rating-count">
                    {product.starsText} {product.starsSpan}
                  </span>
                </div>
                <div className="product-card-btns">
                  <button className="btn-primary">{product.btn1}</button>
                  <button className="btn-outline">{product.btn2}</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Zara;

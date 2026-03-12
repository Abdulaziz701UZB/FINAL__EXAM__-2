import React, { useState } from "react";
import "./Product.css";
import HomeFrequently from "../../components/homeFrequently/HomeFrequently";

import mainImg from "../../assets/product__i1.png";
import secondaryImg from "../../assets/product__i2.png";
import colorOptions from "../../assets/product__c--i.png";
import checkoutBadge from "../../assets/product__ch--i.png";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="product-details-page">
      <div className="product-view-container">
        <section className="product-gallery">
          <figure className="main-image-box">
            <img src={mainImg} className="primary-view" />
          </figure>
          <div className="thumbnail-strip">
            <img src={secondaryImg} className="thumb-item" />
          </div>
        </section>

        <section className="product-info-column">
          <h1 className="product-main-title">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </h1>

          <div className="product-meta-grid">
            <div className="meta-item">
              Sku: <strong>A264671</strong>
            </div>
            <div className="meta-item">
              Brand: <strong>Apple</strong>
            </div>
            <div className="meta-item">
              Availability: <span className="in-stock-label">In Stock</span>
            </div>
            <div className="meta-item">
              Category: <strong>Electronics Devices</strong>
            </div>
          </div>

          <div className="pricing-card">
            <div className="main-price-row">
              <span className="current-price">Rs 1,25,000</span>
              <span className="original-price">₹1,56,000</span>
              <mark className="discount-tag">21% OFF</mark>
            </div>
            <div className="deal-divider">or</div>
            <p className="special-offer">
              Special Deal: <span>Rs 90,000</span>
            </p>
          </div>

          <form className="product-configurator">
            <div className="config-group">
              <label>Color</label>
              <img src={colorOptions} className="color-selector" />
            </div>

            <div className="config-group">
              <label>Size / Display</label>
              <select className="config-select">
                <option>13-inch Retina display</option>
                <option>14-inch Liquid Retina XDR</option>
              </select>
            </div>

            <div className="config-group">
              <label>Memory (RAM)</label>
              <select className="config-select">
                <option>8GB unified memory</option>
                <option>16GB unified memory</option>
              </select>
            </div>
          </form>

          <div className="purchase-actions">
            <div className="quantity-stepper">
              <button type="button" onClick={decreaseQty}>
                −
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button className="btn-get-deal">Get DEAL (₹90k)</button>
            <button className="btn-add-cart">ADD TO CART</button>
          </div>

          <div className="security-badge">
            <p>100% Guarantee Safe Checkout</p>
            <img src={checkoutBadge} />
          </div>

          <article className="full-description">
            <h3>Product Description</h3>
            <p>
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life.
            </p>
          </article>
        </section>
      </div>

      <HomeFrequently />
    </main>
  );
};

export default Product;

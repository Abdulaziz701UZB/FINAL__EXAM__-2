import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { cont, cont_left } from "../../data/Cart";

import HomeFrequently from "../../components/homeFrequently/HomeFrequently";

import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopping_cart");
    return savedCart
      ? JSON.parse(savedCart)
      : cont.map((item) => ({ ...item, qty: 1 }));
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQty = (index, delta) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const removeItem = (index) => {
    const filteredItems = cartItems.filter((_, i) => i !== index);
    setCartItems(filteredItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      const cleanPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return acc + cleanPrice * item.qty;
    }, 0);
    return total.toLocaleString("en-IN", { minimumFractionDigits: 2 });
  };

  return (
    <main className="cart-container">
      <nav className="cart-nav">
        <Link to="/" className="back-btn-link">
          <span className="arrow">←</span> Back to Shopping
        </Link>
      </nav>

      <section className="cart-content">
        <div className="cart-main-area">
          <header className="cart-page-header">
            <h1 className="main-title">My Cart</h1>
            <p className="subtitle">Confirm your items before checkout</p>
          </header>

          {cartItems.length > 0 ? (
            <div className="items-list">
              {cartItems.map((item, index) => (
                <article key={index} className="product-item-card">
                  <div className="product-info-group">
                    <img
                      src={item.img}
                      className="product-img"
                    />
                    <div className="product-meta">
                      <h4 className="product-title">{item.title}</h4>
                      <p className="stock-label">In Stock</p>
                    </div>
                  </div>

                  <div className="price-display">
                    <span className="price-value">{item.price}</span>
                  </div>

                  <div className="qty-controls">
                    <button
                      className="qty-action"
                      onClick={() => updateQty(index, -1)}
                      disabled={item.qty <= 1}
                    >
                      −
                    </button>
                    <span className="qty-number">{item.qty}</span>
                    <button
                      className="qty-action"
                      onClick={() => updateQty(index, 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-item-trigger"
                    onClick={() => removeItem(index)}
                    title="Remove item"
                  >
                    x
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <Link to="/" className="start-shopping-btn">
                Start Shopping
              </Link>
            </div>
          )}
        </div>

        <aside className="cart-summary-sidebar">
          <div className="summary-sticky-card">
            <h3 className="summary-heading">Order Summary</h3>

            <div className="stats-rows">
              {cont_left.map((stat, i) => (
                <div className="stat-line" key={i}>
                  <span className="label">{stat.text}</span>
                  <span className="value">{stat.price}</span>
                </div>
              ))}
            </div>

            <hr className="divider" />

            <div className="grand-total-row">
              <span className="total-label">Grand Total</span>
              <span className="total-amount">₹{calculateTotal()}</span>
            </div>

            <button className="checkout-main-btn">Proceed to Checkout</button>

            <div className="trust-badges">
            </div>
          </div>
        </aside>
      </section>

      <div className="frequently-section-wrapper">
        <HomeFrequently />
      </div>
    </main>
  );
};

export default Cart;

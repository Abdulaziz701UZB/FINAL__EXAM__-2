import { useState } from "react";
import { Link } from "react-router-dom";
import { cont2, rightrightImg } from "../../data/Categorialar";
import "./Categorialar.css";

const Categorialar = ({ cont, popup_left, popup_right }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="catalog-wrapper">
      <div className="catalog-links">
        {cont.map((item, idx) => (
          <Link
            key={`cat-${idx}`}
            to={item.to}
            className="nav-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item.text}
          </Link>
        ))}
      </div>

      {isHovered && (
        <section
          className="mega-menu-overlay"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <aside className="filter-sidebar">
            {popup_left.map((label, idx) => (
              <button key={`btn-${idx}`} className="filter-btn">
                {label}
              </button>
            ))}
          </aside>

          <section className="content-grid">
            <nav className="sub-category-list">
              {popup_right.map((text, idx) => (
                <Link key={`sub-${idx}`} to="/zara" className="sub-link">
                  {text}
                </Link>
              ))}
            </nav>

            <div className="featured-showcase">
              <header className="showcase-title">FEATURED PHONES</header>
              {cont2.map((product, idx) => (
                <article key={`prod-${idx}`} className="product-card">
                  <figure className="product-img-box">
                    <img src={product.img} />
                  </figure>
                  <div className="product-info">
                    <h4>{product.text}</h4>
                    <span>{product.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <aside className="promo-banner">
              <img src={rightrightImg} className="banner-thumb" />
              <div className="banner-content">
                <mark className="discount-badge">21% Discount</mark>
                <h5>
                  Escape the noise, It's time to hear the magic with Xiaomi
                  Earbuds.
                </h5>
                <p>
                  Starting price: <strong>$99 USD</strong>
                </p>
                <button className="cta-button">Shop now</button>
              </div>
            </aside>
          </section>
        </section>
      )}
    </nav>
  );
};

export default Categorialar;

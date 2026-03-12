import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title, flashSale, rightCont }) => {
  return (
    <header className="top-navigation-bar">
      <section className="brand-wrapper">
        <div className="menu-icon-container">
          <HiOutlineBars3BottomLeft className="icon-bars" />
        </div>
        <Link className="brand-home-link" to="/">
          <h1 className="main-logo-text">{title}</h1>
        </Link>
        <figure className="promo-badge">
          <img src={flashSale} />
        </figure>
      </section>

      <div className="global-search-area">
        <IoMdSearch className="search-symbol" />
        <input
          autoComplete="off"
          type="search"
          placeholder="Search essentials, groceries and more..."
          className="main-search-input"
        />
      </div>

      <nav className="user-utility-nav">
        {rightCont.map((item, idx) => (
          <button key={`action-${idx}`} className="action-trigger-btn">
            <img src={item.img} className="btn-thumbnail" />
            <Link
              className="action-title-link"
              to="/cart"
              style={{ color: item.col }}
            >
              {item.title}
            </Link>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import siteLogo from "../../assets/footer-l.png";
import playStoreImg from "../../assets/footer__d--i1.png";
import appStoreImg from "../../assets/footer__d--i2.png";
import { footer_links } from "../../data/Padding";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <section className="footer-identity">
        <img src={siteLogo} className="footer-logo" />

        <div className="contact-info">
          <p className="info-label">Customer Supports:</p>
          <h4 className="contact-value">(629) 555-0129</h4>

          <address className="office-address">
            4517 Washington Ave. <br />
            Manchester, Kentucky 39495
          </address>

          <h4 className="contact-value">info@kinbo.com</h4>
        </div>
      </section>

      <nav className="footer-navigation">
        {footer_links.map((section, sectionIdx) => (
          <div key={`section-${sectionIdx}`} className="nav-group">
            <h3 className="nav-group-title">{section.title}</h3>
            <ul className="nav-list">
              {section.links.map((linkName, linkIdx) => (
                <li key={`link-${linkIdx}`} className="nav-list-item">
                  <Link to="#" className="footer-anchor">
                    {linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <section className="app-promotion">
        <h3 className="promo-title">Download App</h3>
        <div className="download-actions">
          <button className="market-btn" type="button">
            <img src={playStoreImg} />
          </button>
          <button className="market-btn" type="button">
            <img src={appStoreImg} />
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

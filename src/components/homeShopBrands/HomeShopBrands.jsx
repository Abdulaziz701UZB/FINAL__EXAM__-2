import React from "react";
import { brands } from "../../data/Home";
import "./HomeShopBrands.css";

const HomeShopBrands = () => {
  return (
    <section className="partners-logo-stripe">
      {brands.map((logoSource, idx) => (
        <figure className="brand-display-unit" key={`brand-${idx}`}>
          <img src={logoSource} className="brand-vector-img" />
        </figure>
      ))}
    </section>
  );
};

export default HomeShopBrands;

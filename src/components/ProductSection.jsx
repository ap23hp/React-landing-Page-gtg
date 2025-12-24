import "../styles/product.css";

import ProductGallery from "./ProductGallery.JSX";
import SubscriptionCard from "./SubscriptionCard.jsx";

import star from "../assets/5star.svg";

export default function ProductSection() {
  return (
    <section className="product-section" aria-labelledby="product-title">
      <div className="product-container">
        {/* LEFT : PRODUCT GALLERY */}
        <ProductGallery />

        {/* RIGHT : PRODUCT DETAILS */}
        <article className="product-details">
          {/* HEADER */}
          <header className="product-header">
            <h2 id="product-title">GTG Perfumes</h2>

            <div className="rating">
              <img src={star} className="star" alt="4.7 star rating" />
              <span>4.7 (999+ reviews)</span>
            </div>

            <p className="product-desc">
              Experience the timeless allure backed by modern artistry, captured
              in every bottle of our fragrance. Crafted for those who seek to
              elevate their essence with purpose and sophistication.
            </p>
          </header>

          {/* SUBSCRIPTION */}
          <SubscriptionCard />
        </article>
      </div>
    </section>
  );
}

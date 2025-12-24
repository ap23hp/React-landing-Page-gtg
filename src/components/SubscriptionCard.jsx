import { useState } from "react";
import "../styles/subscription.css";

import original from "../assets/orignal1.png";
import lily from "../assets/lily2.png";
import rose from "../assets/rose3.png";

import every30 from "../assets/every30days.png";
import free1 from "../assets/onetimefree1.png";
import free2 from "../assets/onetimefree2.png";
import free3 from "../assets/onetimefree3.png";

export default function SubscriptionCard() {
  const [plan, setPlan] = useState("single");

  const [singleFragrance, setSingleFragrance] = useState("original");
  const [doubleFragrance1, setDoubleFragrance1] = useState("original");
  const [doubleFragrance2, setDoubleFragrance2] = useState("original");

  const addToCartUrl =
    plan === "single"
      ? `/cart?plan=single&fragrance=${singleFragrance}`
      : `/cart?plan=double&fragrance1=${doubleFragrance1}&fragrance2=${doubleFragrance2}`;

  return (
    <>
      {/* ================= SINGLE SUBSCRIPTION ================= */}
      <section
        className={`subscription-card ${plan === "single" ? "active" : ""}`}
      >
        <div className="subscription-badge">Most Popular</div>

        <div className="subscription-header">
          <label className="subscription-title">
            <input
              type="radio"
              name="plan"
              checked={plan === "single"}
              onChange={() => setPlan("single")}
            />
            <span>Single Subscription</span>
          </label>

          <div className="subscription-price">
            <span className="price-current">$99.99</span>
            <span className="price-old">$146</span>
          </div>
        </div>

        <hr />

        {/* CHOOSE FRAGRANCE */}
        <div className="subscription-section">
          <p className="section-title">Choose a Fragrance</p>

          <div className="fragrance-options">
            {[
              { key: "original", img: original, label: "Original", best: true },
              { key: "lily", img: lily, label: "Lily" },
              { key: "rose", img: rose, label: "Rose" },
            ].map((item) => (
              <label
                key={item.key}
                className={`fragrance ${
                  singleFragrance === item.key ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="fragrance_single"
                  checked={singleFragrance === item.key}
                  onChange={() => setSingleFragrance(item.key)}
                />
                {item.best && <span className="best">BEST-SELLER</span>}
                <img src={item.img} alt={item.label} />
                <span className="name">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="subscription-section">
          <p className="section-title">What’s Included:</p>

          <div className="included-box">
            <div className="included-item">
              <span className="muted">Every 30 Days</span>
              <img src={every30} alt="Every 30 Days" />
            </div>

            <div className="included-item large">
              <span className="muted">
                One Time <strong className="muted-strong">(Free)</strong>
              </span>
              <div className="included-images">
                <img src={free1} alt="" />
                <img src={free2} alt="" />
                <img src={free3} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <ul className="benefits">
          <li>
            <strong>1 Bottle</strong> Shipped Monthly
          </li>
          <li>
            <strong>Free Sampler</strong> for Original, Lily & Rose
          </li>
          <li>
            <strong>50% OFF Shipping</strong>
          </li>
          <li>Pause or Cancel Anytime After 3 Months</li>
          <li>28 Day Money Back Guarantee*</li>
        </ul>
      </section>

      {/* ================= DOUBLE SUBSCRIPTION ================= */}
      <section
        className={`subscription-card double ${
          plan === "double" ? "active" : ""
        }`}
      >
        <div className="subscription-header">
          <label className="subscription-title">
            <input
              type="radio"
              name="plan"
              checked={plan === "double"}
              onChange={() => setPlan("double")}
            />
            <span>Double Subscription</span>
          </label>

          <div className="subscription-price">
            <span className="price-current">$169.99</span>
            <span className="price-old">$196</span>
          </div>
        </div>

        {plan === "double" && (
          <div className="subscription-content">
            <hr />

            {/* FRAGRANCE 1 */}
            <div className="subscription-section">
              <p className="section-title">Choose Fragrance 1</p>
              <div className="fragrance-options">
                {["original", "lily", "rose"].map((f) => (
                  <label
                    key={f}
                    className={`fragrance ${
                      doubleFragrance1 === f ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="double1"
                      checked={doubleFragrance1 === f}
                      onChange={() => setDoubleFragrance1(f)}
                    />
                    <img
                      src={f === "original" ? original : f === "lily" ? lily : rose}
                      alt={f}
                    />
                    <span className="name">
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* FRAGRANCE 2 */}
            <div className="subscription-section">
              <p className="section-title">Choose Fragrance 2</p>
              <div className="fragrance-options">
                {["original", "lily", "rose"].map((f) => (
                  <label
                    key={f}
                    className={`fragrance ${
                      doubleFragrance2 === f ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="double2"
                      checked={doubleFragrance2 === f}
                      onChange={() => setDoubleFragrance2(f)}
                    />
                    <img
                      src={f === "original" ? original : f === "lily" ? lily : rose}
                      alt={f}
                    />
                    <span className="name">
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <ul className="benefits">
              <li>
                <strong>2 Bottles</strong> Shipped Monthly
              </li>
              <li>
                <strong>Free Sampler</strong> for Original, Lily & Rose
              </li>
              <li>
                <strong>50% OFF Shipping</strong>
              </li>
              <li>Pause or Cancel Anytime After 3 Months</li>
              <li>28 Day Money Back Guarantee*</li>
            </ul>
          </div>
        )}
      </section>

      {/* ADD TO CART */}
      <a href={addToCartUrl} className="add-to-cart">
        Add to Cart
      </a>
    </>
  );
}

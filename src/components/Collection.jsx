import { useState } from "react";
import "../styles/collection.css";

import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import collectionImg from "../assets/collection.png";

const data = [
  {
    title: "Signature Scents",
    content:
      "Discover our curated line of signature perfumes, designed to become your daily companion.",
  },
  {
    title: "Long Lasting Fragrance",
    content:
      "Our fragrances are crafted with premium oils to ensure long-lasting presence throughout the day.",
  },
  {
    title: "Skin Friendly Formula",
    content:
      "Dermatologically tested and suitable for all skin types, even sensitive skin.",
  },
  {
    title: "Modern Bottle Design",
    content:
      "A minimal yet premium bottle design that complements your lifestyle and aesthetics.",
  },
];

export default function Collection() {
  const [activeIndex, setActiveIndex] = useState(0); // default open first

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="collection-section">
      <div className="collection-container">
        {/* LEFT CONTENT */}
        <div className="collection-left">
          <h2 className="collection-title">Our Collection</h2>

          <div className="collection-accordion">
            {data.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`collection-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="collection-header"
                    onClick={() => toggleItem(index)}
                  >
                    <span>{item.title}</span>

                    <span className="icon">
                      <img
                        src={isActive ? minus : plus}
                        alt={isActive ? "collapse" : "expand"}
                      />
                    </span>
                  </button>

                  {isActive && (
                    <div className="collection-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="collection-right">
          <img src={collectionImg} alt="Perfume Collection" />
        </div>
      </div>
    </section>
  );
}

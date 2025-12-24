import { useState } from "react";
import "../styles/product.css";

import leftArrow from "../assets/left-slider-arrow.svg";
import rightArrow from "../assets/right-slider-arrow.svg";

/* MAIN IMAGES */
import big1 from "../assets/big1.png";
import big2 from "../assets/big2.png";
import big3 from "../assets/big3.png";
import big4 from "../assets/big4.png";

/* THUMBNAILS */
import thumb1 from "../assets/1.png";
import thumb2 from "../assets/2.png";
import thumb3 from "../assets/3.png";
import thumb4 from "../assets/4.png";

const images = [
  { big: big1, thumb: thumb1 },
  { big: big2, thumb: thumb2 },
  { big: big3, thumb: thumb3 },
  { big: big4, thumb: thumb4 },
];

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="product-gallery">
      {/* ================= MAIN IMAGE ================= */}
      <div className="gallery-frame">
        <img
          src={images[currentIndex].big}
          alt="GTG Perfume"
          className="gallery-image"
        />

        {/* LEFT ARROW */}
        <button
          className="gallery-arrow prev"
          onClick={goPrev}
          aria-label="Previous image"
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        {/* RIGHT ARROW */}
        <button
          className="gallery-arrow next"
          onClick={goNext}
          aria-label="Next image"
        >
          <img src={rightArrow} alt="Next" />
        </button>

        {/* DOTS */}
        <div className="gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="gallery-thumbs">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumb ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Select image ${index + 1}`}
          >
            <img src={img.thumb} alt={`Perfume thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

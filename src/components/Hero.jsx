import "../styles/hero.css";

import heroImg from "../assets/hero.png";
import medal from "../assets/Medal.svg";

export default function Hero() {
  return (
    <section className="hero">
      {/* HERO IMAGE */}
      <img
        src={heroImg}
        alt="GTG Perfumes Hero"
        className="hero-image"
      />

      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* Award Badge */}
        <div className="badge">
          <img src={medal} alt="Award medal" />
          <span>Awarded the best perfume in the world</span>
        </div>

        {/* Heading */}
        <h1>Live your best life.</h1>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10x</span>
            <span className="stat-label">power</span>
          </div>

          <div className="stat">
            <span className="stat-number">9</span>
            <span className="stat-label">ingredients</span>
          </div>

          <div className="stat">
            <span className="stat-number">20K+</span>
            <span className="stat-label">happy customers</span>
          </div>
        </div>

        {/* CTA */}
        <a href="#" className="hero-btn">
          Shop Now
        </a>
      </div>
    </section>
  );
}

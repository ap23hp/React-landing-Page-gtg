import { useState } from "react";
import "../styles/footer.css";

import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import xIcon from "../assets/X.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder for API integration
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <footer className="Footer">
      <div className="Footer-container">
        {/* LEFT */}
        <div className="Footer-left">
          <h3 className="Footer-logo">GTG</h3>

          <div className="Footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Fragrances</a></li>
            </ul>

            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <ul className="Footer-social">
              <li>
                <img src={facebook} alt="Facebook" />
                <span>Facebook</span>
              </li>
              <li>
                <img src={instagram} alt="Instagram" />
                <span>Instagram</span>
              </li>
              <li>
                <img src={xIcon} alt="X" />
                <span>X</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="Footer-right">
          <p className="Footer-newsletter-title">
            Join our newsletter to stay up to date on features and releases.
          </p>

          <form className="Footer-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

          <p className="Footer-privacy">
            By subscribing you agree to with our{" "}
            <a href="#">Privacy Policy</a> and provide consent to receive updates
            from our company.
          </p>
        </div>
      </div>
    </footer>
  );
}

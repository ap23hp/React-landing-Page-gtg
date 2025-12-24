import { useState } from "react";
import '../styles/header.css';
import arrowDown from "../assets/arrowDown.svg";
import search from "../assets/search.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">GTG</div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>

            <li
              className={`has-dropdown ${dropdownOpen ? "active" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Shop <img src={arrowDown} alt="dropdown" />
              </button>

              <ul className="dropdown-menu">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Perfumes</a></li>
                <li><a href="#">Subscriptions</a></li>
              </ul>
            </li>

            <li><a href="#">Fragrances</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-btn">
            <img src={search} alt="search" />
          </button>

          <a className="shop-btn" href="#">Shop Now</a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

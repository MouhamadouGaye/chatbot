import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1>My Portfolio</h1>
    <nav className="nav">
      <ul className="header-container">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

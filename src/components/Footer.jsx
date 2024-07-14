import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="first-container">
        <ul>
          <div>
            <li>
              <a href=""> facebook</a>
            </li>
          </div>
          <div>
            <li>
              <a href=""> Linkedin</a>
            </li>
          </div>
          <div>
            <li>
              <a href=""> Github</a>
            </li>
          </div>
          <div>
            <li>
              <a href=""> X twiter</a>
            </li>
          </div>
        </ul>
      </div>

      <ul className="second-container">
        <li>
          <a href="">firstOne</a>
        </li>
        <li>
          <a href="">SecondOne</a>
        </li>
        <li>
          <a href="">ThirdOne</a>
        </li>
        <li>
          <a href=""> fourthOne</a>
        </li>
        <li>
          <a href="">fiveOne</a>
        </li>
        <li>
          <a href="">sixOne</a>
        </li>
      </ul>

      <div className="third-container">
        <div>COOL</div>
        <div>COOL</div>
        <div>COOL</div>
      </div>
    </div>
    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
  </footer>
);

export default Footer;

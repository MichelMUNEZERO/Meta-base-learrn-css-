import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="dots-grid">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="dot color3"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>

          <div className="dot"></div>
          <div className="dot color2"></div>
          <div className="dot color3"></div>
          <div className="dot"></div>
          <div className="dot color2"></div>

          <div className="dot color3"></div>
          <div className="dot"></div>
          <div className="dot color2"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot color2"></div>
          <div className="dot"></div>
          <div className="dot color2"></div>
          <div className="dot"></div>
          <div className="dot color3"></div>

          <div className="dot"></div>
          <div className="dot color2"></div>
          <div className="dot"></div>
          <div className="dot color3"></div>
          <div className="dot color2"></div>

          <div className="dot"></div>
          <div className="dot color3"></div>
          <div className="dot color2"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          {/* Row 7 */}
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="dot color3"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>
        <div className="head-logo">
          <h1>Michel</h1>
        </div>
      </div>

      <div className="element-header">
        <ul>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>

      <div className="button-header">
        <button className="btn-login">Log in</button>
        <button className="btn-getstarted">Get started</button>
      </div>
    </div>
  );
}

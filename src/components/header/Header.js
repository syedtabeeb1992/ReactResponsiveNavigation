import React, { useState } from "react";
import { FaBars, FaBeer } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  const [slide, setSlide] = useState(false);
  const onSlideHandler = () => {
    setSlide(!slide);
  };

  const backdrop = <div className="backdrop" onClick={onSlideHandler}></div>;

  return (
    <header className="box-shadow-beeb">
      {slide ? backdrop : ""}

      <div className="logo-container">
       Logo
        <span className="primary-color">
          <strong> Here </strong>
        </span>
      </div>
      <div className="hamburder" onClick={onSlideHandler}>
      <FaBars />
      </div>
      <div className={`nav-links-wrapper ${slide ? "width-clicked" : ""}`}>
        <div className="nav-link active">
          <span> HOME </span>
        </div>
        <div className="nav-link">
          <span>ABOUT</span>
        </div>
        <div className="nav-link">
          <span>EXPERIENCE</span>
        </div>
        <div className="nav-link">
          <span>PORTFOLIO</span>
        </div>
        <div className="nav-link">
          <span>BLOG</span>
        </div>
        <div className="nav-link">
          <span>CONTACT</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

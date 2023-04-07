import React, { useEffect, useState } from "react";
import Net from "./Netflix.png";
// import Pro from "./download.png";
import "./Header.css";

function Header() {
  const [show, handleShow] = useState(false);
  /////////////
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Net} alt="Netflix Logo" />
      <img
        className="nav__profile"
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt="Profile Logo"
      />
    </div>
  );
}

export default Header;

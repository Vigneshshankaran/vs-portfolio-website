import React, { useState, useEffect } from "react";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
} from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = (hash) => {
    setActiveNav(hash);
    setMenuOpen(false); // Close the menu on link click
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Vignesh Shankaran
        </a>
        <div className={menuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { href: "#home", label: "Home", icon: HiOutlineHome },
              { href: "#about", label: "About", icon: HiOutlineUser },
              { href: "#skills", label: "Skills", icon: HiOutlineBadgeCheck },
              { href: "#portfolio", label: "Projects", icon: HiOutlinePhotograph },
              { href: "#contact", label: "Contact", icon: HiOutlineMail },
            ].map(({ href, label, icon: Icon }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className={`nav__link ${activeNav === href ? "active-link" : ""}`}
                >
                  <Icon className="nav__icon" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav__close"
            onClick={handleMenuToggle}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>
        <button
          className="nav__toggle"
          onClick={handleMenuToggle}
          aria-label="Open menu"
        >
          <HiOutlineMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;

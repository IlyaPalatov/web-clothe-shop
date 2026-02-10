import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Menu.css";

const Menu = ({ logo }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? "active" : ""}`}>
        <div className="menu-content">
          {/* Logo in Menu */}
          <div className="menu-logo">{logo}</div>

          {/* Navigation Links */}
          <nav className="menu-nav">
            <ul>
              <li>
                <a href="#home" onClick={closeMenu}>
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#collections" onClick={closeMenu}>
                  {t("nav.collections")}
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="menu-language-switcher">
            <button
              onClick={() => {
                changeLanguage("uk");
                closeMenu();
              }}
              className={i18n.language === "uk" ? "active" : ""}
            >
              УКР
            </button>
            <button
              onClick={() => {
                changeLanguage("en");
                closeMenu();
              }}
              className={i18n.language === "en" ? "active" : ""}
            >
              ENG
            </button>
            <button
              onClick={() => {
                changeLanguage("es");
                closeMenu();
              }}
              className={i18n.language === "es" ? "active" : ""}
            >
              ESP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

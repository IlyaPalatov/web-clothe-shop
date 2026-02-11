import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Menu.css";
import "./styles/MenuDark.css";

const Menu = ({ logo, darkMode, toggleDarkMode }) => {
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="menu-content">
          <div className="menu-logo">{logo}</div>

          <nav
            className="menu-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul role="menu">
              <li role="none">
                <a
                  href="#home"
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t("nav.home")}
                </a>
              </li>
              <li role="none">
                <a
                  href="#about"
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li role="none">
                <a
                  href="#collections"
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t("nav.collections")}
                </a>
              </li>
              <li role="none">
                <a
                  href="#services"
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t("nav.services")}
                </a>
              </li>
              <li role="none">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="menu-theme-toggle"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <div
            className="menu-language-switcher"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => {
                changeLanguage("uk");
                closeMenu();
              }}
              className={i18n.language === "uk" ? "active" : ""}
              aria-label="Switch to Ukrainian"
              aria-pressed={i18n.language === "uk"}
              tabIndex={isOpen ? 0 : -1}
              type="button"
            >
              УКР
            </button>
            <button
              onClick={() => {
                changeLanguage("en");
                closeMenu();
              }}
              className={i18n.language === "en" ? "active" : ""}
              aria-label="Switch to English"
              aria-pressed={i18n.language === "en"}
              tabIndex={isOpen ? 0 : -1}
              type="button"
            >
              ENG
            </button>
            <button
              onClick={() => {
                changeLanguage("es");
                closeMenu();
              }}
              className={i18n.language === "es" ? "active" : ""}
              aria-label="Switch to Spanish"
              aria-pressed={i18n.language === "es"}
              tabIndex={isOpen ? 0 : -1}
              type="button"
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

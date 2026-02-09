import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/WelcomePage.css";

const WelcomePage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="welcome-page">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">{t("logo")}</div>
            <ul className="nav-links">
              <li>
                <a href="#home">{t("nav.home")}</a>
              </li>
              <li>
                <a href="#about">{t("nav.about")}</a>
              </li>
              <li>
                <a href="#services">{t("nav.services")}</a>
              </li>
              <li>
                <a href="#contact">{t("nav.contact")}</a>
              </li>
            </ul>
            <div className="language-switcher">
              <button
                onClick={() => changeLanguage("uk")}
                className={i18n.language === "uk" ? "active" : ""}
              >
                УКР
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={i18n.language === "en" ? "active" : ""}
              >
                ENG
              </button>
              <button
                onClick={() => changeLanguage("es")}
                className={i18n.language === "es" ? "active" : ""}
              >
                ESP
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <button className="cta-button">{t("hero.cta")}</button>
          </div>
        </div>
      </section>

      <section className="features" id="services">
        <div className="container">
          <h2 className="section-title">{t("features.title")}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>{t("features.speed.title")}</h3>
              <p>{t("features.speed.description")}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>{t("features.quality.title")}</h3>
              <p>{t("features.quality.description")}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>{t("features.reliability.title")}</h3>
              <p>{t("features.reliability.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2024 {t("logo")}. {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;

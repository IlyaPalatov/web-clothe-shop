import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/WelcomePage.css";
import Menu from "../menu/Menu";

// SVG Logo Component
const PalatovLogo = ({ className = "" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Palatov Logo"
  >
    <path
      d="M8 32V8H18C21.866 8 25 11.134 25 15C25 18.866 21.866 22 18 22H12V32H8Z"
      fill="currentColor"
    />
    <path
      d="M12 12V18H18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12H12Z"
      fill="white"
      fillOpacity="0.2"
    />
    <circle cx="28" cy="28" r="4" fill="currentColor" />
    <path d="M30 8L35 18H25L30 8Z" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentYear = new Date().getFullYear();

  // Lazy load video after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-page">
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      <header className="header">
        <div className="container">
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <div className="logo">
              <PalatovLogo className="logo-icon" />
              <span className="logo-text">{t("logo")}</span>
            </div>
            <ul className="nav-links" role="menubar">
              <li role="none">
                <a href="#home" role="menuitem">
                  {t("nav.home")}
                </a>
              </li>
              <li role="none">
                <a href="#about" role="menuitem">
                  {t("nav.about")}
                </a>
              </li>
              <li role="none">
                <a href="#collections" role="menuitem">
                  {t("nav.collections")}
                </a>
              </li>
              <li role="none">
                <a href="#services" role="menuitem">
                  {t("nav.services")}
                </a>
              </li>
              <li role="none">
                <a href="#contact" role="menuitem">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
            <div
              className="language-switcher"
              role="group"
              aria-label="Language selection"
            >
              <button
                onClick={() => changeLanguage("uk")}
                className={i18n.language === "uk" ? "active" : ""}
                aria-label="Switch to Ukrainian"
                aria-pressed={i18n.language === "uk"}
              >
                УКР
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={i18n.language === "en" ? "active" : ""}
                aria-label="Switch to English"
                aria-pressed={i18n.language === "en"}
              >
                ENG
              </button>
              <button
                onClick={() => changeLanguage("es")}
                className={i18n.language === "es" ? "active" : ""}
                aria-label="Switch to Spanish"
                aria-pressed={i18n.language === "es"}
              >
                ESP
              </button>
            </div>

            {/* Burger Menu Component */}
            <Menu
              logo={
                <div className="logo">
                  <PalatovLogo className="logo-icon" />
                  <span className="logo-text">{t("logo")}</span>
                </div>
              }
            />
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="video-background">
          {videoLoaded && (
            <iframe
              src="https://www.youtube.com/embed/E_CqDUcOpjQ?autoplay=1&mute=1&loop=1&playlist=E_CqDUcOpjQ&controls=0&showinfo=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1"
              title="PALATOV Fashion Brand Background Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </div>

        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <button
              className="cta-button"
              aria-label="Learn more about PALATOV"
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <h2 className="about-title">{t("about.title")}</h2>
            <div className="about-text">
              <p className="about-lead">{t("about.lead")}</p>
              <p className="about-description">{t("about.description")}</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number" aria-label="Founded in 2026">
                  2026
                </div>
                <div className="stat-label">{t("about.stats.founded")}</div>
              </div>
              <div className="stat-item">
                <div
                  className="stat-number"
                  aria-label="100% quality guaranteed"
                >
                  100%
                </div>
                <div className="stat-label">{t("about.stats.quality")}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" aria-label="Made in Ukraine">
                  UA
                </div>
                <div className="stat-label">{t("about.stats.made")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections" id="collections">
        <div className="collection-split">
          {/* For Her */}
          <div
            className="collection-side for-her"
            role="region"
            aria-label="Women's collection"
          >
            <div className="collection-overlay"></div>
            <div className="collection-content">
              <h2 className="collection-title">
                {t("collections.forHer.title")}
              </h2>
              <p className="collection-subtitle">
                {t("collections.forHer.subtitle")}
              </p>
              <button
                className="collection-button"
                aria-label="View women's collection"
              >
                {t("collections.forHer.cta")}
              </button>
            </div>
          </div>

          {/* For Him */}
          <div
            className="collection-side for-him"
            role="region"
            aria-label="Men's collection"
          >
            <div className="collection-overlay"></div>
            <div className="collection-content">
              <h2 className="collection-title">
                {t("collections.forHim.title")}
              </h2>
              <p className="collection-subtitle">
                {t("collections.forHim.subtitle")}
              </p>
              <button
                className="collection-button"
                aria-label="View men's collection"
              >
                {t("collections.forHim.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="services">
        <div className="container">
          <h2 className="section-title">{t("features.title")}</h2>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon" role="img" aria-label="Speed icon">
                🚀
              </div>
              <h3>{t("features.speed.title")}</h3>
              <p>{t("features.speed.description")}</p>
            </article>
            <article className="feature-card">
              <div
                className="feature-icon"
                role="img"
                aria-label="Quality icon"
              >
                💎
              </div>
              <h3>{t("features.quality.title")}</h3>
              <p>{t("features.quality.description")}</p>
            </article>
            <article className="feature-card">
              <div
                className="feature-icon"
                role="img"
                aria-label="Reliability icon"
              >
                🎯
              </div>
              <h3>{t("features.reliability.title")}</h3>
              <p>{t("features.reliability.description")}</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>
            &copy; {currentYear} {t("logo")}. {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uk: {
    translation: {
      "nav.home": "Головна",
      "nav.about": "Про нас",
      "nav.services": "Послуги",
      "nav.contact": "Контакти",
      logo: "MyApp",
      "hero.title": "Ласкаво просимо",
      "hero.subtitle": "Створюємо сучасні веб-рішення для вашого бізнесу",
      "hero.cta": "Почати",
      "features.title": "Наші переваги",
      "features.speed.title": "Швидкість",
      "features.speed.description":
        "Оптимізовані рішення для максимальної продуктивності",
      "features.quality.title": "Якість",
      "features.quality.description": "Високі стандарти розробки та тестування",
      "features.reliability.title": "Надійність",
      "features.reliability.description":
        "Стабільна робота та підтримка проєктів",
      "footer.copyright": "Всі права захищені.",
    },
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      logo: "MyApp",
      "hero.title": "Welcome",
      "hero.subtitle": "Creating modern web solutions for your business",
      "hero.cta": "Get Started",
      "features.title": "Our Advantages",
      "features.speed.title": "Speed",
      "features.speed.description":
        "Optimized solutions for maximum performance",
      "features.quality.title": "Quality",
      "features.quality.description":
        "High standards of development and testing",
      "features.reliability.title": "Reliability",
      "features.reliability.description":
        "Stable operation and project support",
      "footer.copyright": "All rights reserved.",
    },
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre nosotros",
      "nav.services": "Servicios",
      "nav.contact": "Contacto",
      logo: "MyApp",
      "hero.title": "Bienvenido",
      "hero.subtitle": "Creamos soluciones web modernas para su negocio",
      "hero.cta": "Comenzar",
      "features.title": "Nuestras ventajas",
      "features.speed.title": "Velocidad",
      "features.speed.description":
        "Soluciones optimizadas para máximo rendimiento",
      "features.quality.title": "Calidad",
      "features.quality.description":
        "Altos estándares de desarrollo y pruebas",
      "features.reliability.title": "Confiabilidad",
      "features.reliability.description":
        "Operación estable y soporte de proyectos",
      "footer.copyright": "Todos los derechos reservados.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

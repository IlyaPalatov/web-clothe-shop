import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uk: {
    translation: {
      "nav.home": "Головна",
      "nav.about": "Про нас",
      "nav.services": "Послуги",
      "nav.contact": "Контакти",
      logo: "PALATOV",
      "hero.title": "Ласкаво просимо",
      "hero.subtitle":
        "Створюємо сучасні дизайни одягу, пропонуємо нестандартні рішення",
      "hero.cta": "Дізнатися більше",
      "about.title": "Про нас",
      "about.lead":
        "Перший молодий fashion бренд, який змінює правила гри на українському ринку одягу та стилю.",
      "about.description":
        "Ми створюємо унікальні речі, що поєднують сучасні тренди зі справжньою якістю. Наша мета — дати можливість кожному виразити свою індивідуальність через стиль, який відображає сміливість та автентичність української молоді.",
      "about.stats.founded": "Рік заснування",
      "about.stats.quality": "Якість",
      "about.stats.made": "Зроблено в Україні",
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
      "nav.collections": "Колекції",
      "collections.forHer.title": "Для Неї",
      "collections.forHer.subtitle": "Елегантність та стиль",
      "collections.forHer.cta": "Переглянути колекцію",
      "collections.forHim.title": "Для Нього",
      "collections.forHim.subtitle": "Сміливість та харизма",
      "collections.forHim.cta": "Переглянути колекцію",
    },
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      logo: "PALATOV",
      "hero.title": "Welcome",
      "hero.subtitle":
        "Creating modern clothing designs, offering non-standard solutions",
      "hero.cta": "Learn More",
      "about.title": "About Us",
      "about.lead":
        "The first young fashion brand changing the game in the Ukrainian clothing and style market.",
      "about.description":
        "We create unique pieces that combine modern trends with genuine quality. Our goal is to empower everyone to express their individuality through a style that reflects the boldness and authenticity of Ukrainian youth.",
      "about.stats.founded": "Year Founded",
      "about.stats.quality": "Quality",
      "about.stats.made": "Made in Ukraine",
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
      "nav.collections": "Collections",
      "collections.forHer.title": "For Her",
      "collections.forHer.subtitle": "Elegance and Style",
      "collections.forHer.cta": "View Collection",
      "collections.forHim.title": "For Him",
      "collections.forHim.subtitle": "Boldness and Charisma",
      "collections.forHim.cta": "View Collection",
    },
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre nosotros",
      "nav.services": "Servicios",
      "nav.contact": "Contacto",
      logo: "PALATOV",
      "hero.title": "Bienvenido",
      "hero.subtitle":
        "Creamos diseños de ropa modernos, ofrecemos soluciones no estándar",
      "hero.cta": "Saber más",
      "about.title": "Sobre nosotros",
      "about.lead":
        "La primera marca de moda joven que está cambiando las reglas del juego en el mercado ucraniano de ropa y estilo.",
      "about.description":
        "Creamos piezas únicas que combinan las tendencias modernas con una calidad genuina. Nuestro objetivo es permitir que todos expresen su individualidad a través de un estilo que refleja la audacia y autenticidad de la juventud ucraniana.",
      "about.stats.founded": "Año de fundación",
      "about.stats.quality": "Calidad",
      "about.stats.made": "Hecho en Ucrania",
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
      "nav.collections": "Colecciones",
      "collections.forHer.title": "Para Ella",
      "collections.forHer.subtitle": "Elegancia y Estilo",
      "collections.forHer.cta": "Ver Colección",
      "collections.forHim.title": "Para Él",
      "collections.forHim.subtitle": "Audacia y Carisma",
      "collections.forHim.cta": "Ver Colección",
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './translations';

// Detect language based on IP geolocation
const detectLanguageFromIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Map country codes to language codes
    const countryToLanguage: Record<string, string> = {
      'BR': 'pt',
      'PT': 'pt',
      'US': 'en',
      'GB': 'en',
      'CA': 'en',
      'AU': 'en',
      'NZ': 'en',
      'IE': 'en',
      'ES': 'es',
      'MX': 'es',
      'AR': 'es',
      'CO': 'es',
      'CL': 'es',
      'PE': 'es',
      'VE': 'es',
      'EC': 'es',
      'UY': 'es',
      'PY': 'es',
    };
    
    const detectedLanguage = countryToLanguage[data.country_code] || 'en';
    return detectedLanguage;
  } catch {
    return 'pt'; // Default to Portuguese if detection fails
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Set language based on IP after initialization
detectLanguageFromIP().then(lang => {
  const storedLang = localStorage.getItem('i18nextLng');
  if (!storedLang || storedLang === 'pt') {
    i18n.changeLanguage(lang);
  }
});

export default i18n;

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    home: "Home",
    careers: "Explore Careers",
    profile: "Build Profile",
    roadmap: "Roadmap",
    chat: "Chat",
    resources: "Resources",
    
    // Home page
    heroTitle: "Your Personalized Career & Education Advisor",
    heroSubtitle: "Discover your ideal career path with tailored guidance and free learning resources - designed especially for students in rural and underserved communities.",
    buildProfile: "Build Your Profile",
    takeQuiz: "Take Quick Quiz",
    
    // Add more translations as needed
  },
  hi: {
    // Hindi translations
    home: "होम",
    careers: "करियर एक्सप्लोर करें",
    profile: "प्रोफाइल बनाएं",
    roadmap: "रोडमैप",
    chat: "चैट",
    resources: "संसाधन",
    
    heroTitle: "आपका व्यक्तिगत करियर और शिक्षा सलाहकार",
    heroSubtitle: "विशेष रूप से ग्रामीण और वंचित समुदायों के छात्रों के लिए डिज़ाइन किए गए अनुकूलित मार्गदर्शन और मुफ्त शिक्षण संसाधनों के साथ अपना आदर्श करियर पथ खोजें।",
    buildProfile: "अपनी प्रोफाइल बनाएं",
    takeQuiz: "त्वरित क्विज़ लें",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
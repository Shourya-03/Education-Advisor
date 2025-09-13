# Education-Advisor
career-path-advisor/
├── public/
│   ├── index.html
│   ├── manifest.json (for PWA)
│   └── offline.html (for offline fallback)
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Modal/
│   │   │       ├── SettingsModal.jsx
│   │   │       └── PrivacyModal.jsx
│   │   ├── Home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   └── FeaturesSection.jsx
│   │   ├── Profile/
│   │   │   └── ProfileForm.jsx
│   │   ├── Quiz/
│   │   │   ├── QuizContainer.jsx
│   │   │   └── Question.jsx
│   │   ├── Recommendations/
│   │   │   └── CareerCards.jsx
│   │   ├── Roadmap/
│   │   │   └── LearningRoadmap.jsx
│   │   ├── Resources/
│   │   │   └── ResourceCards.jsx
│   │   ├── Chat/
│   │   │   └── CareerAssistant.jsx
│   │   └── Common/
│   │       ├── DarkModeToggle.jsx
│   │       ├── LanguageSwitcher.jsx
│   │       └── VoiceAssistant.jsx
│   ├── contexts/
│   │   ├── AppContext.jsx
│   │   ├── DarkModeContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── VoiceContext.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useOfflineStorage.js
│   │   └── useSpeechSynthesis.js
│   ├── services/
│   │   ├── storageService.js (IndexedDB)
│   │   ├── qrService.js
│   │   └── careerRulesEngine.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── quizData.js
│   │   └── careerData.js
│   ├── styles/
│   │   ├── index.css (global styles)
│   │   ├── DarkMode.css
│   │   └── components/
│   ├── App.jsx
│   └── index.js
└── package.json
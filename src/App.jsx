import React from 'react';
import { AppProvider } from './contexts/Appcontext';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { VoiceProvider } from './contexts/VoiceContext';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/ProfileForm';
import Quiz from './components/Quiz/QuizContainer';
import Recommendations from './components/Recommendations/CareerCards';
import Roadmap from './components/Roadmap/LearningRoadmap';
import Resources from './components/Resources/ResourceCards';
import Chat from './components/Chat/CareerAssistant';
import SettingsModal from './components/Layout/Modal/SettingsModal';
import PrivacyModal from './components/Layout/Modal/PrivacyModal';

import { useApp } from './contexts/Appcontext';

function AppContent() {
  const { state } = useApp();
  
  const renderSection = () => {
    switch (state.currentSection) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'quiz':
        return <Quiz />;
      case 'recommendations':
        return <Recommendations />;
      case 'roadmap':
        return <Roadmap />;
      case 'resources':
        return <Resources />;
      case 'chat':
        return <Chat />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        {renderSection()}
      </main>
      <Footer />
      <SettingsModal />
      <PrivacyModal />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <DarkModeProvider>
        <LanguageProvider>
          <VoiceProvider>
            <AppContent />
          </VoiceProvider>
        </LanguageProvider>
      </DarkModeProvider>
    </AppProvider>
  );
}

export default App;
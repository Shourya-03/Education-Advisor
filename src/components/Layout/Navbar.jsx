import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useVoice } from '../../contexts/VoiceContext';

const Navbar = () => {
  const { state, dispatch } = useApp();
  const { t, language, changeLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { voiceEnabled, toggleVoice } = useVoice();

  const handleSectionChange = (section) => {
    dispatch({ type: 'SET_CURRENT_SECTION', payload: section });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={() => handleSectionChange('home')}>
          <i className="fas fa-graduation-cap me-2 text-primary"></i>CareerPath
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'home' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('home')}
              >
                {t('home')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'careers' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('careers')}
              >
                {t('careers')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'profile' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('profile')}
              >
                {t('profile')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'roadmap' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('roadmap')}
              >
                {t('roadmap')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'chat' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('chat')}
              >
                {t('chat')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${state.currentSection === 'resources' ? 'active' : ''}`} 
                href="#" 
                onClick={() => handleSectionChange('resources')}
              >
                {t('resources')}
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-sm language-switcher me-2" onClick={() => changeLanguage(language === 'en' ? 'hi' : 'en')}>
              <i className="fas fa-globe me-1"></i> {language === 'en' ? 'English' : 'हिंदी'}
            </button>
            <button 
              className={`btn btn-sm ${voiceEnabled ? 'btn-secondary' : 'btn-outline-secondary'} me-2`} 
              onClick={toggleVoice}
            >
              <i className={`fas ${voiceEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
            </button>
            <button 
              className={`btn btn-sm ${darkMode ? 'btn-dark' : 'btn-outline-dark'} me-2`} 
              onClick={toggleDarkMode}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button className="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#settingsModal">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
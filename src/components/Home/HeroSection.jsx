import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { dispatch } = useApp();
  const { t } = useLanguage();

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">{t('heroTitle')}</h1>
            <p className="lead mb-4">{t('heroSubtitle')}</p>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-light btn-lg px-4" onClick={() => dispatch({ type: 'SET_CURRENT_SECTION', payload: 'profile' })}>
                {t('buildProfile')}
              </button>
              <button className="btn btn-outline-light btn-lg px-4" onClick={() => dispatch({ type: 'SET_CURRENT_SECTION', payload: 'quiz' })}>
                {t('takeQuiz')}
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PGcgZmlsbD0iI2ZmZiI+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI4MCIvPjxyZWN0IHg9IjI1MCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgcng9IjIwIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMzAwIiByPSI2MCIvPjxyZWN0IHg9IjI1MCIgeT0iMjUwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgcng9IjE1Ii8+PHBvbHlnb24gcG9pbnRzPSIzNTAsMTAwIDQ1MCwxMDAgNDAwLDIwMCIvPjwvZz48L3N2Zz4=" alt="Career Guidance Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
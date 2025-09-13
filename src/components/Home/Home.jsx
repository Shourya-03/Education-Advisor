import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { useLanguage } from '../../contexts/LanguageContext';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import FeaturesSection from './FeaturesSection';

const Home = () => {
  const { dispatch } = useApp();
  const { t } = useLanguage();

  return (
    <section id="home" className="page-section active-section">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      
      {/* Call to Action */}
      <div className="container py-5">
        <div className="card bg-primary text-white">
          <div className="card-body p-5 text-center">
            <h2 className="card-title fw-bold mb-3">{t('readyToDiscover')}</h2>
            <p className="card-text mb-4">{t('takeFirstStep')}</p>
            <button className="btn btn-light btn-lg px-5" onClick={() => dispatch({ type: 'SET_CURRENT_SECTION', payload: 'profile' })}>
              {t('getStartedNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
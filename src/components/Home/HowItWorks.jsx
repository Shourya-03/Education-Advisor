import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">{t('howItWorks')}</h2>
        <p className="lead text-muted">{t('threeSimpleSteps')}</p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 step-card">
            <div className="card-body text-center p-4">
              <div className="step-number mx-auto">1</div>
              <h4 className="card-title">{t('buildProfile')}</h4>
              <p className="card-text">{t('buildProfileDesc')}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 step-card">
            <div className="card-body text-center p-4">
              <div className="step-number mx-auto">2</div>
              <h4 className="card-title">{t('getRecommendations')}</h4>
              <p className="card-text">{t('getRecommendationsDesc')}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 step-card">
            <div className="card-body text-center p-4">
              <div className="step-number mx-auto">3</div>
              <h4 className="card-title">{t('startLearning')}</h4>
              <p className="card-text">{t('startLearningDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">{t('designedForAccessibility')}</h2>
          <p className="lead text-muted">{t('inclusiveFeatures')}</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <div className="feature-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h5>{t('offlineAccess')}</h5>
              <p className="text-muted">{t('offlineAccessDesc')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <div className="feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <h5>{t('multilingualSupport')}</h5>
              <p className="text-muted">{t('multilingualSupportDesc')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <div className="feature-icon">
                <i className="fas fa-volume-up"></i>
              </div>
              <h5>{t('voiceGuidance')}</h5>
              <p className="text-muted">{t('voiceGuidanceDesc')}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h5>{t('lowBandwidth')}</h5>
              <p className="text-muted">{t('lowBandwidthDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
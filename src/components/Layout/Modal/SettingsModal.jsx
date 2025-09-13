import React from 'react';
import { useApp } from '../../../contexts/AppContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import { useVoice } from '../../../contexts/VoiceContext';

const SettingsModal = () => {
  const { state, dispatch } = useApp();
  const { t, language, changeLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { voiceEnabled, toggleVoice } = useVoice();

  const saveSettings = () => {
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: {
        language,
        voiceEnabled,
        darkMode,
        offlineMode: state.settings.offlineMode
      }
    });
    
    // Close modal
    document.querySelector('[data-bs-dismiss="modal"]').click();
  };

  return (
    <div className="modal fade" id="settingsModal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{t('settings')}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">{t('languagePreference')}</label>
              <select 
                className="form-select" 
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">{t('voiceGuidance')}</label>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  checked={voiceEnabled}
                  onChange={toggleVoice}
                />
                <label className="form-check-label" htmlFor="voiceSwitch">
                  {t('enableVoiceGuidance')}
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">{t('displayMode')}</label>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="displayMode" 
                  id="modeDefault" 
                  checked={!darkMode}
                  onChange={() => toggleDarkMode()}
                />
                <label className="form-check-label" htmlFor="modeDefault">
                  {t('default')}
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="displayMode" 
                  id="modeDark" 
                  checked={darkMode}
                  onChange={() => toggleDarkMode()}
                />
                <label className="form-check-label" htmlFor="modeDark">
                  {t('darkMode')}
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">{t('dataUsage')}</label>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  checked={state.settings.offlineMode}
                  onChange={(e) => dispatch({ 
                    type: 'UPDATE_SETTINGS', 
                    payload: { offlineMode: e.target.checked } 
                  })}
                />
                <label className="form-check-label" htmlFor="offlineMode">
                  {t('saveResourcesOffline')}
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              {t('close')}
            </button>
            <button type="button" className="btn btn-primary" onClick={saveSettings}>
              {t('saveChanges')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { VoiceProvider } from './contexts/VoiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <DarkModeProvider>
          <LanguageProvider>
            <VoiceProvider>
              <App />
            </VoiceProvider>
          </LanguageProvider>
        </DarkModeProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
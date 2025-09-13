import React, { createContext, useContext, useState, useCallback } from 'react';

const VoiceContext = createContext();

export function VoiceProvider({ children }) {
  const [voiceEnabled, setVoiceEnabled] = useState(() => {
    const saved = localStorage.getItem('voiceEnabled');
    return saved ? JSON.parse(saved) : true;
  });

  const toggleVoice = useCallback(() => {
    setVoiceEnabled(prev => {
      localStorage.setItem('voiceEnabled', JSON.stringify(!prev));
      return !prev;
    });
  }, []);

  const speak = useCallback((text) => {
    if (voiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }, [voiceEnabled]);

  return (
    <VoiceContext.Provider value={{ voiceEnabled, toggleVoice, speak }}>
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoice() {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
}
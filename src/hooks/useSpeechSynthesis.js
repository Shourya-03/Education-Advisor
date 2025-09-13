import { useCallback } from 'react';

const useSpeechSynthesis = () => {
  const speak = useCallback((text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { speak };
};

export default useSpeechSynthesis;
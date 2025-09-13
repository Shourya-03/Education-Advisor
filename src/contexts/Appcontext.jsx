import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  userProfile: null,
  quizAnswers: {},
  currentSection: 'home',
  recommendations: [],
  selectedCareer: null,
  roadmapProgress: {},
  settings: {
    language: 'en',
    voiceEnabled: true,
    darkMode: false,
    offlineMode: true
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return { ...state, userProfile: action.payload };
    case 'SET_QUIZ_ANSWERS':
      return { ...state, quizAnswers: action.payload };
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload };
    case 'SET_RECOMMENDATIONS':
      return { ...state, recommendations: action.payload };
    case 'SET_SELECTED_CAREER':
      return { ...state, selectedCareer: action.payload };
    case 'UPDATE_ROADMAP_PROGRESS':
      return { 
        ...state, 
        roadmapProgress: {
          ...state.roadmapProgress,
          [action.payload.careerId]: action.payload.progress
        }
      };
    case 'UPDATE_SETTINGS':
      return { 
        ...state, 
        settings: { ...state.settings, ...action.payload }
      };
    case 'CLEAR_ALL_DATA':
      return initialState;
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
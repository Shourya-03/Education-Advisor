import React, { useState } from 'react';
import { useApp } from '../../contexts/Appcontext';
import { useLanguage } from '../../contexts/LanguageContext';

const ProfileForm = () => {
  const { state, dispatch } = useApp();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: state.userProfile?.name || '',
    age: state.userProfile?.age || '',
    education: state.userProfile?.education || '',
    skills: state.userProfile?.skills || [],
    interests: state.userProfile?.interests || []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_USER_PROFILE', payload: formData });
    // Navigate to quiz section
    dispatch({ type: 'SET_CURRENT_SECTION', payload: 'quiz' });
  };

  const skillsOptions = [
    { id: 'html', label: t('skills.html') },
    { id: 'javascript', label: t('skills.javascript') },
    { id: 'python', label: t('skills.python') },
    { id: 'java', label: t('skills.java') },
    { id: 'sql', label: t('skills.sql') }
  ];

  const interestsOptions = [
    { id: 'tech', label: t('interests.tech') },
    { id: 'data', label: t('interests.data') },
    { id: 'design', label: t('interests.design') },
    { id: 'business', label: t('interests.business') },
    { id: 'science', label: t('interests.science') }
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h2 className="fw-bold">{t('profile.title')}</h2>
            <p className="lead text-muted">{t('profile.subtitle')}</p>
          </div>
          
          <div className="card shadow">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Form fields similar to the HTML version */}
                <div className="text-center mb-4">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI2MCIgZmlsbD0iI2U5ZWNlZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjI1IiBmaWxsPSIjYTBhOWFhIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSIxMTUiIHI9IjQwIiBmaWxsPSIjYTBhOWFhIi8+PC9zdmc+" 
                       className="profile-pic mb-3" alt="Profile" />
                  <div>
                    <button type="button" className="btn btn-sm btn-outline-primary">
                      {t('profile.uploadPhoto')}
                    </button>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">{t('profile.name')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="age" className="form-label">{t('profile.age')}</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      min="15"
                      max="30"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                {/* Other form fields */}
                
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch({ type: 'SET_CURRENT_SECTION', payload: 'home' })}
                  >
                    {t('common.backToHome')}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {t('profile.saveAndContinue')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
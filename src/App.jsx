// src/App.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setState(language === 'pa');
  };

  useEffect(() => {
    changeLanguage('en'); // Set the default language to English on load
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      {/* Language Selector */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <select style={{padding:"10px" }} onChange={(e) => changeLanguage(e.target.value)} defaultValue="en">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="pa">Punjabi</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      {/* Translated Content */}
      <h1>"{t('welcome')}"</h1>
      <p>{t('description')}</p>  
      <p style={state ? { fontSize: "30px" } : {}}>{t('hi')}</p>
    </div>
  );
}

export default App;

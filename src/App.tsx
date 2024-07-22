import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { changeLanguage } from "i18next";

function App() {
  const { t } = useTranslation();

   const handleLanguageChange = (lang: string) => {
     changeLanguage(lang);
   };

  return (
    <div className="App">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <button onClick={()=>handleLanguageChange('en')}>English</button>
      <button onClick={()=>handleLanguageChange('pl')}>Polish</button>
    </div>
  );
}

export default App;

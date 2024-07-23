import { useTranslation } from "react-i18next";
import "./App.css";
import { changeLanguage } from "i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("langage");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    localStorage.setItem("langage", lang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-smear">
          <h1>Curriculum Vitae</h1>
        </div>

        <div className="language-swithcer">
          <button
            onClick={() =>
              handleLanguageChange(
                i18n.language === "en"? "pl" : "en"
              )
            }
          >
            {i18n.language === "en" ? "Polish" : "English"}
          </button>
        </div>
      </header>

      <div className="content">
        <div className="sidebar">
          <h2>Krzysztof Just</h2>
          <p>
            <span>{t("email")}:</span>
            <a href="mailto:krzysztofjustjust@gmail.com">
              krzysztofjustjust@gmail.com
            </a>
          </p>
          <p>
            <span>{t("phone")}:</span> +48 511 008 612
          </p>
          <p>
            <span>{t("location")}:</span> Gdynia, {t("")}
          </p>
          <h2>{t("languages")}</h2>
          <p>
            {t("english")}:<span> {t("intermediate")}</span>
          </p>
          <p>
            {t("polish")}: <span>{t("native")}</span>
          </p>
          <h2>{t("skills")}</h2>
          <p>
            <span>{t("programming languages")}:</span> JavaScript, TypeScript,
            Python
          </p>
          <p>
            <span>{t("frameworks")}:</span> Vue.js, React.js, Django
          </p>
          <p>
            <span>{t("front-end technologies")}:</span> CSS, SCSS
          </p>
          <p>
            <span>API:</span> RESTful API
          </p>
          <p>
            <span>{t("projects")}:</span> {t("projects desc")}
          </p>
          <p>
            <span>{t("soft skills")}:</span> {t("soft skills dec")}
          </p>
          <p>
            <span>{t("other")}:</span> {t("other desc")}
          </p>
        </div>
        <div className="main-content">
          <h2>{t("professional summary")}</h2>
          <p>
            <i>{t("i am")}</i>
          </p>
          <h2>{t("professional experience")}</h2>
          <h3>{t("frontend developer")}</h3>
          <p>Rząska Poland, Gdynia, {t("poland")}</p>
          <p>
            {t("november")} 2022 – {t("present")}
          </p>
          <ul>
            <li>{t("working with")}</li>
            <li>{t("integration")}</li>
            <li>{t("design")}</li>
            <li>{t("performance")}</li>
            <li>{t("optymalized")}</li>
          </ul>
          <h3>{t("kids")}</h3>
          <p>Academy Spice Gears, Łomża, {t("poland")}</p>
          <p>
            {t("march")} 2021 – {t("november")} 2022
          </p>
          <ul>
            <li>{t("technology")}</li>
            <li>{t("introduced")}</li>
            <li>{t("communicated")}</li>
            <li>{t("environment")}</li>
          </ul>
          <h3>{t("intern")}</h3>
          <p>Transition Technologies MS S.A., Koszalin, {t("poland")}</p>
          <p>
            {t("july")}2022 – {t("eptember")}2022
          </p>
          <ul>
            <li>{t("gitlab")}</li>
            <li>{t("angular")}</li>
            <li>{t("implement")}</li>
          </ul>
          <h3>{t("graphic intern")}</h3>
          <p>Logo s.c., Łomża, {t("poland")}</p>
          <p>
            {t("march")} 2022 – {t("july")} 2022
          </p>
          <ul>
            <li>{t("skills acquired")}: Illustrator, Photoshop</li>
          </ul>
          <h2>{t("education")}</h2>
          <p>
            Państwowa Wyższa Szkoła Informatyki i Przedsiębiorczości w Łomży,{" "}
            {t("poland")}
          </p>
          <p>
            {t("october")} 2019 – {t("february")} 2023
          </p>
          <p>{t("computer science")}</p>
          <h2>{t("courses and certifications")}</h2>
          <p>JavaScript – Jedyny kurs jakiego potrzebujesz</p>
          <p>
            {t("organizer")}: Mateusz Maj, {t("january")} 2022
          </p>
          <p>{t("e14")}</p>
          <p>{t("january")} 2019</p>
          <p>{t("e13")}</p>
          <p>{t("may")} 2018</p>
          <p>{t("e12")}</p>
          <p> {t("may")}2017</p>
          <h2>{t("activities")}</h2>
          <p>{t("presidium")}</p>
          <p>
            Państwowa Wyższa Szkoła Informatyki i Przedsiębiorczości w Łomży,{" "}
            {t("october")} 2020 – {t("october")} 2021
          </p>
          <h2>{t("interests")}</h2>
          <p>{t("interests p1")}</p>
          <p>{t("interests p2")}</p>
          <p>{t("interests p3")}</p>
          <p>{t("interests p4")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

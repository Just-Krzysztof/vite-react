import { useTranslation } from "react-i18next";
import "../App.css";
import { changeLanguage } from "i18next";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Home() {
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
        <div>
          <h1>Curriculum Vitae</h1>
        </div>
        <Link to="portfolio" className="background-color">Portfolio</Link>
        <div className="language-swithcer">
          <button
            onClick={() =>
              handleLanguageChange(i18n.language === "en" ? "pl" : "en")
            }
          >
            {i18n.language === "en" ? "Polish" : "English"}
          </button>
        </div>
      </header>

      <div className="content">
        <Sidebar></Sidebar>

        <div className="main-content">
          <h2>{t("professional summary")}</h2>
          <p>
            <i>{t("i am")}</i>
          </p>
          <h2>{t("professional experience")}</h2>
          <h3>
            <span>{t("frontend developer")}</span>
          </h3>
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
          <h3>
            <span>{t("kids")}</span>
          </h3>
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
          <h3>
            <span>{t("intern")}</span>
          </h3>
          <p>Transition Technologies MS S.A., Koszalin, {t("poland")}</p>
          <p>
            {t("july")} 2022 – {t("september")} 2022
          </p>
          <ul>
            <li>{t("gitlab")}</li>
            <li>{t("angular")}</li>
            <li>{t("implement")}</li>
          </ul>
          <h3>
            <span>{t("graphic intern")}</span>
          </h3>
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
          <ul>
            <li>JavaScript – Jedyny kurs jakiego potrzebujesz</li>
            <li>{t("e14")}</li>
            <li>{t("e13")}</li>
            <li>{t("e12")}</li>
          </ul>
          {/* <p>
            <span>JavaScript – Jedyny kurs jakiego potrzebujesz, </span>
            {t("organizer")}: Mateusz Maj
          </p> */}
          {/* <p>
            <span> {t("e14")}</span>
          </p>
          <p>
            <span>{t("e13")}</span>
          </p>
          <p>
            <span>{t("e12")}</span>
          </p> */}
          <h2>{t("interests")}</h2>
          <p>
            <span>{t("interests p1")}: </span>
            {t("interests p1-1")}
          </p>
          <p>
            <span>{t("interests p2")}: </span>
            {t("interests p2-2")}
          </p>
          <p>
            <span>{t("interests p3")}: </span>
            {t("interests p3-3")}
          </p>
          <p>
            <span>{t("interests p4")}: </span>

            {t("interests p4-4")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

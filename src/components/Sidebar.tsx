import "../App.css";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <h2>Krzysztof Just</h2>
      <p>
        <span>{t("email")}: </span>
        <a href="mailto:krzysztofjustjust@gmail.com">
          krzysztofjustjust@gmail.com
        </a>
      </p>
      <p>
        <span>{t("phone")}: </span> +48 511 008 612
      </p>
      <p>
        <span>{t("location")}: </span>
        <a
          href="https://www.google.com/maps?q=Gdynia,Poland"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gdynia, {t("poland")}
        </a>
      </p>
      <h2>{t("languages")}</h2>
      <p>
        {t("english")}: <span>{t("intermediate")}</span>
      </p>
      <p>
        {t("polish")}: <span>{t("native")}</span>
      </p>
      <h2>{t("skills")}</h2>
      <p>
        <span>{t("programming languages")}: </span> JavaScript, TypeScript,
        Python
      </p>
      <p>
        <span>{t("frameworks")}: </span> Vue.js, React.js, Django
      </p>
      <p>
        <span>{t("front end")}: </span> CSS, SCSS
      </p>
      <p>
        <span>API: </span> RESTful API
      </p>
      <p>
        <span>{t("projects")}: </span>
        {t("projects desc")}
      </p>
      <p>
        <span>{t("soft skills")}: </span>
        {t("soft skills desc")}
      </p>
      <p>
        <span>{t("other")}: </span>
        {t("other desc")}
      </p>
      <h2>{t("social media")}</h2>
      <p>
        <a
          href="https://www.linkedin.com/in/krzysztof-just-191361226/"
          target="_blank"
          rel="Linkedin profile"
        >
          Linkedin
        </a>
      </p>
    </div>
  );
}
export default Sidebar;

import { useTranslation } from "react-i18next";
import "./App.css";
import { changeLanguage } from "i18next";

function App() {
  const { t, i18n } = useTranslation();

   const handleLanguageChange = (lang: string) => {
     changeLanguage(lang);
   };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-smear">
          <h1>Curriculum Vitae</h1>
        </div>

        <div className="language-swithcer">
          {" "}
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
        <div className="sidebar">
          <h2>Krzysztof Just</h2>
          <p>Email: krzysztofjustjust@gmail.com</p>
          <p>Phone: +48 511 008 612</p>
          <p>Location: Gdynia</p>
          <h2>Languages</h2>
          <p>English: Intermediate</p>
          <p>Polish: Native</p>
          <h2>Skills</h2>
          <p>Programming Languages: JavaScript, TypeScript, Python</p>
          <p>Frameworks: Vue.js, React.js, Django</p>
          <p>Front-End Technologies: CSS, SCSS</p>
          <p>API: RESTful API</p>
          <p>Projects: Marketplace Development</p>
          <p>Soft Skills: Social communication, teamwork</p>
          <p>Other: Quick and efficient learning</p>
        </div>
        <div className="main-content">
          <h2>Professional Summary</h2>
          <p>
            I am a Front-End Developer with 2 years of experience in Vue.js,
            CSS, JavaScript, and TypeScript. I work on creative projects,
            enhancing my technical skills. Previously, I was an instructor in
            programming and robotics, gaining satisfaction and experience in
            education. I am currently learning React and Python with Django,
            aiming for full-stack development and advanced projects.
          </p>
          <h2>Professional Experience</h2>
          <h3>Frontend Developer</h3>
          <p>Rząska Poland, Gdynia</p>
          <p>November 2022 – Present</p>
          <ul>
            <li>
              Developed and maintained web applications using Nuxt.js (versions
              2 and 3) with TypeScript and JavaScript.
            </li>
            <li>Integrated REST APIs and collaborated with backend teams.</li>
            <li>Designed interactive user interfaces using Figma.</li>
            <li>
              Developed and maintained a marketplace platform, ensuring its
              stability and performance.
            </li>
            <li>
              Optimized applications for SEO and search engine performance.
            </li>
          </ul>
          <h3>Programming and Robotics Instructor</h3>
          <p>Academy Spice Gears, Łomża</p>
          <p>March 2021 – November 2022</p>
          <ul>
            <li>
              Conducted programming classes in Scratch and Python for children
              aged 6-16.
            </li>
            <li>
              Introduced participants to basic robotics, fostering their
              interest in technology.
            </li>
            <li>
              Communicated effectively with children and their parents,
              supporting the development of technical and social skills.
            </li>
            <li>Created a friendly and engaging educational environment.</li>
          </ul>
          <h3>Frontend Developer Intern</h3>
          <p>Transition Technologies MS S.A., Koszalin</p>
          <p>July 2022 – September 2022</p>
          <ul>
            <li>
              Enhanced teamwork skills through participation in projects using
              Git and GitLab.
            </li>
            <li>Developed applications using Angular and TypeScript.</li>
            <li>
              Collaborated with other departments to implement new features.
            </li>
          </ul>
          <h3>Graphic Intern</h3>
          <p>Logo s.c., Łomża</p>
          <p>March 2022 – July 2022</p>
          <ul>
            <li>Skills acquired: Illustrator, Photoshop</li>
          </ul>
          <h2>Education</h2>
          <p>Academy of Applied Sciences in Łomża</p>
          <p>October 2019 – February 2023</p>
          <p>Bachelor's in Computer Science, Specialization in Programming</p>
          <h2>Courses and Certifications</h2>
          <p>JavaScript – The Only Course You Need</p>
          <p>Organizer: Mateusz Maj, January 2022</p>
          <p>E.14 Developing web applications and databases</p>
          <p>January 2019</p>
          <p>E.13 Designing local computer networks</p>
          <p>May 2018</p>
          <p>E.12 Assembly and operation of personal computers</p>
          <p>May 2017</p>
          <h2>Additional Activities</h2>
          <p>Member of the Presidium</p>
          <p>
            Academy of Applied Sciences in Łomża, October 2020 – October 2021
          </p>
          <h2>Interests</h2>
          <p>
            Meeting People: Enjoy meeting new people and exploring different
            cultures. Social interactions inspire me and broaden my knowledge.
          </p>
          <p>
            Long Conversations: Love engaging in deep conversations on various
            topics, which allows me to expand my horizons.
          </p>
          <p>
            Traveling: Passionate about discovering new places and cultures.
            Each journey is an opportunity to learn and connect with local
            communities.
          </p>
          <p>
            Automotive: Fascinated by the history of machines and vehicles.
            Enjoy discussions with experts and enthusiasts in the field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

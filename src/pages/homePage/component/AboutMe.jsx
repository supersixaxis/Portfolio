import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import taskManager from "../../../assets/TaskManager.webp";
import spacex from "../../../assets/SpaceX.webp";
import kaisaimg from "../../../assets/kaisa.webp";
import portfolio2022 from "../../../assets/portfolio2022.webp";
import voipdiese from "../../../assets/voipdiese.webp";
import covidClicker from "../../../assets/covid-clicker.webp";
import javascriptLogo from "../../../assets/javascript.webp";
import reactLogo from "../../../assets/react.webp";
import nodejsLogo from "../../../assets/nodeJS.webp";
import cSharpLogo from "../../../assets/cSharp.webp";
import sqlLogo from "../../../assets/sql.webp";
import wordpressLogo from "../../../assets/wordpress.webp";
import phpLogo from "../../../assets/php.webp";
export default function AboutMe() {
  const [activeButton, setActiveButton] = useState("Présentation");
  const [displayData, setDisplayData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categoriesData = {
    Présentation: {
      description:
        "Bonjour ! Je suis un développeur web passionné en cours d'année pour un bac + 4. Grâce à plusieurs années d'expérience dans le domaine, j'ai acquis une solide expertise dans la conception et le développement d'applications web. J'ai travaillé sur divers projets allant de sites web personnels à des applications d'entreprise complexes. Mon expertise s'étend à HTML, CSS, JavaScript, ainsi qu'aux frameworks tels que React.js. En plus de ces compétences, je maîtrise PHP, Node.js, et WordPress. Je travaille régulièrement en tant que freelance, apportant mon expertise à des clients variés, et je m'implique également dans des projets bénévoles pour des associations. Par ailleurs, je développe des jeux vidéo avec Unity et C#, ce qui me permet d'allier créativité et technique dans des projets captivants.",
    },
    "Mes projets": {
      projects: [
        {
          title: "Kaisa",
          description:
            "Prototype site vitrine pour un site de logement. Il est possible de consulter les logements disponibles et de consulter les informations liées à ces logements.",
          image: kaisaimg,
          url: "https://kaisa-kappa.vercel.app/",
          codeUrl: "https://github.com/supersixaxis/Kaisa",
          technologies: ["React.js", "CSS Modules"],
        },
        {
          title: "Task Manager",
          description:
            "Prototype de copie de l'application Trello. Il est possible de créer des espaces de travails et à l'intérieur de ces espaces on peut créer des tableaux et des tâches. On peut les personnaliser et les trier.",
          image: taskManager,
          url: "https://task-manager-sage-ten.vercel.app",
          codeUrl: "https://github.com/supersixaxis/Task-Manager",
          technologies: ["React.js", "Firebase", "Redux"],
        },
        {
          title: "SpaceX Star Wars",
          description:
            "Site sur starwars en js. Les informations sont récupérées via une API. On peut consulter les informations de l'univers et de l'espace. Il est possible de consulter les informations de la planète, les trier par populations, faire une recherche et voir leur climat,gravité et autres informations.",
          image: spacex,
          url: "https://supersixaxis.github.io/About-the-universe/",
          codeUrl: "https://github.com/supersixaxis/About-the-universe",
          technologies: ["Vanilla JS", "HTML", "CSS", "API REST"],
        },
        {
          title: "Portfolio 2022",
          description: "Portfolio fait avec React",
          image: portfolio2022,
          url: "https://react-cv-neon.vercel.app/",
          codeUrl: "https://github.com/supersixaxis/Portfolio2022",
          technologies: ["React.js", "SCSS", "Vercel"],
        },
        {
          title: "Voip Dièse",
          description:
            "Site de gestion d'interphone et de résidence pour l'entreprise Dièse Télécom",
          image: voipdiese,
          url: "https://voipdiese.com/",
          codeUrl: null,
          technologies: ["PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "Covid Clicker",
          description:
            "Petit jeu navigateur ou il faut combattre le virus COVID19 en cliquant sur les bactéries qui apparaissent sur l'écran.",
          image: covidClicker,
          url: "https://supersixaxis.github.io/covid-clicker/",
          codeUrl: "https://github.com/supersixaxis/covid-clicker",
          technologies: ["Javascript", "CSS", "HTML"],
        },
      ],
    },
    "Mes compétences": {
      Logos: [
        javascriptLogo,
        reactLogo,
        nodejsLogo,
        cSharpLogo,
        sqlLogo,
        wordpressLogo,
        phpLogo,
      ],
    },
  };

  useEffect(() => {
    setDisplayData(categoriesData[activeButton]);
  }, [activeButton]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" text-center shadow-md pb-12">
      <h1 className="py-12 text-3xl font-semibold">About me</h1>
      <div className="flex flex-wrap justify-center px-4">
        {Object.keys(categoriesData).map((category) => (
          <button
            key={category}
            className={`text-l m-2 rounded-sm border px-6 py-2 font-bold transition-colors duration-300 hover:border-blue-500 ${
              activeButton === category
                ? "bg-blue-600 text-white"
                : "bg-transparent text-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <div className="mx-auto w-[90%] md:w-[80%] lg:w-[60%]">
          <AnimatePresence mode="wait">
            {displayData && (
              <motion.div
                key={activeButton}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ ease: [0.215, 0.61, 0.355, 1] }}
              >
                {activeButton === "Présentation" && (
                  <p className="text-xl text-white">
                    {displayData.description}
                  </p>
                )}
                {activeButton === "Mes projets" && displayData.projects && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {displayData.projects.map((project, index) => (
                      <div
                        key={index}
                        className="card relative h-80 cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedProject(project)} // Ouvrir la popup
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={project.image}
                          alt="Project"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4 text-white">
                          <p className="text-lg">{project.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeButton === "Mes compétences" && displayData.Logos && (
                  <div className="flex flex-wrap justify-center">
                    {displayData.Logos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
                      >
                        <img
                          src={logo}
                          alt={`Compétence ${index + 1}`}
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-color-primaire relative w-[95%] rounded-lg p-8  md:w-[70%] lg:w-[50%]">
              <button
                className="absolute right-4 top-4 text-xl text-white"
                onClick={() => setSelectedProject(null)} // Fermer la popup
              >
                ✖
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mb-6 h-64 w-full rounded-md object-cover"
              />
              <h2 className="mb-2 text-2xl font-bold">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-white">{selectedProject.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  Technologies utilisées :
                </h3>
                <ul className="list-disc pl-6 text-white">
                  {selectedProject.technologies.map((tech, index) => (
                    <p flex key={index}>
                      {tech}
                    </p>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                {selectedProject.codeUrl && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Voir le code
                  </a>
                )}
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Voir le site
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

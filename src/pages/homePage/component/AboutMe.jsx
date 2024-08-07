import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import taskManager from "../../../assets/TaskManager.webp";
import spacex from '../../../assets/SpaceX.webp'
import kaisaimg from '../../../assets/kaisa.webp'
import portfolio2022 from '../../../assets/portfolio2022.webp'
import voipdiese from '../../../assets/voipdiese.webp'
export default function AboutMe() {
  const [activeButton, setActiveButton] = useState("Présentation");
  const [displayData, setDisplayData] = useState(null);

  const categoriesData = {
    Présentation: {
      description:
        "Bonjour ! Je suis un développeur web passionné en cours d'année pour un bac + 4. Grâce à plusieurs années d'expérience dans le domaine, j'ai acquis une solide expertise dans la conception et le développement d'applications web. Au cours de ma carrière, j'ai travaillé sur divers projets, allant de sites web personnels à des applications d'entreprise complexes. J'ai développé des compétences approfondies en HTML, CSS, JavaScript ainsi qu'en frameworks tels que React.js. ",
    },
    "Mes projets": {
      projects: [
        {
          description: "Prototype site vitrine pour un site de logement",
          image: kaisaimg,
          url: "https://kaisa-kappa.vercel.app/",
        },
        {
          description: "Prototype de copie de l'application Trello",
          image: taskManager,
          url: "https://task-manager-sage-ten.vercel.app",
        },
        {
          description: "Site sur starwars en js avec une api",
          image: spacex,
          url: "https://supersixaxis.github.io/About-the-universe/",
        },
        {
          description: "Portfolio fait avec react",
          image: portfolio2022,
          url: "https://react-cv-neon.vercel.app/",
        },
        {
          description:
            "Site de gestion d'interphone et de résidence pour l'entreprise Dièse Télécom",
          image: voipdiese,
          url: "https://voipdiese.com/",
        },
        // Ajoutez d'autres projets selon vos besoins
      ],
    },
    "Mes compétences": {
      description: "J'utilise principalement du javascript, react et nodejs",
    },
  };

  useEffect(() => {
    setDisplayData(categoriesData[activeButton]);
  }, [activeButton]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="text-center">
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
                  <p className="text-l text-white">{displayData.description}</p>
                )}
                {activeButton === "Mes projets" && displayData.projects && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {displayData.projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="card relative h-80 overflow-hidden rounded-lg">
                          {" "}
                          {/* Hauteur fixe */}
                          <img
                            className="h-full w-full object-cover"
                            src={project.image}
                            alt="Project"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4 text-white">
                            <p className="text-lg">{project.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
                {activeButton === "Mes compétences" && (
                  <p className="text-l text-white">{displayData.description}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

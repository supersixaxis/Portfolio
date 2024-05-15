import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import taskManager from "../../../assets/TaskManager.jpeg";

export default function AboutMe() {
  const [activeButton, setActiveButton] = useState("Présentation");
  const [displayData, setDisplayData] = useState(null);

  const categoriesData = {
    Présentation: {
      description:
        "Bonjour ! Je suis un développeur web passionné. Grâce à plusieurs années d'expérience dans le domaine, j'ai acquis une solide expertise dans la conception et le développement d'applications web. Au cours de ma carrière, j'ai travaillé sur divers projets, allant de sites web personnels à des applications d'entreprise complexes. J'ai développé des compétences approfondies en HTML, CSS, JavaScript ainsi qu'en frameworks tels que React.js. ",
    },
    "Mes projets": {
      projects: [
        {
          description: "Prototype site vitrine pour un site de logement",
          image: taskManager,
          url: "https://kaisa-kappa.vercel.app/",
        },
        {
          description: "Prototype de copie de l'application Trello",
          image: taskManager,
          url: "https://task-manager-fdu50vyj7-supersixaxis-projects.vercel.app/login",
        },
        // Ajoutez d'autres projets selon vos besoins
      ],
    },
    "Mes compétences": {
      description: "Je suis très compétent...",
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
      <div className="flex justify-center">
        {Object.keys(categoriesData).map((category) => (
          <button
            key={category}
            className={`text-l rounded-sm border px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
              activeButton === category
                ? "bg-blue-600 text-white"
                : "bg-transparent text-blue-600"
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
                transition={{ duration: 0.5 }}
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
                        <div className="card relative overflow-hidden rounded-lg">
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

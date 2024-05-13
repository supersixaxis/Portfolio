import React, { useState } from "react";

export default function AboutMe() {
  const [activeButton, setActiveButton] = useState(null);
  const [displayData, setDisplayData] = useState(null);

  const categoriesData = {
    Présentation: {
      description:
        "Bonjour ! Je suis un développeur web passionné. Grâce à plusieurs années d'expérience dans le domaine, j'ai acquis une solide expertise dans la conception et le développement d'applications web. Au cours de ma carrière, j'ai travaillé sur divers projets, allant de sites web personnels à des applications d'entreprise complexes. J'ai développé des compétences approfondies en HTML, CSS, JavaScript ainsi qu'en frameworks tels que React.js. ",
    },
    "Mes projets": {
      projects: [
        {
          title: "Projet 1",
          description: "Description du projet 1",
          image: "url_de_l_image_1",
        },
        {
          title: "Projet 2",
          description: "Description du projet 2",
          image: "url_de_l_image_2",
        },
        // Ajoutez d'autres projets selon vos besoins
      ],
    },
    "Mes compétences": {
      description: "Je suis très compétent...",
    },
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Mise à jour des données d'affichage en fonction du bouton cliqué
    setDisplayData(categoriesData[buttonName]);
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
        {/* Affichage des données en fonction du bouton cliqué */}
        {displayData && (
          <div className="mx-auto w-[50%] text-center">
            {activeButton === "Mes projets" && displayData.projects && (
              <>
                {displayData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="card w-[100%] rounded-lg p-4 py-16 text-center shadow-lg"
                  >
                    <h3>{project.title}</h3>
                    <p className="text-l text-center text-white">
                      {project.description}
                    </p>
                  </div>
                ))}
              </>
            )}
            {activeButton !== "Mes projets" && (
              <p className="text-l text-center text-white">
                {displayData.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

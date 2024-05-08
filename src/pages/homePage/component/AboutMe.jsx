import React, { useState } from "react";

export default function AboutMe() {
  const [activeButton, setActiveButton] = useState(null);
  const [displayData, setDisplayData] = useState(null);

  const categoriesData = {
    "Ce que je fais": {
      image: "url_de_l_image_1",
      title: "Ce que je fais",
      description: "Je fais des trucs..."
    },
    "Mes expériences": {
      image: "url_de_l_image_2",
      title: "Mes expériences",
      description: "J'ai beaucoup d'expériences..."
    },
    "Mes compétences": {
      image: "url_de_l_image_3",
      title: "Mes compétences",
      description: "Je suis très compétent..."
    }
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
        <button
          className={`text-l rounded-sm border px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Ce que je fais"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Ce que je fais")}
        >
          Ce que je fais
        </button>
        <button
          className={`text-l rounded-sm border px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Mes expériences"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Mes expériences")}
        >
          Mes expériences
        </button>
        <button
          className={`text-l rounded-sm border px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Mes compétences"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Mes compétences")}
        >
          Mes compétences
        </button>
      </div>
      <div className="mt-8">
        {/* Affichage des données en fonction du bouton cliqué */}
        {displayData && (
          <div>
            <img src={displayData.image} alt={displayData.title} />
            <h3>{displayData.title}</h3>
            <p className="text-xl text-white">{displayData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

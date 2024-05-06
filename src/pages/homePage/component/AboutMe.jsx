import React, { useState } from "react";

export default function AboutMe() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="text-center">
      <h1 className="py-12 text-3xl font-semibold">About me</h1>
      <div className="flex justify-center">
        <button
          className={`text-l rounded-sm  px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Ce que je fais"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Ce que je fais")}
        >
          Ce que je fais
        </button>
        <button
          className={`text-l rounded-sm  px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Mes expériences"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Mes expériences")}
        >
          Mes expériences
        </button>
        <button
          className={`text-l rounded-sm px-6 py-2 font-bold hover:border-blue-500 hover:text-white ${
            activeButton === "Mes compétences"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-blue-600"
          }`}
          onClick={() => handleButtonClick("Mes compétences")}
        >
          Mes compétences
        </button>
      </div>
    </div>
  );
}

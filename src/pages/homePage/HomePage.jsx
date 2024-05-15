import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import Card from "./component/Card";
import AboutMe from "./component/AboutMe";
import codeImg from "../../assets/background-home.jpg";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 secondes

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const icon = "test";
  const title1 = "Application sur mesure";
  const text1 = "Je réalise vos projets selon vos besoins.";
  const title2 = "SEO";
  const text2 =
    "Je met en place une stratégie de référencement pour mettre en avant votre projet.";
  const title3 = "Application sur mesure";
  const text3 = "Je réalise vos projets selon vos besoins.";

  return (
    <div className="bg-color-primaire">
      <div className="relative">
        <img
          src={codeImg}
          alt="background"
          className="h-auto w-full brightness-50 filter"
        />
        <div className="bg-color-primaire absolute left-0 top-0 h-full w-full opacity-70"></div>
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <p className="py-4 text-xl font-bold text-white">Bienvenue !</p>
          <h1 className="text-5xl font-bold text-white">
            <Typewriter
              options={{
                strings: ["Je suis développeur web"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 text-xl font-bold text-white">
            Si vous avez besoin contactez moi
          </p>
          <button className="rounded-md border bg-blue-600 px-6 py-2 text-xl font-bold text-white hover:border hover:border-blue-500 hover:bg-transparent hover:text-white">
            Contact
          </button>
        </div>
      </div>
      <div className="flex justify-around py-8">
        {[
          { icon, title: title1, text: text1 },
          { icon, title: title2, text: text2 },
          { icon, title: title3, text: text3 },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="card-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Card icon={card.icon} title={card.title} text={card.text} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <AboutMe />
      </motion.div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import Card from "./component/Card";
import AboutMe from "./component/AboutMe";
import codeImg from "../../assets/background-home.webp";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "../../style/AboutMe.css";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
    "Je mets en place une stratégie de référencement pour mettre en avant votre projet.";
  const title3 = "Accompagnement";
  const text3 = "Je vous accompagne pour heberger votre projet.";

  return (
    <div className="bg-color-primaire">
      <div className="relative shadow-md">
        <img
          src={codeImg}
          alt="background"
          class="h-auto w-full brightness-50 filter" width="1920" height="1080"
        />
        <div className="bg-color-primaire absolute left-0 top-0 h-full w-full opacity-70"></div>
        <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform px-4 text-center">
          <p className="py-4 text-xl font-bold text-white">Bienvenue !</p>
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
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
          <a
            href="#contact"
            className="mt-4 inline-block rounded-md border bg-blue-600 px-6 py-2 text-xl font-bold text-white hover:border hover:border-blue-500 hover:bg-transparent hover:text-white md:mt-6"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="modern-border-bottom flex flex-col justify-around py-12 shadow-md md:flex-row">
        {[
          { icon, title: title1, text: text1 },
          { icon, title: title2, text: text2 },
          { icon, title: title3, text: text3 },
        ].map((card, index) => (
          <motion.div
            // key={index}
            // className="card-container"
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.5 }}
          >
            <div key={index} className="">
              <Card icon={card.icon} title={card.title} text={card.text} />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.5 }}
        // transition={{ duration: 0.5 }}
      >
        <AboutMe />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

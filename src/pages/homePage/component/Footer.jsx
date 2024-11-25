import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-center text-sm sm:text-left">
            © {new Date().getFullYear()} - Nathan Appert. Tous droits réservés.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <a
              href="https://github.com/supersixaxis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-appert-5506b1248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:appert.nathan@outlook.fr"
              className="text-white transition hover:text-gray-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Contact.js
import React, { useState } from "react";
import { sendCustomEmail } from "../../../components/Email";

export default function Contact() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    to_email: "",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-md  px-6 py-8 shadow-md">
        <h2 className="mb-6 text-xl font-semibold">Contactez-nous</h2>
        <div className="mb-4">
          <input
            className="w-full rounded-md border px-3 py-2"
            name="firstName"
            value={details.firstName}
            onChange={handleDetailsChange}
            type="text"
            placeholder="Prénom"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border px-3 py-2"
            name="lastName"
            value={details.lastName}
            onChange={handleDetailsChange}
            type="text"
            placeholder="Nom"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border px-3 py-2"
            name="to_email"
            value={details.to_email}
            onChange={handleDetailsChange}
            type="email"
            placeholder="Adresse email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded-md border px-3 py-2"
            name="subject"
            value={details.subject}
            onChange={handleDetailsChange}
            type="text"
            placeholder="Sujet"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full rounded-md border px-3 py-2"
            name="message"
            value={details.message}
            onChange={handleDetailsChange}
            type="text"
            placeholder="Message"
          />
        </div>
        <button
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          disabled={
            !details.firstName ||
            !details.lastName ||
            !details.to_email ||
            !details.subject ||
            !details.message
          }
          onClick={handleSendEmail}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

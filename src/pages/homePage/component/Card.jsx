import React from "react";
import '../../../style/card.css'
export default function Card(props) {
  const { icon, title, text } = props;

  return (
    <div className="card rounded-lg w-[100%] text-center  p-4 shadow-lg">
      <p className="text-white">{icon}</p>
      <h3 className="text-2xl  text-white font-bold">{title}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
}

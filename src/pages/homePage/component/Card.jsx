import React from "react";
import '../../../style/card.css'
export default function Card(props) {
  const { icon, title, text } = props;

  return (
    <div className="card w-[100%]  rounded-lg p-4  py-16 text-center shadow-lg">
      <p className="text-white">{icon}</p>
      <h3 className="text-2xl  font-bold text-white">{title}</h3>
      <p className="text-white ">{text}</p>
    </div>
  );
}

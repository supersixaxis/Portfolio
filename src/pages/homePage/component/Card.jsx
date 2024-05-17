import React from "react";
import '../../../style/card.css'
export default function Card(props) {
  const { icon, title, text } = props;

  return (
    <div className=" flex h-64 w-full flex-col items-center justify-center p-6 py-12 text-center">
      {/*  <p className="text-white">{icon}</p>  */}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
}

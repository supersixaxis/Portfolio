import React from "react";

export default function Card(props) {
  const { icon, title, text } = props;

  return (
    <div className="rounded-lg w-[100%] text-center  p-4 shadow-lg border-r-2 border-white">
      <p className="text-white">{icon}</p>
      <h3 className="text-2xl  text-white font-bold">{title}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
}

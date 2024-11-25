import React from "react";
import "../style/loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="circle-loader">
        <div className="inner-circle"></div>
      </div>
      <p className="loading-text">Chargement...</p>
    </div>
  );
}

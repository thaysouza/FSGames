import React, { useState, useEffect } from "react";
import "../../estilos/estilos.css";

const Loading = () => {
  setTimeout(() => {
    document.getElementById("bg-anima").style = "display:none";
  }, 3000);
  return (
    <div className="bg-anima" id="bg-anima">
      <div className="anima text-center">
        <h2>FSGames</h2>
      </div>
    </div>
  );
};
export default Loading;

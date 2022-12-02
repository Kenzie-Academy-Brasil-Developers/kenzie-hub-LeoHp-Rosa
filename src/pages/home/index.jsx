import React from "react";
import { DivHome, DivInfo, DivInProg, DivLogo } from "./styles";

const Homepage = () => {
  return (
    <DivHome>
      <DivLogo>
        <h1 className="logo">Kenzie Hub</h1>
        <button className="back">Sair</button>
      </DivLogo>
      <DivInfo>
        <h1>Olá, Samuel Leão</h1>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </DivInfo>
      <DivInProg>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </DivInProg>
    </DivHome>
  );
};

export default Homepage;

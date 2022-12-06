import React from "react";
import { Link } from "react-router-dom";
import { DivHome, DivInfo, DivInProg, DivLogo } from "./styles";

const Homepage = ({ user }) => {
  function clearLocal() {
    localStorage.clear();
  }
  return (
    <DivHome>
      <DivLogo>
        <h1 className="logo">Kenzie Hub</h1>
        <Link to="/" onClick={() => clearLocal()} className="back">
          Sair
        </Link>
      </DivLogo>
      <DivInfo>
        <h1>Olá, {user.name}</h1>
        <span>{user.course_module}</span>
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

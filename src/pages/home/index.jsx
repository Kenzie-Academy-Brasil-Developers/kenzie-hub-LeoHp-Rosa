import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/contexts/UserContext";
import ContTecno from "../../components/ContTecno";
import { DivHome, DivInfo, DivInProg, DivLogo } from "./styles";

const Homepage = ({ openModal }) => {
  function clearLocal() {
    localStorage.clear();
  }
  const { user } = useContext(UserContext);

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
        <div className="tech">
          <h1>Tecnologias</h1>
          <button onClick={() => openModal()}>+</button>
        </div>
        <div className="techlist">
          <ContTecno openModal={openModal}></ContTecno>
        </div>
      </DivInProg>
    </DivHome>
  );
};

export default Homepage;

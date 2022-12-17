import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../components/contexts/ModalProvider";
import { UserContext } from "../../components/contexts/UserContext";
import ContTecno from "../../components/ContTecno";
import { DivHome, DivInfo, DivInProg, DivLogo } from "./styles";

const Homepage = () => {
  const { openModal } = useContext(ModalContext);

  function clearLocal() {
    localStorage.clear();
  }
  const { user } = useContext(UserContext);
  const { setModalAdd } = useContext(ModalContext);
  const { setModalEdit } = useContext(ModalContext);
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
          <button
            onClick={() => {
              openModal();
              setModalAdd(true);
              setModalEdit(false);
            }}
          >
            +
          </button>
        </div>
        <div className="techlist">
          <ContTecno></ContTecno>
        </div>
      </DivInProg>
    </DivHome>
  );
};

export default Homepage;

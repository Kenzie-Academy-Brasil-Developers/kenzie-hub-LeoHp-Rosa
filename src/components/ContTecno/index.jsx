import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalProvider";
import { UserContext } from "../contexts/UserContext";
import { ModalAdd, ModalEdit } from "../modal";

import { UlTech } from "./styles";

const ContTecno = ({ openModal }) => {
  const { tech } = useContext(UserContext);
  const { setInOpen } = useContext(ModalContext);

  return (
    <UlTech>
      {tech.length !== 0 ? (
        tech.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.status}</h3>
          </li>
        ))
      ) : (
        <div className="noTech">
          <h1>Você ainda não cadastrou tecnologias.</h1>
          <span>
            Clique no botão abaixo ou no <strong>+</strong> logo acima para
            cadastrar
          </span>
          <button
            onClick={() => {
              openModal();
            }}
          >
            Cadastrar
          </button>
        </div>
      )}
    </UlTech>
  );
};

export default ContTecno;

import React, { useContext, useState } from "react";
import { ModalContext } from "../contexts/ModalProvider";
import { UserContext } from "../contexts/UserContext";

import { UlTech } from "./styles";

const ContTecno = () => {
  const { tech } = useContext(UserContext);
  const { setModalEdit } = useContext(ModalContext);
  const { openModal } = useContext(ModalContext);
  const { setModalAdd } = useContext(ModalContext);

  return (
    <UlTech>
      {tech ? (
        tech.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setModalEdit(true);
              setModalAdd(false);
              openModal();
              localStorage.setItem("@LIID", JSON.stringify(item));
            }}
          >
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
              setModalAdd(true);
              setModalEdit(false);
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

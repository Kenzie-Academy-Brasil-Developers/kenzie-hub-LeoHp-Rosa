import React, { useState } from "react";
import { DivRegister } from "./styles";

const FormRegister = () => {
  const [change, setChange] = useState(false);
  let changeState = change ? "active" : "";
  function changeSelect() {
    setChange(true);
  }

  return (
    <DivRegister>
      <h1>Crie sua conta</h1>
      <p>Rapido e grátis, vamos nessa</p>
      <div>
        <span>Nome</span>
        <input
          className="form"
          placeholder="Digite aqui seu nome"
          type="text"
        ></input>
        <span>Email</span>
        <input
          className="form"
          placeholder="Digite aqui seu email"
          type="email"
        ></input>
        <span>Senha</span>
        <input
          className="form"
          placeholder="Digite aqui sua senha"
          type="password"
        ></input>
        <span>Confirmar Senha</span>
        <input
          className="form"
          placeholder="Digite novamente sua senha"
          type="password"
        ></input>
        <span>Bio</span>
        <input
          className="form"
          placeholder="Fale sobre você"
          type="text"
        ></input>
        <span>Contato</span>
        <input
          className="form"
          placeholder="Opção de contato"
          type="text"
        ></input>
        <span>Selecionar módulo</span>
        <select
          onChange={() => changeSelect()}
          className={`form ${changeState}`}
        >
          <option className="form">Primeiro Modulo</option>
          <option className="form">Segundo Modulo</option>
          <option className="form">Terceiro Modulo</option>
          <option className="form">Quarto Modulo</option>
          <option className="form">Quinto Modulo</option>
          <option className="form">Sexto Modulo</option>
        </select>
        <button className="btnPink">Cadastrar</button>
      </div>
    </DivRegister>
  );
};

export default FormRegister;

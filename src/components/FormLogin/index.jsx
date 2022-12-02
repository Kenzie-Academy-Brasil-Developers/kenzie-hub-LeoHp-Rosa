import React from "react";
import { DivLogin } from "./styles";

const FormLogin = () => {
  return (
    <DivLogin>
      <h2>Login</h2>
      <div>
        <h5>Email</h5>
        <input
          type="email"
          className="form"
          placeholder="Digite seu email"
        ></input>
        <h5>Senha</h5>
        <input
          type="password"
          className="form"
          placeholder="Digite sua senha"
        ></input>
      </div>
      <button className="btnPink">Entrar</button>
      <p>Ainda não possui uma conta?</p>
      <button className="btnGrey">Cadastre-se</button>
    </DivLogin>
  );
};

export default FormLogin;

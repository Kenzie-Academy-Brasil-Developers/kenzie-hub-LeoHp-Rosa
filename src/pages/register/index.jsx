import React from "react";
import FormRegister from "../../components/FormRegister";
import { DivPageReg } from "./styles";

const Register = () => {
  return (
    <DivPageReg>
      <div className="topLogo">
        <h1 className="logo">Kenzie Hub</h1>
        <button className="back">Voltar</button>
      </div>
      <FormRegister></FormRegister>
    </DivPageReg>
  );
};

export default Register;

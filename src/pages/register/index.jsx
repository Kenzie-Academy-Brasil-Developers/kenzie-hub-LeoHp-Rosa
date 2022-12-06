import React from "react";
import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { DivPageReg } from "./styles";

const Register = () => {
  return (
    <DivPageReg>
      <div className="topLogo">
        <h1 className="logo">Kenzie Hub</h1>
        <Link to="/" className="back">
          Voltar
        </Link>
      </div>
      <FormRegister></FormRegister>
    </DivPageReg>
  );
};

export default Register;

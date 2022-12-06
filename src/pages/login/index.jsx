import React from "react";
import FormLogin from "../../components/FormLogin";
import { LoginPage } from "./styles";

const Login = ({ setUser }) => {
  return (
    <LoginPage>
      <h1> Kenzie Hub</h1>
      <FormLogin setUser={setUser}></FormLogin>
    </LoginPage>
  );
};

export default Login;

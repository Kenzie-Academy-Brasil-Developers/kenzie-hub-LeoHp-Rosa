import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DivLogin } from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginCheck } from "./loginCheck";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/UserContext";

const FormLogin = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginCheck),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submit = (data) => {
    userLogin(data);
  };

  return (
    <DivLogin onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <div>
        <h5>Email</h5>
        <input
          type="email"
          className="form"
          placeholder="Digite seu email"
          {...register("email")}
        ></input>
        {errors.email?.message && <p>{errors.email.message}</p>}
        <h5>Senha</h5>
        <input
          type="password"
          className="form"
          placeholder="Digite sua senha"
          {...register("password")}
        ></input>
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <button type="submit" className="btnPink">
        Entrar
      </button>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register" className="btnGrey">
        Registro
      </Link>
    </DivLogin>
  );
};

export default FormLogin;

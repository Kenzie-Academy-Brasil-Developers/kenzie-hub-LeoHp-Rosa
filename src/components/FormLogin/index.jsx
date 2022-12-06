import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DivLogin } from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginCheck } from "./loginCheck";
import { toast } from "react-toastify";

const FormLogin = ({ setUser }) => {
  const navigate = useNavigate();
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
  async function userLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      {
        response.status === 200 && toast.success("Login Efetuado com Sucesso!");
        setTimeout(() => {
          navigate("/home");
        }, 3500);
      }
    } catch (err) {
      console.log(err);
    }
  }
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

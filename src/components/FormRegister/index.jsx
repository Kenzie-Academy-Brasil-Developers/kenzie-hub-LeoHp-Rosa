import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DivRegister } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCheck } from "./registerCheck";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();

  async function regUser(data) {
    try {
      const response = await api.post("users", data);
      {
        response.status === 201 &&
          toast.success(
            "Conta criada com sucesso, redirecionando para pagina de login!"
          );
        setTimeout(() => {
          navigate("/");
        }, 3500);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerCheck),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
      contact: "",
      course_module: " ",
    },
  });
  const [change, setChange] = useState(false);
  let changeState = change ? "active" : "";
  function changeSelect() {
    setChange(true);
  }
  const submit = (data) => {
    regUser(data);
  };

  return (
    <DivRegister onSubmit={handleSubmit(submit)} noValidate>
      <h1>Crie sua conta</h1>
      <p>Rapido e grátis, vamos nessa</p>
      <div>
        <span>Nome</span>
        <input
          className="form"
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <span>Email</span>
        <input
          className="form"
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <span>Senha</span>
        <input
          className="form"
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <span>Confirmar Senha</span>
        <input
          className="form"
          placeholder="Digite novamente sua senha"
          type="password"
          {...register("confirmPass")}
        />
        {errors.confirmPass?.message && <p>{errors.confirmPass.message}</p>}
        <span>Bio</span>
        <input
          className="form"
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}

        <span>Contato</span>
        <input
          className="form"
          placeholder="Opção de contato"
          type="text"
          {...register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}

        <span>Selecionar módulo</span>
        <select
          {...register("course_module")}
          onChange={() => changeSelect()}
          className={`form ${changeState}`}
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}

        <button type="submit" className="btnPink">
          Cadastrar
        </button>
      </div>
    </DivRegister>
  );
};

export default FormRegister;

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { modalCheck } from "./modalCheck";
import { DivModalAdd, DivModalEdit } from "./styles";

export const ModalAdd = ({ closeModal, submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(modalCheck),
    defaultValues: {
      title: "",
      status: "",
    },
  });
  return (
    <DivModalAdd onSubmit={handleSubmit(submit)}>
      <div className="newTecnoTop">
        <p>Cadastrar Tecnologia</p>
        <button onClick={() => closeModal()}>X</button>
      </div>
      <div className="newTecno">
        <span>Nome</span>
        <input placeholder="Digite a Tecnologia" {...register("title")}></input>
        {errors.title?.message && <p>{errors.title.message}</p>}
        <span>Selecionar status</span>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message && <p>{errors.status.message}</p>}
      </div>
      <button type="submit" className="addTecno">
        Cadastrar Tecnologia
      </button>
    </DivModalAdd>
  );
};

export const ModalEdit = () => {
  return (
    <DivModalEdit>
      <div className="newTecnoTop">
        <p>Tecnologia Detalhes</p>
        <button>X</button>
      </div>
      <div className="newTecno">
        <span>Nome do Projeto</span>
        <input placeholder="Digite a Tecnologia"></input>
        <span>Status</span>
        <select>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div className="btnDiv">
        <button className="save">Salvar alterações</button>
        <button className="delete">Excluir</button>
      </div>
    </DivModalEdit>
  );
};

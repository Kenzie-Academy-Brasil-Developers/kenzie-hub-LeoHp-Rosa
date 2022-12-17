import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../contexts/ModalProvider";
import { modalCheck } from "./modalCheck";
import { DivModalAdd } from "./styles";

const ModalAdd = () => {
  const { closeModal } = useContext(ModalContext);
  const { submit } = useContext(ModalContext);
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

export default ModalAdd;

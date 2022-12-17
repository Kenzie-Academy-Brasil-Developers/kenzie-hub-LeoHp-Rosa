import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../contexts/ModalProvider";
import { DivModalEdit } from "../modal/styles";
import * as yup from "yup";

const ModalEditRem = () => {
  const itemList = localStorage.getItem("@LIID");
  const listJson = JSON.parse(itemList);

  const { delTech, closeModal, subEdit } = useContext(ModalContext);
  const editCheck = yup.object().shape({
    status: yup.string().required("Selecione seu nivel nessa tecnologia"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(editCheck),
    defaultValues: {
      status: "",
    },
  });

  return (
    <DivModalEdit onSubmit={handleSubmit(subEdit)}>
      <div className="newTecnoTop">
        <p>Tecnologia Detalhes</p>
        <button onClick={() => closeModal()}>X</button>
      </div>
      <div className="newTecno">
        <span>Nome do Projeto</span>
        <input placeholder={listJson.title} disabled></input>
        <span>Status</span>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      {errors.status?.message && <p>{errors.status.message}</p>}
      <div className="btnDiv">
        <button type="submit" className="save">
          Salvar alterações
        </button>
        <button
          className="delete"
          onClick={() => {
            delTech();
            closeModal();
          }}
        >
          Excluir
        </button>
      </div>
    </DivModalEdit>
  );
};

export default ModalEditRem;

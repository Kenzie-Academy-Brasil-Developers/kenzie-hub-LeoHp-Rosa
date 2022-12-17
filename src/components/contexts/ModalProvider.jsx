import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "./UserContext";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const { setTech, tech } = useContext(UserContext);

  async function addTech(data) {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setTech([...tech, response.data]);
      if (response) {
        toast.success("Tecnologia adicionada com sucesso!");
        closeModal();
      }
    } catch (err) {
      console.log(err);
      toast.error("Você ja possue essa tecnologia");
    }
  }
  async function delTech() {
    const itemList = localStorage.getItem("@LIID");
    const listJson = JSON.parse(itemList);
    const id = listJson.id;
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.warn("Tecnologia deletada com sucesso!");
      const filter = tech.filter((item) => item.id !== id);

      setTech(filter);
      if (response) {
        closeModal();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function editTech(data) {
    const token = localStorage.getItem("@TOKEN");
    const itemList = localStorage.getItem("@LIID");
    const listJson = JSON.parse(itemList);
    const id = listJson.id;
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const filter = tech.filter((item) => item.id === id);
      console.log(filter);
      setTech(filter);
      console.log(response);
      toast.success("Tecnologia atualizada com sucesso!");
      if (response) {
        closeModal();
      }
    } catch (err) {
      console.log(err);
    }
  }
  const [modalIsOpen, setInOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  function openModal() {
    setInOpen(true);
  }
  function closeModal() {
    setInOpen(false);
  }
  const submit = (data) => {
    addTech(data);
  };
  const subEdit = (data) => {
    console.log(data);
    editTech(data);
  };

  return (
    <ModalContext.Provider
      value={{
        delTech,
        modalAdd,
        modalEdit,
        modalIsOpen,
        closeModal,
        submit,
        openModal,
        setModalEdit,
        setModalAdd,
        subEdit,
        editTech,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

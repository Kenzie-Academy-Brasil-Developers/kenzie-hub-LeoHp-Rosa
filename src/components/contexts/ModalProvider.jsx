import React, { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  async function addTech(data) {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(
        "users/techs",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
        data
      );
      console.log(response);
    } catch (err) {
      toast.error(err);
    }
  }
  async function delTech() {
    try {
      const response = await api.delete(`users;techs/`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ModalContext.Provider value={{ addTech }}>
      {children}
    </ModalContext.Provider>
  );
};

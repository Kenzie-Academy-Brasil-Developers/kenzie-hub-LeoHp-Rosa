import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();
  const submit = (data) => {
    regUser(data);
  };
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
  return (
    <RegisterContext.Provider value={{ submit }}>
      {children}
    </RegisterContext.Provider>
  );
};

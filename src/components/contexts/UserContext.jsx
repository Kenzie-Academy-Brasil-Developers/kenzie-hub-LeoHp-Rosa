import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [tech, setTech] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUser(response.data);
          setTech(response.data.techs);
          navigate("/home");
        } catch (err) {
          console.log(err);
          navigate("/");
          localStorage.clear();
        }
      } else {
        navigate("/");
      }
    })();
  }, []);

  async function userLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      setTech(response.data.techs);
      const token = response.data.token;
      localStorage.setItem("@TOKEN", token);
      {
        response.status === 200 && toast.success("Login Efetuado com Sucesso!");
        setTimeout(() => {
          navigate("/home");
        }, 3500);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, userLogin, tech }}>
      {children}
    </UserContext.Provider>
  );
};

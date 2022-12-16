import ChangeRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { ModalAdd } from "./components/modal";
import { ModalProvider } from "./components/contexts/ModalProvider";
import { toast } from "react-toastify";
import { api } from "./services/api";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setInOpen] = useState(false);
  async function addTech(data) {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/users/techs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
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

  async function openModal() {
    setInOpen(true);
  }
  function closeModal() {
    setInOpen(false);
  }
  const submit = (data) => {
    console.log(data);
    addTech(data);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal-content"
          overlayClassName="overlay"
        >
          <ModalAdd closeModal={closeModal} submit={submit}></ModalAdd>
        </Modal>
        <ChangeRoutes openModal={openModal}></ChangeRoutes>
      </div>
    </ThemeProvider>
  );
}

export default App;

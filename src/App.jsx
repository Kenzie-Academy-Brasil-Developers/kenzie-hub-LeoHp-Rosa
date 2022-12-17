import ChangeRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";

import { ModalContext } from "./components/contexts/ModalProvider";
import ModalEditRem from "./components/modalEdit";
import ModalAdd from "./components/modal";

Modal.setAppElement("#root");
function App() {
  const { modalAdd } = useContext(ModalContext);
  const { modalIsOpen } = useContext(ModalContext);
  const { closeModal } = useContext(ModalContext);

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
          {modalAdd ? <ModalAdd></ModalAdd> : <ModalEditRem></ModalEditRem>}
        </Modal>
        <ChangeRoutes></ChangeRoutes>
      </div>
    </ThemeProvider>
  );
}

export default App;

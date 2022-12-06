import { useState } from "react";
import ChangeRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [user, setUser] = useState([]);

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ChangeRoutes setUser={setUser} user={user}></ChangeRoutes>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { UserProvider } from "./UserContext";
import { RegisterProvider } from "./RegisterContext";
import { ModalProvider } from "./ModalProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <RegisterProvider>
        <ModalProvider>{children}</ModalProvider>
      </RegisterProvider>
    </UserProvider>
  );
};

export default Providers;

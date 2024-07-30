"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { SnackbarProvider } from "notistack";
import { ToastContainer } from "react-toastify";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <SnackbarProvider maxSnack={3}>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <ToastContainer />
          <Footer />
        </SnackbarProvider>
      </ReactQueryProvider>
    </Provider>
  );
};

export default ClientLayout;

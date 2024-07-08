import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from "./context/Context.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);



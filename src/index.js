import React from "react";
import GlobalStyle from "./assets/reset/GlobalStyle";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

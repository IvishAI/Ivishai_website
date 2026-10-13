import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { startScrollReveal } from "./lib/scrollReveal";

startScrollReveal();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

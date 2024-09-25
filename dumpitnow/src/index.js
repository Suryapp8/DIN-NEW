import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Buffer } from "buffer";
import process from "process";

// Ensure global is available
window.Buffer = Buffer;
window.process = process;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

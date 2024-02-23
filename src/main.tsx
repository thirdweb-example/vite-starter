import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { client } from "./client.js";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";

function Main() {
  return (
    <ThirdwebProvider client={client}>
      <App />
    </ThirdwebProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BtnBtnPrimary } from "./screens/BtnBtnPrimary";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BtnBtnPrimary />
  </StrictMode>,
);

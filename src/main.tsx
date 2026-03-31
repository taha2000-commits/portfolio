import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ColorModeContextProvider from "./context/ColorModeContext.tsx";
import DotMouseContextProvider from "./context/DotMouseContext.tsx";
import AppLayout from "./AppLayout.tsx";
import MenuStatusProvider from "./context/MenuStatusContext.tsx";
import IsChangingLangContextProvider from "./context/IsChangingLangContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IsChangingLangContextProvider>
      <DotMouseContextProvider>
        <ColorModeContextProvider>
          <MenuStatusProvider>
            <AppLayout />
          </MenuStatusProvider>
        </ColorModeContextProvider>
      </DotMouseContextProvider>
    </IsChangingLangContextProvider>
  </StrictMode>,
);

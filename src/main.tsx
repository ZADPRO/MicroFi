import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "primereact/resources/themes/lara-light-blue/theme.css"; // or your preferred theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ Required CSS


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

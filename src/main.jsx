import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroSection } from "./components/homePage/heroSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroSection /> {/* Test HeroSection independently */}
    {/* <App /> */}
  </StrictMode>
);

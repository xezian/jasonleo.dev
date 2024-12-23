import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Premises } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="jasonleo.dev">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="premises" element={<Premises />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

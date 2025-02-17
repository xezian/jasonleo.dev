import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Observations, Premises } from "./pages";
import { Layout } from "./components";
import { LazyMotion, domAnimation } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="jasonleo.dev">
      <LazyMotion features={domAnimation} strict>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="premises" element={<Premises />} />
            <Route path="observations" element={<Observations />} />
          </Route>
        </Routes>
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>
);

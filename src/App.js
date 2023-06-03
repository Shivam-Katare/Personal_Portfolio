import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

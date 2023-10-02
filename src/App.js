import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import NavBar from "./components/NavBar/NavBar";
import Notified from "./components/Notified/Notified";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Notified />
      <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

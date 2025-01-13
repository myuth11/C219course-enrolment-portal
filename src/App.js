import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Diplomas from "./components/Diplomas";
import Diploma from "./components/Diploma";
import Module from "./components/Module";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/diplomas/:diplomaId" element={<Diploma />} />
        <Route path="/diplomas/:diplomaId/:moduleId" element={<Module />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

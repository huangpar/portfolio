import { Home } from "./home";
import { Portfolio } from "./portfolio";
import { Resume } from "./resume";
import { Amplus } from "./amplus";
import { Weather } from "./weather";
import { Nintendo } from "./nintendo";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/amplus" element={<Amplus />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/nintendo" element={<Nintendo />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Landing } from "./Pages/Landing";
import { SevenWonders } from "./Pages/SevenWonders";

function App() {
  return (
    <div className="parentContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="sevenWonders" element={<SevenWonders />} />
      </Routes>
    </div>
  );
}

export default App;

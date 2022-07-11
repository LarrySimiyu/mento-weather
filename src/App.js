import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Landing } from "./Pages/Landing";
import { HotAndNot } from "./Pages/HotAndNot";

function App() {
  return (
    <div className="parentContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hotAndNot" element={<HotAndNot />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import People from "./pages/People";
import Router from "./Router";
import Starship from "./pages/Starship";
import Planet from "./pages/Planet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route index path="/people" element={<Router page={<People />} />} />
        <Route path="/starships" element={<Router page={<Starship />} />} />
        <Route path="/planets" element={<Router page={<Planet />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

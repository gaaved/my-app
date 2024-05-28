import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import People from "./components/People";
import Router from "./containers/Router/Router";
import Starship from "./components/Starship";
import Planet from "./components/Planet";
import ErrorPage from "./components/Error-page";
import { GlobalStyles } from "./styled";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="/people" element={<Router page={<People />} />} />
        <Route path="/starships" element={<Router page={<Starship />} />} />
        <Route path="/planets" element={<Router page={<Planet />} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

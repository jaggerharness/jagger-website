import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import AnimeFeedPage from "./pages/AnimeFeedPage";
import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/anime-feed" element={<AnimeFeedPage />} />
      <Route path="/projects/pokemon-list" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;

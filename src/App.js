import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AnimeFeedPage from "./pages/AnimeFeedPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/anime-feed" element={<AnimeFeedPage />} />
    </Routes>
  );
}

export default App;

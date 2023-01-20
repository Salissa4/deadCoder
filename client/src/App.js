import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Questions from "./pages/Questions/Questions";
import Games from "./pages/Games/Games";
import Tetris from "./pages/Tetris/Tetris";
import Avatars from "./pages/Avatars/Avatars";
import Lights from './pages/LightsOut/lightsOut'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/tetris" element={<Tetris />} />
          <Route path="/games/lights-out" element={<Lights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

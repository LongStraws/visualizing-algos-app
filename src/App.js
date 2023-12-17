// Desc: This is the main file for the application
import "./App.css";
import PathfindingVisualizer from "./PathFindingVisualizer/PathfindingVisualizer";
import NavBar from "./Components/NavBar";
import React from "react";

const App = () => (
  <div className='App'>
    <NavBar />
    <PathfindingVisualizer />
  </div>
);

export default App;

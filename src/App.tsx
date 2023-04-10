import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ProjectsPage from "./pages/ProjectsPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" Component={MainPage}/>
            <Route path="/projects" Component={ProjectsPage}/>
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

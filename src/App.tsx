import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Footer, Nav } from "./components";
import { Home } from "./pages";
import { GlobalStyles } from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <Nav />
      </header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

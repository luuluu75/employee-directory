import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/nav";
import Container from "./components/Container/container";
import Header from "./components/Header/header";

;

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <Container />     
    </div>
  );
}

export default App;
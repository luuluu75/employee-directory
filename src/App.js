import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/nav";
import Container from "./components/Container/container";
import Search from "./components/Search/search";
import Profile from "./components/Profile/profile"
;

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Container />
      <Search />
      <Profile />
          
    </div>
  );
}

export default App;
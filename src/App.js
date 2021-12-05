import React, { Fragment, useState } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && <Menu />}
          {/* <HeaderBlock /> */}
          <Routes></Routes>
        </Fragment>
      </Router>
      {/* {HeaderBlock} */}
    </div>
  );
}

export default App;

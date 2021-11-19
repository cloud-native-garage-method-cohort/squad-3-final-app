import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AppComponent from "./AppComponent";
function App() {
  /// that should be a fetch
  const employees = [
    {
      id: 1,
      firstName: "Frank",
      lastName: "Murphy",
      email: "frank.murphy@test.com",
    },
    {
      id: 2,
      firstName: "Vic",
      lastName: "Reynolds",
      email: "vic.reynolds@test.com",
    },
    {
      id: 3,
      firstName: "Gina",
      lastName: "Jabowski",
      email: "gina.jabowski@test.com",
    },
    {
      id: 4,
      firstName: "Jessi",
      lastName: "Glaser",
      email: "jessi.glaser@test.com",
    },
    {
      id: 5,
      firstName: "Jay",
      lastName: "Bilzerian",
      email: "jay.bilzerian@test.com",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppComponent employees={employees} />
      </header>
    </div>
  );
}

export default App;

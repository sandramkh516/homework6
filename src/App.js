import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Isfahan" />
      <footer>
        this project is coded by sara mokhtari and is{" "}
        <a href="https://github.com/sandramkh516/homework6">open-source</a>
      </footer>
    </div>
  );
}

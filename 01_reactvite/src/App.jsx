import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Youtube from "./Youtube";

function App() {
  const userName = "Suhani";
  return (
    <>
      <h1>Vite react app {2 + 2}</h1>
      <h1>Vite react app {userName}</h1>
      <Youtube />
    </>
  );
}

export default App;

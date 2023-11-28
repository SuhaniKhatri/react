import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import State from "./components/state";
import Effect from "./components/Effect";
import { Ref } from "./components/Ref";
import PropDrilling from "./components/propDrilling";
import Context from "./components/Context";
import Contexthook from "./components/Contexthook";
import Memo from "./components/Memo";
import Callback from "./components/Callback";

function App() {
  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Ref /> */}
      {/* <PropDrilling /> */}
      {/* <Context /> */}
      {/* <Contexthook /> */}
      {/* <Memo /> */}
      <Callback />
    </>
  );
}

export default App;

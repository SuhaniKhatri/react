import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const reactElement = {
  // reactElement (it will not work)
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const actualReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click to visit google"
);

const AnotherElement = //this works as calling a variable
  (
    <a href="https://google.com" target="_blank">
      Visit Google
    </a>
  );

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // AnotherElement
  //actualReactElement //(it will work this way we should convert it into react)
  // reactElement (it will not work this way)
);

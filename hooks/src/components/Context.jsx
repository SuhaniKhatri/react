import React, { createContext } from "react";
import ChildA from "./ChildA";
//What is context API
//create, provider, consumer

const data = createContext();

function Context() {
  const name = "Suhani";
  return (
    <>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </>
  );
}

export default Context;
export { data };

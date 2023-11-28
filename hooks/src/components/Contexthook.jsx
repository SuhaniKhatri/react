import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();

function Contexthook() {
  const name = "Suhani";
  const gender = "female";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default Contexthook;
export { data, data1 };

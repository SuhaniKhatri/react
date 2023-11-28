import React, { useContext } from "react";
import { data, data1 } from "./Contexthook";

function ChildC() {
  const firstName = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>
        My name is {firstName} and my gender is {gender}
      </h1>

      {/* <data.Consumer>
        {(name) => {
          return (
            <>
              <h1>My name is {name}</h1>;
            </>
          );
        }}
      </data.Consumer> */}
    </>
  );
}

export default ChildC;

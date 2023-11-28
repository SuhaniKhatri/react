import React, { useCallback, useState } from "react";
import New from "./new";

function Callback() {
  const [add, setAdd] = useState(0);

  const Learning = useCallback(() => {
    //some Oprations
  }, []);
  return (
    <>
      <h1>Learning useCallback</h1>
      <New Learning={Learning} />
      <h1>{add}</h1> <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
    </>
  );
}

export default Callback;

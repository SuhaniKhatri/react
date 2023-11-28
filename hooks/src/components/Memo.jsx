import React, { useMemo, useState } from "react";

function Memo() {
  const [add, setAdd] = useState(0);
  const [remove, setRemove] = useState(100);

  const memoization = useMemo(
    function multiply() {
      console.log("**********************");
      return add * 10;
    },
    [add]
  );
  console.log(memoization);

  return (
    <>
      <h1></h1>
      {memoization} <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span> <br />
      <button onClick={() => setRemove(remove - 1)}>Remove</button>
      <span>{remove}</span>
    </>
  );
}
export default Memo;

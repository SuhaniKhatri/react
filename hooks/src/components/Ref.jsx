import React, { useRef, useState } from "react";

export const Ref = () => {
  const [name, setName] = useState("Suhani");
  const refElement = useRef("");
  //   console.log(refElement);

  function reset() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "blue";
  }
  return (
    <>
      <input
        type="text"
        value={name}
        ref={refElement}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>handle</button>
    </>
  );
};

import React, { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Suhani");
  useEffect(() => {
    console.log("component mount");
  }, [data]);

  function updateValue() {
    setCount(count + 1);
  }

  function updateData() {
    setData("Riya");
  }

  return (
    <>
      <h1>button clicked {count} times</h1>
      <h2>my name is {data}</h2>
      <button onClick={updateValue}>Click</button>
      <button onClick={updateData}>Update</button>
    </>
  );
}

export default Effect;

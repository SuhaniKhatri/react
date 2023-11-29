import React from "react";
import Child from "./Child";

function Parent() {
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      <Child getData={getData} />
    </>
  );
}

export default Parent;

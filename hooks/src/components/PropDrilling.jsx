import React from "react";
import ChildA from "./ChildA";

function PropDrilling() {
  const name = "Suhani";
  return (
    <>
      <ChildA name={name} />
    </>
  );
}
export default PropDrilling;

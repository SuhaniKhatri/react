import React, { useState } from "react";

function Child(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.prevantDefault();
    props.getData(name);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Child;

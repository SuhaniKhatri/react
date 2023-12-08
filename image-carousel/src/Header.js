import React from "react";
import { useState } from "react";

const Header = ({ country }) => {
  const [name, setName] = useState("Deepika");

  let name1 = "Riya"; //Not re-render on change
  return (
    <div>
      <h1>
        Hello , {name} from {country}
      </h1>
      <button
        onClick={() => {
          setName("Simran");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Header;

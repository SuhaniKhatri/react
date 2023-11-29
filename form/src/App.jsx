import { useState } from "react";
import "./App.css";
import Parent from "./Parent";

function App() {
  // const [name, setName] = useState();
  // const [pswd, setPswd] = useState();

  // function handleChange(e) {
  //   console.log(e.target.name);
  //   if (e.target.name == "firstName") {
  //     const caps = e.target.value.toUpperCase();
  //     setName(caps);
  //   }
  // }

  return (
    <>
      <Parent />
      {/* <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="text"
          name="password"
          value={pswd}
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Submit" />
      </form> */}
    </>
  );
}

export default App;

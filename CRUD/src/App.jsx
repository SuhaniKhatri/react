import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Create />} />
          <Route path="/read" exact element={<Read />} />
          <Route path="/edit/:id" exact element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

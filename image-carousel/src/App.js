import "./App.css";
import Header from "./Header";
import ImageSlider from "./ImageSider";

function App() {
  const country = "India";
  return (
    <>
      <Header country={country} />
      <ImageSlider />
    </>
  );
}

export default App;

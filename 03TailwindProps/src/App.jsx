import "./App.css";
import Card from "./components/Card";

function App() {
  let src =
    "https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  let myObj = {
    name: "Hitesh",
    age: "25",
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Card
        userName="Hitesh"
        designation="Software Engineer"
        source={src}
        myArr={newArr}
      />
      <Card userName="Riyansh" designation source={src} />
      <Card userName="Yash" designation="Frontend Engineer" source={src} />
    </>
  );
}

export default App;

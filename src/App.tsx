import { Children, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import ReactIcons from "./components/reactIcons";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const items: string[] = [
    "California",
    "Dhaka",
    "Melbourne",
    "Istanbul",
    "Moscow",
    "Oslo",
  ];

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleOnClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={handleOnClear}></Cart>
      {/* <Button
        text="Click Me"
        onClickButton={() => console.log("I'm Clicked")}
      />
      <ReactIcons /> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => handleSelectedItem(item)}
      /> */}
    </div>
  );
}

export default App;

import { Children, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import ReactIcons from "./components/reactIcons";
import "./App.css";

function App() {
  const items: string[] = [
    "California",
    "Dhaka",
    "Melbourne",
    "Istanbul",
    "Moscow",
    "Oslo",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button
        text="Click Me"
        onClickButton={() => console.log("I'm Clicked")}
      />
      <ReactIcons />
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => handleSelectedItem(item)}
      /> */}
    </div>
  );
}

export default App;

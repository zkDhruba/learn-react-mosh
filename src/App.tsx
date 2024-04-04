import { Children, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import ReactIcons from "./components/reactIcons";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandbleText from "./components/ExpandbleText";
import Form from "./components/Form";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div>
      <ExpenseTracker />
    </div>
  );
}

export default App;

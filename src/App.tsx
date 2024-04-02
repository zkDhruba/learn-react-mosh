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

function App() {
  return (
    <div>
      <ExpandbleText maxChars={25}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem illo
        veniam sit eveniet pariatur, qui officiis? Pariatur consequuntur, odio
        expedita facilis aliquam eos, vero inventore odit reiciendis nemo
        consectetur numquam laudantium excepturi recusandae sit placeat nihil,
        fugit alias! Explicabo corrupti nulla recusandae id! Excepturi porro
        ipsam nulla reprehenderit quidem sed ullam aliquam labore cupiditate
        vero dolorum cumque quae hic temporibus earum, molestias odit quia.
        Similique inventore deleniti veniam sit magni possimus est consectetur
        hic nihil velit. Tenetur, cum officiis saepe modi temporibus cupiditate,
        inventore, sed praesentium quae molestiae beatae? Nostrum fugiat tempora
        quaerat in pariatur officia sunt nam, voluptatem qui.
      </ExpandbleText>
    </div>
  );
}

export default App;

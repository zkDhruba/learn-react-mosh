import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dhaka", "Sydney", "Delhi", "California", "Paris", "Istanbul"];
  return (
    <div>
      <ListGroup items={items} heading="Towns" />
    </div>
  );
}

export default App;

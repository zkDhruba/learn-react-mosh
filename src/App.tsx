import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dhaka", "Sydney", "Delhi", "California", "Paris", "Istanbul"];
  const handleOnSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Towns"
        onSelectItem={handleOnSelectItem}
      />
    </div>
  );
}

export default App;

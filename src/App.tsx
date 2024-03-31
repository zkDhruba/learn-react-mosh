import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const handleClickButton = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <Button
        color="success"
        children="Click Me"
        onClickButton={handleClickButton}
      ></Button>
    </div>
  );
}

export default App;

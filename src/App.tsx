import { Children, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [visibility, setVisibility] = useState(false);

  const handleClickButton = () => {
    setVisibility(true);
  };

  return (
    <div>
      {visibility && (
        <Alert onAlertClose={() => setVisibility(false)}> My Alert </Alert>
      )}
      <Button
        color="success"
        text="Click Me"
        onClickButton={handleClickButton}
      ></Button>
    </div>
  );
}

export default App;

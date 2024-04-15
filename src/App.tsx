import { Children, useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";
import { Controller } from "react-hook-form";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border"></div>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

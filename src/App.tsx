import { Children, useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { Controller } from "react-hook-form";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });
    // return cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.deleteUser(user.id).catch((err: Error) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 11, name: "Ayon" };
    setUsers([newUser, ...users]);

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err: Error) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((err: Error) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border"></div>
        </div>
      )}
      <div className="text-end">
        <button className="btn btn-success mb-3" onClick={addUser}>
          Add User +
        </button>
      </div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-warning mx-1"
                onClick={() => updateUser(user)}
              >
                update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

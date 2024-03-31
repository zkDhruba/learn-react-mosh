import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Dhaka", "Sydney", "Delhi", "California", "Paris", "Istanbul"];
  // let selectedIndex = 0;
  // Use of state

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

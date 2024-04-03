import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current) person.name = nameRef.current.value;
    if (ageRef.current) person.age = parseInt(ageRef.current.value);

    console.log(person, "person obj");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input-label">
          Age:
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

import React, { useState } from "react";

const StateFour = () => {
  const [todos, setTodos] = useState([]); //handles the content that will be stored and displayed in my my todo
  const initialState = {
    name: "",
    details: "",
    startTime: "",
    endTime: "",
  }; // handles all the states for your inputs
  const [data, setdata] = useState(initialState);
  console.log(data);

  const handleTodoUpdate = (e) => {
    // Prevents the form from refreshing when you submit
    e.preventDefault();
    setTodos([...todos, data]);
    console.log("data from handletodo update ", data);
    setdata(initialState);
  };
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <section>
      <h1>TODO LISTS</h1>
      <main>
        {todos.length === 0 ? (
          <h2>There is Nothing in the todo list </h2>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <h3>{todo.name}</h3>
                <p>{todo.details}</p>
                <div>
                  <span>start: {todo.startTime}</span>
                  <span>EndTime: {todo.endTime}</span>
                </div>
                <button type="button" onClick={() => handleDelete(index)}>
                  {" "}
                  Delete Todo
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
      <form action="" onSubmit={handleTodoUpdate}>
        {/* Todo Name */}
        <input
          type="text"
          placeholder="Enter todo name"
          value={data.name}
          onChange={(e) => setdata({ ...data, name: e.target.value })}
        />
        {/* Todo details */}
        <textarea
          name=""
          id=""
          placeholder="Enter todo description"
          value={data.details}
          onChange={(e) => setdata({ ...data, details: e.target.value })}
        ></textarea>
        {/* Todo start time */}
        <input
          type="date"
          name=""
          id=""
          placeholder="Enter start date"
          value={data.startTime}
          onChange={(e) => setdata({ ...data, startTime: e.target.value })}
        />
        {/* Todo end time */}
        <input
          type="date"
          name=""
          id=""
          placeholder="Enter End date"
          value={data.endTime}
          onChange={(e) => setdata({ ...data, endTime: e.target.value })}
        />
        {/* Button */}
        <button type="submit">Create Todo</button>
      </form>
    </section>
  );
};

export default StateFour;

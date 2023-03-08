import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksSlice } from "./store/taskSlice";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks.todos);
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    dispatch(tasksSlice.actions.addTask({ description }));
    setDescription("");
  };

  const handleCompleteTask = (id) => {
    dispatch(tasksSlice.actions.completeTask({ id }));
  };

  const handleDeleteTask = (id) => {
    dispatch(tasksSlice.actions.deleteTask({ id }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTask(todo.id)}
            />
            {todo.description}
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;

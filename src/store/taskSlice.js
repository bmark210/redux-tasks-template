import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    todos: [
      { id: 1, description: "Learn React", completed: false },
      { id: 2, description: "Build a todo app", completed: true },
      { id: 3, description: "Deploy the app", completed: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const { description } = action.payload;
      const newTask = {
        id: state.todos.length + 1,
        description,
        completed: false,
      };
      state.todos.push(newTask);
    },
    completeTask: (state, action) => {
      const { id } = action.payload;
      const task = state.todos.find((todo) => todo.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

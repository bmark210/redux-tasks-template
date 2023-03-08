import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;

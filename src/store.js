import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer
  },

  devTools: true
});

export default store;

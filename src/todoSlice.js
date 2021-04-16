import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();
const initialState = entityAdapter.getInitialState({
  counter: 1
});
const filledState = entityAdapter.upsertMany(initialState, [
  { id: 1, title: "First" },
  { id: 2, title: "Second" }
]);

const slise = createSlice({
  name: "todos",

  initialState: filledState,

  reducers: {
    addOne: entityAdapter.addOne,
    removeOne: entityAdapter.removeOne,
    increment(state) {
      state.counter += 1;
    }
  }
});

export const { addOne } = slise.actions;
export const { selectAll } = entityAdapter.getSelectors(
  (state) => state[slise.name]
);

export default slise;

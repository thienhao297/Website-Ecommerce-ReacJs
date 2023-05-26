import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
};

const counterSlide = createSlice({
  name: " counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      if (state.counter < 10) state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) state.counter--;
    },
  },
});

export const counterActions = counterSlide.actions;

export default counterSlide.reducer;

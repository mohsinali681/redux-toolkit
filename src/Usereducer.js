import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  name: "mohsin",
  age: 18,
  status: "coder",
};

export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.age = action.payload;
  });
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.name = action.payload;
  });
  builder.addCase("UPDATE_STATUS", (state, action) => {
    state.status = action.payload;
  });
});

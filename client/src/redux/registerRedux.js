import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  error: false,
};

const registerSlice = createSlice({
  name: "user",
  initialState: {
    initialState,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state) => {
      state.isFetching = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;

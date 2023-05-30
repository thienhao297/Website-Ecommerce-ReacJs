import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    userlogin(state) {
      state.isLogin = true;
    },
    userlogout(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;

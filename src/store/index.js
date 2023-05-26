import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import popupReducer from "./popup";
import loginReducer from "./popup";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    login: loginReducer,
    counter: counterReducer,
  },
});

export default store;

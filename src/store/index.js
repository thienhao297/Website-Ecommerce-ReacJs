import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import loginReducer from "./login";
import cartReducer from "./cart";
import counterReducer from "./counter";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    login: loginReducer,
    cart: cartReducer,
    counter: counterReducer,
  },
});

export default store;

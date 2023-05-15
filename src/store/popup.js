import { createSlice } from "@reduxjs/toolkit";

const initialPopupState = {
  isPopup: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    show(state) {
      state.isPopup = true;
    },
    hide(state) {
      state.isPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;

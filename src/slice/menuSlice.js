import { MENU_ITEMS } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenuItems: MENU_ITEMS.PENCIL,
  actionMenuItems : null
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItems = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionMenuItems = action.payload;
    },
  },
});

export const { menuItemClick , actionItemClick } = menuSlice.actions;

export default menuSlice.reducer;

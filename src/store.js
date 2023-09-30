import { configureStore } from "@reduxjs/toolkit";
import toolboxSlice from "./slice/toolboxSlice";
import menuSlice from "./slice/menuSlice";

export const store = configureStore({
  reducer: {
    toolbox: toolboxSlice,
    menu: menuSlice,
  },
});

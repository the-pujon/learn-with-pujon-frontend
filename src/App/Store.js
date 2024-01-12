// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

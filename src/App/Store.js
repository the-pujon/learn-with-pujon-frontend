// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;

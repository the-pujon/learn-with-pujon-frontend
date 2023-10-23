import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    courses: [],
    totalItem: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.courses.push(action.payload);
      state.totalItem = state.courses.length;
      state.totalPrice = state.courses.reduce((total, course) => total + course.price, 0);
    },
    updateItemInCart: (state, action) => {
      const updatedItem = action.payload; // Should include _id and any updated properties
      const itemIndex = state.courses.findIndex((item) => item._id === updatedItem._id);
      if (itemIndex !== -1) {
        state.courses[itemIndex] = updatedItem;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload; // Assuming it's the item's _id
      console.log("item", itemIdToRemove)
const c = state.courses.filter((item) => item._id !== itemIdToRemove);
console.log("ffff", c)

      state.courses = state.courses.filter((item) => item._id !== itemIdToRemove);
      state.totalItem = state.courses.length;
      state.totalPrice = state.courses.reduce((total, course) => total + course.price, 0);
    },
  },
});

export const { addItemToCart, updateItemInCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import Users from "../mockData/users";

const initialState = {
  id: 0,
  username: "",
  password: "",
  name: "",
  age: 0,
  balance: 0,
  cart: [],
  cartTotal: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const username = action.payload;
      let userLoggedIn = null;

      for (let i = 0; i < Users.length; i++) {
        if (username === Users[i].username) {
          userLoggedIn = Users[i];
        }
      }

      return (state = userLoggedIn);
    },
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = item.price * existingItem.quantity;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    getTotalItemInCart: (state, action) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price;
      });

      state.cartTotal = total;
    },
  },
});

export const { setUser, addItemToCart, getTotalItemInCart } = userSlice.actions;
export default userSlice.reducer;

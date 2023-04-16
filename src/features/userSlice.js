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
      const user = action.payload;
      let userLoggedIn = null;

      for (let i = 0; i < Users.length; i++) {
        if (
          user.username === Users[i].username &&
          user.password === Users[i].password
        ) {
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
        existingItem.itemTotal = existingItem.quantity * item.price;
      } else {
        state.cart.push({ ...item, quantity: 1, itemTotal: item.price });
      }
    },
    getTotalItemInCart: (state, action) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.quantity;
      });

      state.cartTotal = total;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const cartIndex = state.cart.findIndex((cart) => item.id === cart.id);
      state.cart[cartIndex].quantity = item.quantity;
      state.cart[cartIndex].itemTotal = item.price * item.quantity;
      if (state.cart[cartIndex].quantity === 0) {
        state.cart = state.cart.filter((cart) => cart.quantity !== 0);
      }
    },
  },
});

export const { setUser, addItemToCart, getTotalItemInCart, removeItem } =
  userSlice.actions;
export default userSlice.reducer;

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
      state.cart.push(item);
    },
  },
});

export const { setUser, addItemToCart } = userSlice.actions;
export default userSlice.reducer;

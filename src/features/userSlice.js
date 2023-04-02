import { createSlice } from "@reduxjs/toolkit";
import Users from "../mockData/users";

const userSlice = createSlice({
  name: "user",
  initialState: null,
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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

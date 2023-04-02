import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    dispatch(setUser(username));
    setLoggedIn(true);
    console.log(user);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter username..."
      />
      <button onClick={handleLogIn}>Log in</button>
      {loggedIn ? <div>{user.name}</div> : null}
    </div>
  );
};

export default HomePage;

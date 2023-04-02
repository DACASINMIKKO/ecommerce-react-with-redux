import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, addItemToCart } from "../../features/userSlice";
import "./styles.css";
import Items from "../../mockData/items";
import Navbar from "../../components/navbar/navbar";

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

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
    console.log(user);
  };

  return (
    <div>
      <Navbar user={user}></Navbar>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter username..."
      />
      <button onClick={handleLogIn}>Log in</button>

      <div class="cardsContainer">
        {Items.map((item) => (
          <div>
            <div class="card">
              {/* <img src="product-image.jpg" alt="Product Image" /> */}
              <div class="card-content">
                <h2>{item.name}</h2>
                <p class="price">{item.price}</p>
                <button onClick={() => addToCart(item)} class="add-to-cart">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

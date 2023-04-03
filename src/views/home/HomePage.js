import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  addItemToCart,
  getTotalItemInCart,
} from "../../features/userSlice";
import "./styles.css";
import Items from "../../mockData/items";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
    dispatch(getTotalItemInCart());
    console.log(user);
  };

  useEffect(() => {
    if (user.name === "" || user.username === "") {
      navigate("/login");
      return;
    }
  }, [user]);

  return (
    <div>
      <Navbar user={user}></Navbar>

      <div class="cardsContainer">
        {Items.map((item) => (
          <div>
            <div class="card">
              {/* <img src="product-image.jpg" alt="Product Image" /> */}
              <div class="card-content">
                <h2>{item.name}</h2>
                <p class="price">{item.price.toFixed(2)}</p>
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

import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  addItemToCart,
  getTotalItemInCart,
} from "../../features/userSlice";

import Items from "../../mockData/items";
import Navbar from "../../components/navbar/navbar";

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const cartItem = user.cart;
  return (
    <div>
      <Navbar user={user} />
      <div class="cart-container">
        <h1>My Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>1</td>
                <td>${item.price}</td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="cart-total">
          <h3>Cart Total: ${user.cartTotal}</h3>
          <a href="#">Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

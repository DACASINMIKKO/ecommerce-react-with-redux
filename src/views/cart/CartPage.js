import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  addItemToCart,
  getTotalItemInCart,
} from "../../features/userSlice";

import Items from "../../mockData/items";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/modal/Modal";

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const cartItem = user.cart;
  const [quantity, setQuantity] = useState(0);
  const [modal, setModal] = useState(false);
  const handleRemove = () => {
    setModal(true);
  };
  return (
    <div>
      <Navbar user={user} />
      <div class="cart-container">
        {user.name === "" ? <h1>My Cart</h1> : <h1>{user.name} Cart</h1>}
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
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${item.itemTotal.toFixed(2)}</td>
                <td>
                  <button onClick={handleRemove}>Remove</button>
                </td>
                <Modal
                  item={item}
                  isOpen={modal}
                  onRemove={() => {
                    setModal(!modal);
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div class="cart-total">
          <h3>Cart Total: ${user.cartTotal.toFixed(2)}</h3>
          <h3>Balance: ${user.balance}</h3>
          <a href="#">Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import Items from "../../mockData/items";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/modal/Modal";
import { removeItem, getTotalItemInCart } from "../../features/userSlice";

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cartItem = user.cart;
  const handleRemove = (id) => {
    const itemIndex = modalItem.findIndex((item) => item.id === id);
    const newItems = [...modalItem];
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      modal: !newItems[itemIndex].modal,
    };
    setModalItem(newItems);
  };
  const handleRemoveModal = (id) => {
    const itemIndex = modalItem.findIndex((item) => item.id === id);
    const newItems = [...modalItem];
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      modal: false,
      itemTotal: newItems[itemIndex].quantity * newItems[itemIndex].price,
    };

    setModalItem(newItems);
    dispatch(removeItem(newItems[itemIndex]));
    dispatch(getTotalItemInCart());
  };

  //const modalCartItem = cartItem.foreach((item) => [{ ...item, modal: false }]);

  const [modalItem, setModalItem] = useState([]);

  const handleQuantityChange = (e, itemId) => {
    const newItems = modalItem.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: parseInt(e.target.value) };
      } else {
        return item;
      }
    });
    setModalItem(newItems);
  };

  console.log(user);

  useEffect(() => {
    setModalItem(
      cartItem.map((item) => {
        return { ...item, modal: false };
      })
    );
  }, [cartItem]);
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
            {modalItem.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${item.itemTotal.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
                <Modal
                  value={item.quantity}
                  item={item}
                  isOpen={item.modal}
                  onChange={(e) => {
                    handleQuantityChange(e, item.id);
                  }}
                  onRemove={() => {
                    handleRemoveModal(item.id);
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

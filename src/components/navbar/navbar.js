import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Navbar = ({ user, searchQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-shopname">MyShop</div>
      <form className="navbar-searchform">
        <input
          type="text"
          className="navbar-searchinput"
          placeholder="Search products"
          value={searchQuery}
          onChange={searchQuery}
        />
        <button type="submit" className="navbar-searchbutton">
          Search
        </button>
      </form>
      <div className="navbar-userinfo">
        {user.name ? (
          <div className="navbar-username">Welcome, {user.name}</div>
        ) : (
          <a href="/login" className="navbar-loginlink">
            Log In
          </a>
        )}
        <a href="/cart" className="navbar-cartlink">
          <i className="fa fa-shopping-cart"></i>
          Cart ({user.cart.length})
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

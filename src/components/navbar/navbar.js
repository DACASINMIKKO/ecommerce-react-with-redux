import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import HomePage from "../../views/home/HomePage";

const Navbar = ({ user, searchQuery }) => {
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-shopname">
        MyShop
      </Link>
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
        <Link to="/cart" className="navbar-cartlink">
          Cart ({user.cart.length})
        </Link>
        <div>{user.cartTotal.toFixed(2)}</div>
      </div>
    </nav>
  );
};

export default Navbar;

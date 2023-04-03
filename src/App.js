import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/home/HomePage";
import CartPage from "./views/cart/CartPage";
import CheckOutPage from "./views/checkout/CheckOutPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LoginPage from "./views/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/checkout" Component={CheckOutPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

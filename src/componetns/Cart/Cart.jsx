import { useEffect, useState } from "react";

import Checkout from "../Checkout";
import CartItem from "../CartItem";

import a1 from "../../assets/img/data/1.jpg";
import a2 from "../../assets/img/data/2.jpg";
import a3 from "../../assets/img/data/3.jpg";
import a4 from "../../assets/img/data/4.jpg";
import a5 from "../../assets/img/data/5.jpg";
import a6 from "../../assets/img/data/6.jpg";
import a7 from "../../assets/img/data/7.jpg";
import a8 from "../../assets/img/data/8.jpg";
import a9 from "../../assets/img/data/9.jpg";
import a10 from "../../assets/img/data/10.jpg";
import a11 from "../../assets/img/data/11.jpg";
import a12 from "../../assets/img/data/12.jpg";
import a13 from "../../assets/img/data/13.jpg";
import a14 from "../../assets/img/data/14.jpg";
import a15 from "../../assets/img/data/15.jpg";
import a16 from "../../assets/img/data/16.jpg";
import a17 from "../../assets/img/data/17.jpg";
import a18 from "../../assets/img/data/18.jpg";
import a19 from "../../assets/img/data/19.jpg";
import a20 from "../../assets/img/data/20.jpg";
import a21 from "../../assets/img/data/21.jpg";
import a22 from "../../assets/img/data/22.jpg";
import a23 from "../../assets/img/data/23.jpg";
import a24 from "../../assets/img/data/24.jpg";
import a25 from "../../assets/img/data/25.jpg";
import a26 from "../../assets/img/data/26.jpg";
import a27 from "../../assets/img/data/27.jpg";
import a28 from "../../assets/img/data/23.jpg";
import a29 from "../../assets/img/data/29.jpg";
import a30 from "../../assets/img/data/30.jpg";
import a31 from "../../assets/img/data/31.jpg";
import a32 from "../../assets/img/data/32.jpg";
import a33 from "../../assets/img/data/33.jpg";
import a34 from "../../assets/img/data/34.jpg";
import a35 from "../../assets/img/data/35.jpg";
import a36 from "../../assets/img/data/36.jpg";
import a37 from "../../assets/img/data/37.jpg";
import a38 from "../../assets/img/data/38.jpg";
import a39 from "../../assets/img/data/39.jpg";
import a40 from "../../assets/img/data/40.jpg";

import "./Cart.css";

const Cart = () => {
  // console.log(JSON.parse(localStorage.getItem("cartItems")));

  const [cartItems, setCartItems] = useState([]);

  const imgs = [
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12,
    a13, a14, a15, a16, a17, a18, a19, a20, a21, a22,
    a23, a24, a25, a26, a27, a28, a29, a30, a31, a32,
    a33, a34, a35, a36, a37, a38, a39, a40
  ]

  useEffect(() => {
    setInterval(() => {
      const data = JSON.parse(localStorage.getItem("cartItems")) || [];
      console.log(data);
      setCartItems(data);
    }, 1000)
  }, []);

  // console.log(data);
  const price =
  cartItems.reduce((acc, curr) => acc + curr.newPrice * curr.count, 0) || 0;
  // const [cart, setCart] = useState(localData)
  return (
    <div className="cart-wrapper">
      <div className="cart">
        {cartItems &&
          cartItems.map((item) => (
            <CartItem key={item.id+'a'} item={item} imgs={imgs} />
          ))}
      </div>
      <Checkout totalPrice={price} />
    </div>
  );
};

export default Cart;

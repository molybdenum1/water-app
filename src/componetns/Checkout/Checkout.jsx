// import React from 'react'
import { Button } from "@mui/material";
import PropTypes from "prop-types";

import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = (props) => {
  const { totalPrice } = props;
  const nav = useNavigate();

  const clearCart = () => {
    nav('/');
    localStorage.removeItem("cartItems");
  };
  return (
    <div className="checkout">
      <div className="checkout-total">
        <div className="total">Total</div>
        <div className="sum">AED {totalPrice.toFixed(2)}</div>
      </div>
      <div className="checkout-button">
        <Button variant="contained" size="large" sx={{
            width: "90%",
            borderRadius: "20px",
            margin:"0 20px",
        }}>
            Checkout
        </Button>
      </div>
      <div className="clear-button">
        <Button variant="text" size="small" onClick={clearCart}> 
            Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
Checkout.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
import React from "react";
// import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
// import { useImage } from 'react-image';

import PropTypes from "prop-types";

import "./Card.css";

const Card = (props) => {
  const { product, imgs } = props;
  const [count, setCount] = React.useState(1);

  const addToCart = () => {
    console.log({ product, count });
    console.log(JSON.parse(localStorage.getItem('cartItems')));
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product, count }]));
  };
  return (
    <div className="card">
      <Badge
        badgeContent={`-${product.sale}`}
        color="success"
        variant="standard"
        sx={{ fontSize: "0.8rem" }}
      >
        <div className="card-wrapper">
          <div className="card-img">
            <img
              src={imgs[product.id - 1]}
              alt="water"
              width={276}
              height={274}
            />
          </div>
          <div className="card-text">
            <p>{product.name}</p>
          </div>
          <hr />
          <div className="card-footer">
            <div className="card-price">
              <div className="card-new-price">{product.newPrice} AED</div>
              <div className="card-old-price">{product.oldPrice} AED</div>
            </div>
            <div className="card-actions">
              <div className="card-quantity-of-goods">
                <Button
                  aria-label="reduce"
                  variant="outlined"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <span className="good-quantity">{count}</span>
                <Button
                  aria-label="increase"
                  variant="outlined"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </div>
              <div className="to-cart">
                <Button variant="contained" sx={{
                  textAlign: "center",
                }} 
                  onClick={addToCart}
                >
                  <ShoppingCartIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Badge>
    </div>
  );
};

export default Card;

Card.propTypes = {
  product: PropTypes.object.isRequired,
  imgs: PropTypes.array.isRequired,
};

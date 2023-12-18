import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

// import a1 from "../../assets/img/data/1.jpg";

import "./CartItem.css";

const CartItem = (props) => {
  const { item, imgs } = props;

  //   setCartItems((prev) => console.log(prev))

  const deleteItem = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((it) => it.id !== item.id))
    );
  };

  return (
    <div className="cart-item">
      <div className="item-img">
        <img
          src={imgs[item.id - 1]}
          alt="water"
          width={90}
          height={90}
          style={{ borderRadius: "7px" }}
        />
      </div>
      <div className="item-title">{item.name}</div>
      <div className="item-count">
        <div className="good-quantity">
          Quantity:<br />
          {item.count}
        </div>
      </div>
      <div className="item-price">
        <div className="oldprice">AED {item.oldPrice}</div>
        <div className="newprice">AED {item.newPrice}</div>
      </div>
      <div className="item-delete">
        <div className="delete-icon">
          <Button onClick={deleteItem}>
            <DeleteIcon color="error" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  imgs: PropTypes.array.isRequired,
};

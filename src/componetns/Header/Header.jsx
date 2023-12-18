import { Link } from "react-router-dom";
import logo from "../../assets/img/Oasis_Direct_WHITE_EN.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Badge from "@mui/material/Badge";

import "./Header.css";

const Header = () => {
  const itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(localStorage.getItem('cartItems'));

  return (
    <header>
      <div className="header-container">
        <div className="icons-left">
          <PhoneIcon sx={{ marginRight: "10px" }} />
          <WhatsAppIcon />
        </div>
        <div className="icons-center">
          <Link to={"/"}>
            <img src={logo} height="50px" width="60px" />
          </Link>
        </div>
        <div className="icons-right">
          <Badge badgeContent={itemsInCart?.length || 0} color="error">
            <div>
              <Link to={"/cart"}>
                <div>
                  <ShoppingCartIcon
                    sx={{
                      color: "#fff",
                      fontSize: "30px",
                    }}
                  />
                </div>
              </Link>
            </div>
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;

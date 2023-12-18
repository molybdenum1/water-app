// import React from 'react'
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Footer from "../../componetns/Footer";
import Header from "../../componetns/Header";

import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="form-wrapper">
        <form>
          <h1>Checkout Form</h1>
          <h2>Personal Info</h2>
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="First name"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Last name"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Email"
            variant="standard"
            type="email"
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Phone number"
            variant="standard"
            type="tel"
            inputProps={{ pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Country"
            defaultValue={"United Arab Emirates"}
            variant="standard"
            inputProps={{ readOnly: true }}
            required
          />
          <h2>Payment</h2>
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Card number"
            variant="standard"
            type="number"
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="Date"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "400px", marginBottom: "20px" }}
            id="outlined-basic"
            label="CVV"
            variant="standard"
            type="number"
            inputProps={{ maxLength: 3 }}
            required
          />
          <div className="checkout-button">
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "90%",
                borderRadius: "20px",
                margin: "0 20px",
              }}
            >
              Checkout
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;

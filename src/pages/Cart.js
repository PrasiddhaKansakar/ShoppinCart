import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Container from "@mui/material/Container"
import Button from "@mui/material/Button";
import {styles} from "../constants/StyleConstants";
import { Box, Typography } from "@mui/material";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <Container style={styles.Container}>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Box display="flex" 
           flexDirection ="column" 
           alignItems="center"
           justifyContent="center"
      >
        <Typography variant="h4">Cart Summary</Typography>
        <div>
          <Typography sx={{ display: 'inline' }}>TOTAL: ({totalItems} items)</Typography>
          <Typography sx={{ display: 'inline' }}>$ {totalPrice}</Typography>
        </div>
        <Button variant="contained" color="success" style={styles.Button}>
          Proceed To Checkout
        </Button>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
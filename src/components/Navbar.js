import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const linkStyle = {
    textDecoration: "none",
    color: '#fff'
  };
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        <Link to= "/" style={linkStyle}>
            Redux Shopping Cart
        </Link>
        </Typography>
        <Badge badgeContent={cartCount} color="success">
        <Link to= "/cart" style={linkStyle}>
           <ShoppingCartIcon/>
        </Link>        
        </Badge> 
      </Toolbar>
    </AppBar>
  </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
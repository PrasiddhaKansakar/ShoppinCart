import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  loadCurrentItem,
  addToCart,
} from "../redux/Shopping/shopping-actions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import {styles} from "../constants/StyleConstants"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <Grid xs={12} item key={product.id}>
      <Paper elevation={3} style={styles.Paper}>
      <img
        src={product.image}
        alt={product.title}
        style={{height: "300px",
        width: "300px"}}
      />

      <Box style={styles.Box}>
        <Typography variant="h3" gutterBottom>{product.title}</Typography>
        <Typography variant="h5" gutterBottom>{product.description}</Typography>
        <Typography variant="h6" gutterBottom>$ {product.price}</Typography>
      </Box>

      <Box style={styles.Box}>
        <Link to={`/product/${product.id}`}>
          <Button variant="outlined" style={styles.Button}
            onClick={() => loadCurrentItem(product)}
          >
            View Item
          </Button>
        </Link>
        <Button variant="contained" style={styles.Button}
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </Button>
      </Box>
      </Paper>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
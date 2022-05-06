import React from "react"
import { connect } from "react-redux"
import { addToCart } from "../redux/Shopping/shopping-actions"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import {styles} from "../constants/StyleConstants"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { Box } from "@mui/system"

const SingleItem = ({ current, addToCart }) => {
  return (
    <Container style={styles.Container}>
      <Paper elevation= {3} style={styles.Paper}>
      <img
        src={current.image}
        alt={current.title}
        style={{
          height: "300px",
          width: "300px"
      }}
      />
      <Box style={styles.Box}>
        <Typography variant="h3" gutterBottom>{current.title}</Typography>
        <Typography variant="h5" gutterBottom>{current.description}</Typography>
        <Typography variant="h6" gutterBottom>$ {current.price}</Typography>
      </Box>
      <Box style={styles.Box}>
        <Button variant="contained" color="success"
          onClick={() => addToCart(current.id)}
          >
          Add To Cart
        </Button>
      </Box>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
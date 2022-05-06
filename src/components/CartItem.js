import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Paper } from "@mui/material";
import {styles} from "../constants/StyleConstants";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Container style={styles.Container}>
      <Paper elevation={3} style={styles.Paper}>
      <img
        src={item.image}
        alt={item.title}
        style={{
          height: "300px",
          width: "300px"
        }}
      />
      <Box style={styles.Box}>
        <Typography variant="h3" gutterBottom>{item.title}</Typography>
        <Typography variant="h5" gutterBottom>{item.description}</Typography>
        <Typography variant="h6" gutterBottom>$ {item.price}</Typography>
      </Box>
      <Box style={styles.Box}>
          <label htmlFor="qty" style={{fontFamily: 'system-ui', fontSize:'1.25rem', marginBottom:'20px'}}>Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
            style={{ borderRadius:'10px', padding: '10px', fontSize:'1.25rem', border: '1px solid var(--secondary-color)'}}
          />
      </Box>
        <Button style={styles.Button2}
          onClick={() => removeFromCart(item.id)}
        >
            <DeleteIcon fontSize="large" />
        </Button>
      </Paper>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
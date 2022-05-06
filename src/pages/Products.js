import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Container from "@mui/material/Container"
import {styles} from "../constants/StyleConstants";

const Products = ({ products }) => {
  return (
      <Container style={styles.Container}>
      {products.map((product) => (
          <Product key={product.id} product={product} />
      ))}
      </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom"
import { connect } from "react-redux"
import Navbar from "../components/Navbar"
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import SingleItem from "../pages/SingleItem"

function RouterDisplay({ current }) {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/product/:id" component={SingleItem} />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      current: state.shop.currentItem,
    };
  };
  
  export default connect(mapStateToProps)(RouterDisplay);
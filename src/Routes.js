import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp";
import Spa from "./Pages/Spa/Spa";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/product_detail" component={ProductDetail} />
          <Route exact path="/product_list" component={ProductList} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/spa" component={Spa} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

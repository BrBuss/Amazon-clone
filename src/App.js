import React, { useEffect } from "react";
import "./App.css";
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//pages & components
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./services/firebase";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Payment from "./pages/Payment";
import ScrollToTop from "./components/ScrollToTop";

//stripe api key
const promise = loadStripe(
  "pk_test_51HXOmuKZlUwyjOEkVF0ZxnbSiF4iJ4qaNGv34hYkU58AWyYQqlWU7bWJa3ZmgKBwuEXJ7OIud7GQZOwqHITBd6Gf00e0aI9gda"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => unsubscribe(); //clean up
  }, []);
  console.log("user is", user);

  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/shop">
              <Header />
              <Shop />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
          <div className="app__footer">
            <div className="app__footerInner">Made by Bruno Buss</div>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

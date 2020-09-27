import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//material UI
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateValue } from "../StateProvider";
import { auth } from "../services/firebase";

function Header() {
  const [{ cart, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <div className="header__navMain">
        <div className="header__navLeft">
          <div className="header__navMenu">
            <MenuIcon className="header__menuIcon" fontSize="large" />
          </div>

          <div className="header__navLogo">
            <Link to="/">
              <img
                className="header__logo"
                src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>

        <div className="header__searchContainer">
          <form className="header__form">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </form>
        </div>

        <div className="header__navRight">
          {/*1st link*/}
          <div className="header__optionContainer">
            <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLine1">
                  {user ? "Hello, Sign Out" : "Sign In"}
                </span>
                <span className="header__optionLine2">Account & Lists</span>
              </div>
            </Link>
          </div>

          {/*2nd link*/}
          <div className="header__optionContainer">
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLine1">Returns</span>
                <span className="header__optionLine2">& Orders</span>
              </div>
            </Link>
          </div>

          {/*3rd link*/}
          <div className="header__optionContainer">
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLine1">Your</span>
                <span className="header__optionLine2">Prime</span>
              </div>
            </Link>
          </div>

          <div className="header__optionContainer">
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                <ShoppingCartOutlinedIcon />
                <span className="header__optionLine2 header__basketCount">
                  {cart?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__navBottom">
        <div></div>
      </div>
    </nav>
  );
}

export default Header;

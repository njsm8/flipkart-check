import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">Login </div>
        <div className="header__option">More </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon /> <span className="header__basketCount">{basket?.length}</span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

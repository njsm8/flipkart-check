import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">Login </div>
                <div className="header__option">More </div>
                <div className="header__option">Cart</div>
                <div className="header__optionBasket"><ShoppingCartIcon/> <span className="header__basketCount">0</span> </div>
            </div>
        </div>
    )
}

export default Header

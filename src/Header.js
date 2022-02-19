import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
        
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLIneOne">Hello</span>
          <span className="header__optionLIneTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLIneOne">Returns</span>
          <span className="header__optionLIneTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLIneOne">Your</span>
          <span className="header__optionLIneTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default header;

import React from "react";
import "./Header.CSS";

function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/*logo*/}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLIneOne">Hello</span>
          <span className="header__optionLIneTwo">Sign in</span>
        </div>
        <div className="header__option">Returns</div>
        <div className="header__option">& Orders</div>
        <div className="header__option">Your</div>
        <div className="header__option">Prime</div>
      </div>
    </div>
  );
}

export default header;

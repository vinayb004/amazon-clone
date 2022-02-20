import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/amazoncash/Q3/AC_BB_1500x200_EN_20200908.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {/*Basket item*/}
          {/*Basket item*/}
          {/*Basket item*/}
          {/*Basket item*/}
          {/*Basket item*/}
          {/*Basket item*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

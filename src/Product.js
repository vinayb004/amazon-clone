import React from "react";
import "./Product.css";

function product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The lean startup:How Constant Innovation Creates Radically Sucessful
          Businesses Paperback
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>19.11</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src=" https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
        alt="The lean startup"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default product;

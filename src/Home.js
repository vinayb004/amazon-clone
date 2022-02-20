/*rfce- for getting the basic syntax*/
import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Apple IPhone 13"
            price={"799.11"}
            image="https://m.media-amazon.com/images/I/61l9ppRIiqL.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Apple IPhone 13 Pro"
            price={"899.91"}
            image="https://m.media-amazon.com/images/I/61jLiCovxVL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nike Boys' Let There Be Air T-Shirt"
            price={"79.31"}
            image="https://m.media-amazon.com/images/I/51ncBkVz3qL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Skating Board"
            price={"89.11"}
            image="https://m.media-amazon.com/images/I/71aCOkd9vvL._AC_SY741_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="The lean startup:How Constant Innovation Creates Radically Sucessful
          Businesses Paperback"
            price={"19.11"}
            image="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Kenwood kMix stand mixer for baking stylish kitchen mixer with k-beater, dough hook and whisk"
            price={"39.21"}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX569_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__hero"
        src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_ENG_PVD5222._CB408297841_.jpg"
        alt="hero"
      />
      <div className="home__productContainer">
        <div className="home__productRow">
          <Product
            id="19234"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://m.media-amazon.com/images/I/51QP74kWmUL._AA210_.jpg"
          />
          <Product
            id="123764"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/510YXBcI6cL._AC_.jpg"
          />
        </div>

        <div className="home__productRow">
          <Product
            id="123456"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/511TKNyCY8L._AC_SL1000_.jpg"
          />
          <Product
            id="12"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
          />
          <Product
            id="123"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://m.media-amazon.com/images/I/51QP74kWmUL._AA210_.jpg"
          />
        </div>
        <div className="home__productRow">
          <Product
            id="12345"
            title="some title"
            description="just a random description for test proposes"
            price={11.5}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/61Fwi6zN78L._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

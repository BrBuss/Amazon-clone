import React from "react";
import "./Shop.css";
//components
import Product from "../components/Shop/Product";

function Shop() {
  return (
    <div className="shop">
      <div className="shop__body">
        <div className="shop__resultBar"></div>
        <div className="shop__table">
          <div className="shop__tableGrid">
            <div className="shop__tableLeft">
              <div className="shop__leftColumn"></div>
            </div>
            <div className="shop__tableRight">
              <div className="shop__productDisplay">
                <div className="shop__tableRow">
                  <div className="shop__rowflex">
                    <div className="shop__productCell">
                      <Product
                        id="123764"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/510YXBcI6cL._AC_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="123456"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/511TKNyCY8L._AC_SL1000_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="12"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="123"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://m.media-amazon.com/images/I/51QP74kWmUL._AA210_.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="shop__tableRow">
                  <div className="shop__rowflex">
                    <div className="shop__productCell">
                      <Product
                        id="12345"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/61Fwi6zN78L._AC_SL1000_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="123456"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/511TKNyCY8L._AC_SL1000_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="123456"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/511TKNyCY8L._AC_SL1000_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="123456"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/511TKNyCY8L._AC_SL1000_.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="shop__tableRow">
                  <div className="shop__rowflex">
                    <div className="shop__productCell">
                      <Product
                        id="12"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="12"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="12"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
                      />
                    </div>
                    <div className="shop__productCell">
                      <Product
                        id="12"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam quis purus mattis, quis finibus urna pharetra."
                        description="just a random description for test proposes"
                        price={11.5}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/914k1vtZtcL._AC_SL1500_.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

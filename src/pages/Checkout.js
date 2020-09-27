import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../components/Checkout/CheckoutProduct";
import Subtotal from "../components/Checkout/Subtotal";
function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              books, CDs, DVDs, toys, electronics, and more. Continue shopping
              on the Amazon.com homepage, learn about today's deals, or visit
              your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <div>
              <div>
                <h2 className="checkout__title">Your Shopping Cart</h2>
              </div>
              <div className="checkout__price">
                <span>Price</span>
              </div>
            </div>
            <div>
              {/*list out all checkout products */}
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                  stock={item.stock}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

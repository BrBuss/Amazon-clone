import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, stock, description, img, price }) {
  const [dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__main">
        <div className="checkoutProduct__left">
          <div className="checkoutProduct__imgContainer">
            <img src={img} alt="" className="checkoutProduct__img" />
          </div>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <div className="checkoutProduct__stock">
              <primary className="__inStock">In Stock</primary>
            </div>
            <div className="checkoutProduct__action">
              <div className="checkoutProduct__quantity"></div>
              <i className="separator" role="img" aria-label="|"></i>
              <div className="checkoutProduct__delete">
                <span onClick={removeFromCart}>
                  <input type="submit" value="Delete" />
                </span>
              </div>
              <i className="separator" role="img" aria-label="|"></i>
              <div className="checkoutProduct__save">
                <span>
                  <input type="submit" value="Save for later" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="checkoutProduct__right">
          <div className="checkouProduct__price">
            <strong>€ {price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;

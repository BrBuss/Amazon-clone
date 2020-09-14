import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";

function Product({ id, title, img, price, rating, description }) {
  const [dispatch] = useStateValue();
  const addToCart = () => {
    //add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        key: id,
        id: id,
        title: title,
        description: description,
        img: img,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div key={id} className="product">
      <div className="product__container">
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__descrition">{description}</p>
          <p className="product__price">
            <small>€</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <StarRateIcon />
              ))}
          </div>
        </div>
        <div className="product__imgContainer">
          <img src={img} alt="" className="product__img" />
        </div>
        <div className="product__buttonContainer">
          <button onClick={addToCart} className="product__button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

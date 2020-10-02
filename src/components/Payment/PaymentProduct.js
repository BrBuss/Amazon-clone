import React from "react";
import "./PaymentProduct.css";

function PaymentProduct({ id, title, stock, description, img, price }) {
  return (
    <div className="paymentProduct">
      <div className="box_flex">
        <div className="paymentProduct__imgContainer">
          <img src={img} alt="" className="paymentProduct__img" />
        </div>
        <div className="paymentProduct__info box">
          <strong className="paymentProduct__title">{title}</strong>
          <div className="paymentProduct__price">
            <strong>EUR {price}</strong>
          </div>
          <div className="paymentProduct__quantity">
            <p>Quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentProduct;

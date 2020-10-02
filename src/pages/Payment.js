//----------------Imports-------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { getCartTotal } from "../reducer";
import axios from "../axios";
//components
import PaymentProduct from "../components/Payment/PaymentProduct";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
//----------------------------------------------------------------------------------------------------------------------

function Payment() {
  const clicked = () => {
    console.log("object");
  };
  const history = useHistory();
  //datalayer
  const [{ cart }, dispatch] = useStateValue();
  //states
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const [checkedCard, setCheckedCard] = useState(false);
  const [cardInfo, setCardInfo] = useState();
  //Stripe hooks
  const stripe = useStripe();
  const elements = useElements();
  const addCard = (e) => {};
  //card submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //stripe functionality
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders"); //replace instead of push to prevent going back to payment page
      });
  };

  const handleChange = (e) => {
    //Listen for changes in CardElement
    //and displays any erros as the customer types their card details
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    //generate the special stripe secret which allows to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stipe expects the total in a currencie subunits ex:(1 dolar = 100 cent)
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret(); //call inside useEffect
  }, [cart]); // when ever cart changes make a generate a new special stripe

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__header">
          <div className="payment__headerRow_1">
            <img
              src="https://s2.glbimg.com/Lp30LZNGvUbCxdESSUWS6Laej04=/0x0:1200x242/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/w/W/wwYt3XRXGmLzUJeBMlgA/1200px-amazon.com-logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="payment__headerRow_2">
            <div className="payment__headerInnerRow">
              <span>Review Your Order</span>
            </div>
            <div className="small_spacing"></div>
          </div>
        </div>
        <div className="payment__body">
          <div className="payment__grid">
            <div className="payment__grid_table">
              <div className="box_flex">
                <div className="payment__grid_left">
                  <div className="payment__address_row">
                    <div className="payment__innerBox box_flex">
                      <div className="payment__box_column_left">
                        <div className="payment__shippingAddress_box">
                          <div className="row">
                            <strong>Shipping Address</strong>
                            <span>Change</span>
                          </div>
                          <div className="row">
                            <div className="display_address">
                              <ul>
                                <li>Your Name</li>
                                <li>Your Address</li>
                                <li>Country</li>
                                <li>Phone Number</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment__box_column_right">
                        <div className="row">
                          <strong>Payment Method</strong>
                        </div>
                        <div className="row">
                          <form disabled={true} onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <button
                              disabled={processing || disabled || succeeded}
                            >
                              <span>
                                {processing ? <p>Processing</p> : "Add Card"}
                              </span>
                            </button>
                            <div className="row">
                              {error && <div>{error}</div>}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment__product_row">
                    <div className="payment__innerBox">
                      <div className="row">
                        <div className="payment__deliveryTime">
                          <span>Estimated Delivery:</span>
                          <span></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="box_flex space_between">
                          <div className="payment__product_column">
                            <div className="row space_bottom">
                              {cart.map((item) => (
                                <PaymentProduct
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
                          <div className="payment__product_column _right">
                            <div className="row">
                              <fieldset>
                                <legend>
                                  <span>Choose a delivery option</span>
                                </legend>
                                <div className="row">
                                  <label className="radio_label span_green">
                                    Averages x-x business days
                                    <input
                                      type="radio"
                                      checked="checked"
                                      name="radio"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="row">
                                  <label className="radio_label span_green">
                                    Averages x-x business days
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment__grid_right">
                  <div className="payment__grid_right_box">
                    <div className="box_inner">
                      <div className="payment__button_container">
                        <div>
                          <span className="payment__button">
                            <span className="payment__button_inner">
                              <input
                                disabled={!checkedCard}
                                onClick={clicked}
                                type="submit"
                                value="Place Your Order"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="payment__total_price">
                          <CurrencyFormat
                            renderText={(value) => (
                              <>
                                <span>Payment Total:</span>
                                <span>{`${value}`}</span>
                              </>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"EUR "}
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
      </div>
    </div>
  );
}

export default Payment;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal__inner">
        <div className="subtotal__title">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <span>Subtotal ({cart.length} items): </span>
                <span className="subtotal__value">{`${value}`}</span>
              </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"EUR "}
          />
        </div>
        <div className="subtotal__gift">
          <label className="subtotal__label" htmlFor="gift_checkbox">
            <input id="gift_checkbox" type="checkbox" />
            <span className="subtotal__labelSpan">
              This order contains a gift
            </span>
          </label>
        </div>
        <div className="subtotal__buttonContainer">
          <button
            onClick={(e) => history.push("/payment")}
            className="subtotal__button"
          >
            Proceed to chechout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;

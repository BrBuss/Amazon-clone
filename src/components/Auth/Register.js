import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import { auth } from "../../services/firebase.js";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    //register logic
    if (password === reenterPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          //created user, logged in and redirect to homepage
          history.push("/");
        })
        .catch((e) => alert(e.message));
    } else {
      alert("Passwords must be the same ");
    }
  };

  return (
    <div className="register">
      <div className="register__header">
        <Link to="/">
          <img
            className="register__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="register__container">
        <div className="register__column">
          <div className="login__box">
            <div className="box__inner">
              <div className="login__title">
                <h1>Create account</h1>
              </div>
              <div className="login__formContainer">
                <form onSubmit={register}>
                  <div className="login__emailContainer">
                    <label className="login__label" htmlFor="input_box">
                      Email (phone for mobile accounts)
                    </label>
                    <div id="input_box">
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="login__input"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="login__passwordContainer">
                    <label className="login__label" htmlFor="input_box">
                      Password
                    </label>
                    <div id="input_box">
                      <input
                        placeholder="at least 6 characters"
                        value={reenterPassword}
                        onChange={(event) =>
                          setReenterPassword(event.target.value)
                        }
                        className="login__input"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="login__passwordContainer">
                    <label className="login__label" htmlFor="input_box">
                      Re-enter password
                    </label>
                    <div id="input_box">
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="login__input"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="register__boxBottom">
                    <div className="register__button">
                      <input
                        className="register__submit"
                        value="Create your Amazon account"
                        type="submit"
                      />
                    </div>
                    <div className="login__legalText">
                      By continuing, you agree to Amazon's Conditions of Use and
                      Privacy Notice.
                    </div>
                  </div>
                </form>
                <div className="login__help">
                  <a href="#">Need Help?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

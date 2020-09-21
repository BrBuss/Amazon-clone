import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../services/firebase.js";

function Login() {
  // variables
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savedEmail, setSavedEmail] = useState(false);

  const next = (event) => {
    event.preventDefault();
    setSavedEmail(true);
    console.log(savedEmail);
  };
  const goback = () => {
    setSavedEmail(false);
  };

  const login = (event) => {
    event.preventDefault(); // this stops the refresh
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__header">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="login__container">
        <div className="login__column">
          <div className="login__box">
            <div className="box__inner">
              <div className="login__title">
                <h1>Sign-In</h1>
              </div>
              <div className="login__formContainer">
                <form onSubmit={login}>
                  <div className="login__emailContainer">
                    <label className="login__label" htmlFor="email_box">
                      Email (phone for mobile accounts)
                    </label>
                    <div id="email_box">
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="login__input"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="login__passwordContainer">
                    <label className="login__label" htmlFor="password_box">
                      Password
                    </label>
                    <div id="password_box">
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="login__input"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="login__boxBottom">
                    <div className="login__button">
                      <input
                        className="login__submit"
                        value="Login"
                        aria-labelledby="Login"
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
                  <a href="javascript:void(0)">Need Help?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="login__break">
            <h5>New to Amazon?</h5>
          </div>
          <span className="login__createAccount">
            <span className="createAccount__button">
              <Link to="/register">Create your Amazon account</Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

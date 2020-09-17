import React from "react";
import "./HomeCard.css";
import { Link } from "@material-ui/core";

function HomeCard(props) {
  return (
    <div className="card">
      {props.img?.length === 4 ? (
        <>
          <div className="card__container">
            <div className="card__title">
              <h2>{props.title}</h2>
            </div>
            <div className="card__center">
              <div className="card__row">
                <div className="card__item left">
                  <div className="card__img">
                    <img src={props.img[0]} alt="" />
                  </div>
                  <div className="card__text">
                    <span>Computers & Accessories</span>
                  </div>
                </div>
                <div className="card__item right">
                  <div className="card__img">
                    <img src={props.img[1]} alt="" />
                  </div>
                  <div className="card__text">
                    <span>Video Games</span>
                  </div>
                </div>
              </div>
              <div className="card__row">
                <div className="card__item left">
                  <div className="card__img">
                    <img src={props.img[2]} alt="" />
                  </div>
                  <div className="card__text">
                    <span>Baby</span>
                  </div>
                </div>
                <div className="card__item right">
                  <div className="card__img">
                    <img src={props.img[3]} alt="" />
                  </div>
                  <div className="card__text">
                    <span>Toys & Games</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__footer">
              <Link to="/">
                <p>Shop now</p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card__container  card__containerAlt">
            <div className="card__title">
              <h2>{props.title}</h2>
            </div>
            <div className="card__center card__centerAlt">
              <div className="card__imgAlt">
                <img src={props.img} alt="" />
              </div>
            </div>
            <div className="card__footer">
              <Link to="/">
                <p>Shop now</p>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomeCard;

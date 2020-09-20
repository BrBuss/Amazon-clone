import React, { useState, useEffect, useRef } from "react";
import "./HomeRow.css";
import { Link } from "react-router-dom";

function HomeRow({ rowItem }) {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="homerow">
      <div className="homerow__title">
        <h2 className="title-block">
          <span>Discover Amazon</span>
        </h2>
        <span className="homerow__titleLink">
          <Link className="links">Click to learn more</Link>
        </span>
      </div>
      <div className="homerow__view">
        <div className="homerow__innerView" ref={ref}>
          <ul className="homerow__list">
            {/*"?" is to prevent undefined error, this allow to render jsx only props are available */}
            {rowItem?.map((img, index) => (
              <li key={index} className="homerow__rowCard">
                <span className="homerow__item">
                  <Link to="/">
                    <img src={img} alt="" />
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={() => scroll(-1150)} className="homerow__scrollLeft">
          <img
            src="https://image.flaticon.com/icons/png/512/54/54321.png"
            alt=""
          />
        </div>
        <div onClick={() => scroll(1150)} className="homerow__scrollRight">
          <img
            src="https://image.flaticon.com/icons/png/512/54/54321.png"
            alt=""
          />
        </div>
        <div className="homerow__scrollbar">
          <span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeRow;

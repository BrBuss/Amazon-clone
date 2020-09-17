import React from "react";
import "./HomeRow.css";
import { Link } from "react-router-dom";

function HomeRow() {
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
      <div className="homerow__carousel">
        <div className="homerow__carouselView">
          <ul className="homerow__carouselList">
            <li aria-posinset="1" className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>

            <li aria-posinset="2" className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>

            <li aria-posinset="3" className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>

            <li aria-posinset="4" className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>

            <li className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>
            <li className="homerow__carouselCard">
              <span className="homerow__carouselItem">
                <Link to="/">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                    alt=""
                  />
                </Link>
              </span>
            </li>
          </ul>
          <div className="spinner">
            <i className="gw-spinner" role="presentation"></i>
          </div>
          <a tabindex="-1" className="carousel-left">
            <span></span>
          </a>
          <a tabindex="-1" className="carousel-right">
            <span></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeRow;

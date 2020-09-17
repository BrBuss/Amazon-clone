import React from "react";
import "./Home.css";
import Product from "./Product";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import HomeRow from "./HomeRow";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <img
          className="home__hero"
          src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_ENG_PVD5222._CB408297841_.jpg"
          alt="hero"
        />
      </div>
      <div className="home__body">
        <div className="home__cardRow">
          <HomeCard
            title={"Shop by Category"}
            img={[
              "https://i5.walmartimages.com/asr/d81e8095-2bd5-40a6-9a67-7f539edba861_1.1c460a37bfb12fc02d4ea82c4b0dde29.png",
              "https://m.media-amazon.com/images/S/aplus-media/sc/f0156a42-b4a4-414e-839a-fd4a6dd2bf8d.__CR0,0,300,300_PT0_SX300_V1___.png",
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
              "https://m.media-amazon.com/images/S/aplus-media/sota/68ab8d57-afc3-494a-b62a-83a6b3e7fce1.__CR0,0,300,300_PT0_SX300_V1___.png",
            ]}
          />
          <HomeCard
            title={"AmazonBasis"}
            img={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            }
          />
          <HomeCard
            title={"Electronics"}
            img={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            }
          />
          <div className="card__cardSignIn">
            <div className="card__SignInContainer">
              <div className="card__title">
                <h2>Sign in for the best experience</h2>
              </div>

              <div className="card__centerSignIn">
                <Link to="/login">
                  <span className="card__signInButton">
                    <span className="card__signInInner">
                      <span>Sign in securely</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home__row">
          <HomeRow />
        </div>
        <div className="home__row">
          <HomeRow />
        </div>
        <div className="home__row">
          <HomeRow />
        </div>
      </div>
    </div>
  );
}

export default Home;

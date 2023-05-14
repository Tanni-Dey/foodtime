import React from "react";
import "./HeroSection..css";
import heroImg from "../../../assets/images/hero_img.png";

const HeroSection = () => {
  return (
    <div className="foodtime_hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="foodtime_hero_content">
              <h2 className="foodtime_hero_tittle">
                Order food online from your favourite local restaurants
                <span>.</span>
              </h2>
              <p className="foodtime_hero_p">
                Freshly made food delivered to your door.
              </p>
              <form action="" className="foodtime_form">
                <input
                  className="foodtime_input"
                  type="text"
                  placeholder="Enter your location"
                />
                <button className="foodtime_search_btn" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    fill="none"
                    viewBox="0 0 20 21"
                  >
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19.094-6-6m2-5a7.001 7.001 0 1 1-14.002 0 7.001 7.001 0 0 1 14.002 0Z"
                    />
                  </svg>
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="foodtime_hero_img">
              <img className="img-fluid" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

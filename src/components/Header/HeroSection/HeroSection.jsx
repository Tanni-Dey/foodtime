import "./HeroSection..css";
import heroImg from "../../../assets/images/hero_img.png";
import leftLeaf from "../../../assets/images/leaf.png";
import rightLeaf from "../../../assets/images/leaf.png";

const HeroSection = () => {
  return (
    <div className="foodtime_hero">
      <div className="hero_left_leaf">
        <img src={leftLeaf} alt="img" />
      </div>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19.094-6-6m2-5a7.001 7.001 0 1 1-14.002 0 7.001 7.001 0 0 1 14.002 0Z"
                    />
                  </svg>
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="foodtime_img_content">
              <div className="foodtime_hero_delivered_card">
                <div className="foodtime_hero_delivered_card_svg_heading">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="#FF8B00"
                        fillRule="evenodd"
                        d="M10.667 3.637A7.665 7.665 0 0 0 15.03 1.83a7.665 7.665 0 0 1 9.94 0 7.665 7.665 0 0 0 4.363 1.807 7.665 7.665 0 0 1 7.03 7.03 7.654 7.654 0 0 0 1.807 4.363 7.665 7.665 0 0 1 0 9.94 7.665 7.665 0 0 0-1.807 4.363 7.665 7.665 0 0 1-7.03 7.03 7.665 7.665 0 0 0-4.363 1.807 7.665 7.665 0 0 1-9.94 0 7.665 7.665 0 0 0-4.363-1.807 7.665 7.665 0 0 1-7.03-7.03A7.665 7.665 0 0 0 1.83 24.97a7.665 7.665 0 0 1 0-9.94 7.665 7.665 0 0 0 1.807-4.363 7.665 7.665 0 0 1 7.03-7.03Zm18.6 13.13a2.5 2.5 0 0 0-3.534-3.535L17.5 21.465l-3.233-3.232a2.5 2.5 0 0 0-3.535 3.534l5 5a2.5 2.5 0 0 0 3.535 0l10-10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="foodtime_hero_delivered_card_h3">200k+</h3>
                </div>

                <p>People Delivered</p>
              </div>
              <div className="foodtime_hero_img">
                <img className="img-fluid" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_right_leaf">
        <img src={rightLeaf} alt="img" />
      </div>
    </div>
  );
};

export default HeroSection;

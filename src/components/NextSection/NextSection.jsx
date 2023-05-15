import "./NextSection.css";
import deliveryMan from "../../assets/images/deliveryman.png";

const NextSection = () => {
  return (
    <div className="foodtime_fvrt_city_food">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="foodtime_fvrt_city_food_content">
              <h3>Explore your favourite city’s food.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
                tristique. Non ligula tristique ut ut libero sit convallis
                maecenas. At egestas auctor porta mattis.
              </p>
              <button className="foodtime_explore_btn">
                <span>Explore</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="11"
                  fill="none"
                  viewBox="0 0 16 11"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M10.293.799a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="foodtime_fvrt_city_food_img_content">
              <img className="img-fluid" src={deliveryMan} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSection;

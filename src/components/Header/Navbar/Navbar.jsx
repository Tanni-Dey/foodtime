import "./Navbar.css";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [itemCount, setItemsCount] = useState(0);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light foodtime_navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav foodtime_nav_ul ms-auto">
            <li className="nav-item foodtime_nav_item active">
              <a className="nav-link foodtime_navlink" href="#">
                Home
              </a>
            </li>
            <li className="nav-item foodtime_nav_item">
              <a className="nav-link foodtime_navlink" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item foodtime_nav_item">
              <a className="nav-link foodtime_navlink" href="#">
                About us
              </a>
            </li>
            <li className="nav-item foodtime_nav_item dropdown">
              <a
                className="nav-link foodtime_navlink foodtime_dropdown_toggle dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="foodtime_dropdown_text">EN</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="9"
                  fill="none"
                  viewBox="0 0 14 9"
                >
                  <path
                    fill="#3F3F3F"
                    d="M2.08.855 6.794 5.57 11.508.855a1.21 1.21 0 0 1 1.713 0 1.21 1.21 0 0 1 0 1.713L7.645 8.145a1.21 1.21 0 0 1-1.713 0L.355 2.568a1.21 1.21 0 0 1 0-1.713C.83.394 1.607.382 2.08.855Z"
                  />
                </svg>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div className="foodtime_nav_btn">
            <button className="btn btn_login">Login</button>
            <button className="btn btn_cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                fill="none"
                viewBox="0 0 29 30"
              >
                <path
                  fill="#fff"
                  d="M2.326 0c-.464 0-.909.186-1.237.517a1.772 1.772 0 0 0 0 2.496c.328.33.773.516 1.237.516h2.135l.534 2.157c.005.025.011.05.018.074l2.376 9.582-1.563 1.574c-2.205 2.224-.644 6.025 2.475 6.025h15.026c.464 0 .91-.186 1.237-.517a1.772 1.772 0 0 0 0-2.495 1.743 1.743 0 0 0-1.237-.517H8.301l1.75-1.765h11.526c.325 0 .643-.091.92-.264.276-.172.5-.419.645-.712l5.25-10.588a1.777 1.777 0 0 0-.077-1.716 1.739 1.739 0 0 0-1.488-.837H8.067l-.543-2.194a1.766 1.766 0 0 0-.62-.962A1.74 1.74 0 0 0 5.825 0h-3.5Zm22.751 27.353c0 .702-.277 1.375-.769 1.872a2.614 2.614 0 0 1-1.856.775 2.614 2.614 0 0 1-1.856-.775 2.658 2.658 0 0 1-.77-1.872c0-.702.277-1.375.77-1.872a2.614 2.614 0 0 1 1.856-.775c.696 0 1.364.279 1.856.775.492.497.77 1.17.77 1.872ZM8.452 30c.696 0 1.363-.279 1.856-.775a2.661 2.661 0 0 0-.001-3.744 2.614 2.614 0 0 0-1.855-.775c-.697 0-1.364.279-1.857.775a2.658 2.658 0 0 0-.769 1.872c0 .702.277 1.375.77 1.872.492.496 1.16.775 1.856.775Z"
                />
              </svg>
            </button>
            <button className="btn foodtime_cartcount">{itemCount}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

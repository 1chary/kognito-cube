import React from "react";
import "./index.css";
import Popup from "reactjs-popup";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://res.cloudinary.com/dowjvitxs/image/upload/v1732950704/tkk_graphic_hkkp5z.png"
        alt="graphic-image"
        className="header-image-styling"
      />
      <ul className="tabs-container-for-large-devices">
        <Link to="/" className="link-style">
          <li className="tab-styling">Home</li>
        </Link>
        <Link to="/about" className="link-style">
          <li className="tab-styling">About</li>
        </Link>
        <Link to="/product" className="link-style">
          <li className="tab-styling">Product</li>
        </Link>
        <Link to="/services" className="link-style">
          <li className="tab-styling">Services</li>
        </Link>
        <Link to="/contact" className="link-style">
          <li className="tab-styling">Contact</li>
        </Link>
      </ul>
      <div className="tab-styling-for-small-devices">
        <Popup
          trigger={
            <button className="icon-button-styling">
              <GiHamburgerMenu className="icon-styling" />
            </button>
          }
        >
          <ul>
            <Link to="/" className="link-style">
              <li className="tab-styling">Home</li>
            </Link>
            <Link to="/about" className="link-style">
              <li className="tab-styling">About</li>
            </Link>
            <Link to="/product" className="link-style">
              <li className="tab-styling">Product</li>
            </Link>
            <Link to="/services" className="link-style">
              <li className="tab-styling">Services</li>
            </Link>
            <Link to="/contact" className="link-style">
              <li className="tab-styling">Contact</li>
            </Link>
          </ul>
        </Popup>
      </div>
    </div>
  );
};

export default Header;

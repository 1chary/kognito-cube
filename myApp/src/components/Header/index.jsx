import React from "react";
import "./index.css";
import Popup from "reactjs-popup";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://res.cloudinary.com/dowjvitxs/image/upload/v1732950704/tkk_graphic_hkkp5z.png"
        alt="graphic-image"
        className="header-image-styling"
      />
      <ul className="tabs-container-for-large-devices">
        <li className="tab-styling">Home</li>
        <li className="tab-styling">About</li>
        <li className="tab-styling">Product</li>
        <li className="tab-styling">Services</li>
        <li className="tab-styling">Contact</li>
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
            <li className="tab-styling">Home</li>
            <li className="tab-styling">About</li>
            <li className="tab-styling">Product</li>
            <li className="tab-styling">Services</li>
            <li className="tab-styling">Contact</li>
          </ul>
        </Popup>
      </div>
    </div>
  );
};

export default Header;

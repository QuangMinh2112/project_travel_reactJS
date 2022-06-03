import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container_footer">
        <div className="box_1">
          <div className="box-head">
            <h1>TRAVEL</h1>
            {/* <span>The heart of tech</span> */}
          </div>
          <div className="icon_footer">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_2">
          <div className="box-head">
            <h1>MORE TRAVEL</h1>
            <ul>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Spaces</a>
              </li>
              <li>
                <a href="#">Newsletters</a>
              </li>
              <li>
                <a href="#">Deals</a>
              </li>
            </ul>
          </div>
          <div className="box-head">
            <h1>ABOUT TRAVEL</h1>
            <ul>
              <li>
                <a href="#">Partner with us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Statemen</a>
              </li>
              <li>
                <a href="#">Editorial Policy</a>
              </li>
              <li>
                <a href="#">Masthead</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="Copyright">
        <div className="text_box">
          <p>
            TRAVEL is a <span className="text">Financial Times</span> company.
          </p>
          <p>
            Copyright © 2006—2022, The Travel Web B.V. Made with in Amsterdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

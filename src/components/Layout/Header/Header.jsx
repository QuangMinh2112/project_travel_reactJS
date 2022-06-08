import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="container-header">
      <div className="logo">
        <NavLink to="./">
          <img
            src="https://livedemo00.template-help.com/wt_51676/images/logo-default-208x46.png"
            alt="logo"
          />
        </NavLink>
      </div>
      <nav>
        <ul className="main-menu">
          <li>
            <NavLink to="/">Trang Chủ</NavLink>
          </li>
          <li>
            <a href="">Hình Ảnh</a>
          </li>
          <li>
            <a href="">Tour Đảo</a>
          </li>
          <li>
            <a href="">Khách Sạn</a>
          </li>
          <li>
            <a href="">Khuyễn Mãi</a>
          </li>
          <li>
            <a href="">Kinh nghiệm</a>
          </li>
        </ul>
      </nav>
      <NavLink to="/login">
        <button className="btn-login">Login</button>
      </NavLink>
    </div>
  );
};

export default Header;

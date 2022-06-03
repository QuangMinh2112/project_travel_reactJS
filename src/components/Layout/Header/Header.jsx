import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="container-header">
      <div className="logo">
        <a href="#">
          <img
            src="https://livedemo00.template-help.com/wt_51676/images/logo-default-208x46.png"
            alt="logo"
          />
        </a>
      </div>
      <nav>
        <ul className="main-menu">
          <li>
            <a href="">Trang Chủ</a>
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
      <button className="btn-login">Login</button>
    </div>
  );
};

export default Header;

import React from "react";
import "./Subscribe.scss";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div id="box">
        <div className="heading_title">
          <h1>Đăng Ký Để Nhận Thông Báo Mới Nhất Thông Qua Email</h1>

          <p>Những món quà ưu đãi hấp dẫn đang chờ bạn</p>
        </div>

        <div className="input_group">
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Nhập email của bạn"
          />
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

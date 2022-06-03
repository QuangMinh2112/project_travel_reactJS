import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListTour.scss";

const ListTour = ({ id, title, num_order, address, price, image }) => {
  //formatter price
  var formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="box_container">
        <div className="images">
          <img src={image} />
        </div>
        <div className="tour_info">
          <div className="tour_container">
            <h1>{title}</h1>
            <span>
              5 <i className="fa-solid fa-star" /> | {num_order} Đã đặt
            </span>
            <a href="">Chi tiết</a>
          </div>
          <div className="addres">
            <p>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#337ab7" }}
              />
              {address.length > 45 ? `${address.substring(0, 45)}...` : address}
            </p>
          </div>
          <div className="book_now">
            <button>Đặt ngay</button>
            <span className="price">{formatter.format(price)}</span>
          </div>
          <div className="number">
            <p>
              <span className="pull_right">Người/vé</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTour;

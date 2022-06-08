import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InfoTour from "../Tour/InfoTour";
import "./ListTour.scss";

const ListTour = ({ id, name, num_order, address, price, image }) => {
  //formatter price
  var formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const navigate = useNavigate();

  // const handleBookNow = () => {
  //   const getDataTour = {
  //     id,
  //     name,
  //     image,
  //     address,
  //     price,
  //     num_order,
  //   };
  //   console.log(getDataTour);
  // };

  return (
    <>
      <div className="box_container">
        <div className="images">
          <img src={image} />
        </div>
        <div className="tour_info">
          <div className="tour_container">
            <h1>{name}</h1>
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
            <NavLink to={`./infotour/${id}`}>
              <button>Đặt ngay</button>
            </NavLink>
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

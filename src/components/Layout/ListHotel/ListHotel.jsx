import React from "react";
import "./ListHotel.scss";
const ListHotel = ({ title, address, price, images, id }) => {
  var formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="box_container">
      <div className="images">
        <img src={images} />
      </div>
      <div className="tour_info">
        <div className="tour_container">
          <h1>{title.length > 25 ? `${title.substring(0, 25)}...` : title}</h1>
          <span>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </span>
          <a href="">Chi tiết</a>
        </div>
        <div className="addres">
          <p>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#337ab7" }}
            />
            {address.length > 20 ? `${address.substring(0, 20)}...` : address}
          </p>
        </div>
        <div className="book_now">
          <button>Đặt ngay</button>
          <span className="price">{formatter.format(price)}</span>
        </div>
        <div className="number">
          <p>
            <span className="pull_right">Phòng/đêm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListHotel;

import React from "react";
import { Link } from "react-router-dom";

// Import Css
import "../../asset/styles/boxProduct.css";

// Import Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const BoxProduct = (props) => {
  return (
    <div className="box col-lg-4 col-md-6 p-3">
      <Link to="/product-detail" style={{ textDecoration: "none", color: "black" }}>
        <div className="box_content shadow">
          <div className="image">
            <img src={props.image} alt="anh-can-ho-cao-cap" />
          </div>
          <div className="m-4">
            <h5 className="title">{props.title}</h5>
            <div className="rating mb-2">
              <AiFillStar color="yellow" size="22" />
              <AiFillStar color="yellow" size="22" />
              <AiFillStar color="yellow" size="22" />
              <AiFillStar color="yellow" size="22" />
              <AiOutlineStar color="yellow" size="22" />
            </div>
            <div className="address">{props.address}</div>
            <div className="booking d-flex justify-content-between align-items-center mt-4 pb-4">
              <button className="btn btn-warning text-white px-4">
                Đặt Ngay
              </button>
              <div className="price">
                <p
                  className="m-0"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {props.price}
                </p>
                <span style={{ float: "right" }}>phòng/đêm</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoxProduct;

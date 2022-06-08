import React from "react";
import BoxProduct from "./BoxProduct";

// Import Css
import "../../asset/styles/product.css";

// Import images
import image01 from "../../asset/images/1.jpg";

const Product = () => {
  return (
    <div className="container my-3">
      <div className="head row align-items-center">
        <div className="col-md-9">
          <p className="m-0">Có 85 kết quả</p>
        </div>
        <div className="col-md-3">
          <select className="form-select" aria-label="Default select example">
            <option>Không sắp xếp</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="listProduct">
        <div className="row mt-4">
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
          <BoxProduct
            image={image01}
            title="Villa Phú Quốc"
            address="Bãi Dài, Gành Dầu, Phú Quốc"
            price="7.250.000đ"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;

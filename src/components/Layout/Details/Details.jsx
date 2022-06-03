import React from "react";
import { Outlet } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <h1>Đây là trang chi tiết</h1>
      <Outlet />
    </div>
  );
};

export default Details;

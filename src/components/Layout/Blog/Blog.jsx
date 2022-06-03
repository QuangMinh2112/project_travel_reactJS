import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Blog.scss";

const Blog = ({ id, title, images, date }) => {
  return (
    <div className="blog_container">
      <div className="head">
        <h3>Phổ biến</h3>
        <span>{date}</span>
      </div>
      <div className="thumbnail">
        <img src={images} alt="" />
      </div>
      <div className="caption">
        <h3>{title}</h3>
        <NavLink to="./details">Chi tiết</NavLink>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "./hooks";
import "./login.scss";

const Login = () => {
  const [listUser, setListUser] = useState([]);
  const [error, setError] = useState("");

  const inputEmail = useInput();
  const inputPassword = useInput();

  useEffect(() => {
    const fetchData = () => {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/bee_account")
        .then((response) => response.json())
        .then((data) => {
          setListUser(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let x of listUser) {
      if (inputEmail.value === x.email) {
        if (x.password === inputPassword.value) {
          window.location.href = "#";
          localStorage.setItem(
            "loginSucces",
            JSON.stringify({ email: inputEmail.value, status: true })
          );
          break;
        } else {
          setError("Mật khẩu không đúng, hãy thử lại");
          break;
        }
      } else {
        setError("Email chưa được đăng ký");
      }
    }
  };
  return (
    <div class="section">
      <div class="aside">
        <h1>XIN CHÀO</h1>
        <h1>
          HÃY ĐĂNG NHẬP <br />
          TẠI ĐÂY NHÉ!
        </h1>
      </div>
      <div class="main">
        <h3>ĐĂNG NHẬP</h3>
        <p>Hãy điền các thông tin đăng nhập</p>
        <form action="" method="GET" id="login">
          <input
            id="login_email"
            type="email"
            placeholder="Email"
            value={inputEmail.value}
            onChange={inputEmail.onChange}
          />
          <br />
          <span class="errorAPI"></span>
          <input
            id="login_password"
            type="password"
            placeholder="Password"
            value={inputPassword.value}
            onChange={inputPassword.onChange}
          />
          <br />
          <div id="error">{error}</div>
          <button type="submit" id="login_submit" onClick={handleSubmit}>
            ĐĂNG NHẬP
          </button>
        </form>
        <p>
          Bạn chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

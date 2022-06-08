import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useInput } from "./hooks";

import "./register.scss";

const Register = () => {
  const [listUser, setListUser] = useState([]);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const inputEmail = useInput();
  const inputPassword = useInput();
  const inputRepassword = useInput();

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/bee_account")
        .then((response) => response.json())
        .then((data) => {
          setListUser(data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [isRegister]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let checkEmail = true;
    let checkPassword = true;
    if (
      inputEmail.value.length < 10 &&
      inputEmail.value.includes("@") === false
    ) {
      setErrorEmail("Định dạng email chưa hợp lệ");
      checkEmail = false;
    } else {
      for (let x of listUser) {
        if (inputEmail.value === x.email) {
          checkEmail = false;
        }
      }
    }
    if (checkEmail) {
      setErrorEmail("");
    }
    if (inputPassword.value.length < 8) {
      checkPassword = false;
      setErrorPassword("Mật khẩu tối thiểu 8 ký tự, hãy thử lại!");
    }
    if (inputRepassword.value !== inputPassword.value) {
      checkPassword = false;
      setErrorPassword("Mật khẩu nhập lại không chính xác.");
    }
    if (checkPassword) {
      setErrorPassword("");
    }
    if (checkEmail === true && checkPassword === true) {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/bee_account", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setIsRegister(!isRegister);
          console.log(res);
          inputEmail.value = "";
          inputPassword.value = "";
          inputRepassword.value = "";
          localStorage.setItem(
            "loginSucces",
            JSON.stringify({ email: inputEmail.value, status: true })
          );
          toast.success("🦄 Đăng ký thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="section">
      <ToastContainer />
      <div className="main">
        <h3>ĐĂNG KÝ</h3>
        <p>Bạn hãy điền đầy đủ các thông tin sau</p>
        <form action="#" method="POST" id="register">
          <input
            id="register_email"
            type="email"
            placeholder="Email"
            value={inputEmail.value}
            onChange={inputEmail.onChange}
          />
          <br />
          <input
            id="register_password"
            type="password"
            placeholder="Password"
            value={inputPassword.value}
            onChange={inputPassword.onChange}
          />
          <br />
          <input
            id="register_repassword"
            type="password"
            placeholder="Enter the password again"
            value={inputRepassword.value}
            onChange={inputRepassword.onChange}
          />
          <br />
          <div id="error">{errorEmail ? errorEmail : errorPassword}</div>
          <button type="submit" id="register_submit" onClick={handleSubmit}>
            ĐĂNG KÝ TÀI KHOẢN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
